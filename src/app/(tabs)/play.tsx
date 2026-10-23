import * as Speech from "expo-speech";
import { router } from "expo-router";
import { Screen } from "@/components/Screen";
import { Ionicons } from "@react-native-vector-icons/ionicons";
import {
  View,
  Pressable,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import { useState, useEffect } from "react";
import { useProgress } from "@/components/context/ProgressContext";
import { useSRS } from "@/hooks/useSRS";
import { LevelBars } from "@/components/LevelBars";
import AntDesign from "@react-native-vector-icons/ant-design";
import {
  ExpoSpeechRecognitionModule,
  useSpeechRecognitionEvent,
} from "expo-speech-recognition";
import FontAwesome6 from "@react-native-vector-icons/fontawesome6";

const PlayScreen = () => {
  const [text, setText] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [showAudio, setShowAudio] = useState(false);
  const [showLearn, setShowLearn] = useState(true);
  const [showNext, setShowNext] = useState(false);
  const [listening, setListening] = useState(false);
  const [speechAvailable, setSpeechAvailable] = useState(false);
  const [hasFailedOnce, setHasFailedOnce] = useState(false);
  const [updatedLevel, setUpdatedLevel] = useState<number | null>(null);

  const theme = useTheme();
  const { progress, learnedToday, incrementProgress } = useProgress();
  const {
    nextWord,
    markCorrect,
    markWrong,
    markSolution,
    reload,
    getUpdatedState,
    getLearnedWords,
    deleteAllData,
  } = useSRS();

  useEffect(() => {
    setSpeechAvailable(ExpoSpeechRecognitionModule?.isRecognitionAvailable());
    setShowAudio(false);
  }, []);

  useEffect(() => {
    setShowLearn(text.trim() != "" ? false : true);
    setPlaceholder("");
  }, [text]);

  useEffect(() => {}, [nextWord?.id]);

  useSpeechRecognitionEvent("start", () => {
    setListening(true);
  });

  useSpeechRecognitionEvent("end", () => {
    setListening(false);
  });

  useSpeechRecognitionEvent("result", (event) => {
    const transcript = event.results[0]?.transcript;

    if (transcript) {
      setText(transcript);
    }
  });

  useSpeechRecognitionEvent("error", (event) => {
    setListening(false);
    console.error("Error de reconocimiento:", event.error);
  });

  if (!nextWord || !nextWord.word) {
    return (
      <Screen>
        <Text style={{ color: "white" }}>Cargando...</Text>
      </Screen>
    );
  }

  const normalize = (value: string) => value.trim().toLocaleLowerCase("de-DE");

  const checkAnswer = async () => {
    let current = await getUpdatedState(nextWord.id);

    if (!current) {
      current = {
        id: nextWord.id,
        srsLevel: nextWord.srsLevel,
        correctStreak: nextWord.correctStreak,
        wrongCount: nextWord.wrongCount,
        nextReview: nextWord.nextReview,
        lastSeen: nextWord.lastSeen,
      };
    }

    const correct = normalize(text) === normalize(nextWord.word);

    if (correct) {
      if (!hasFailedOnce) {
        await markCorrect();
      } else {
        await markSolution();
      }

      const updated = await getUpdatedState(nextWord.id);

      setUpdatedLevel(updated?.srsLevel ?? current.srsLevel);

      await incrementProgress();

      audio();
      setShowNext(true);
    } else {
      show()
    }
  };

  const show = async () => {
    setText("")
    setPlaceholder(nextWord.word);
    setShowAudio(true);
    setShowLearn(false);

    await markWrong();

    setHasFailedOnce(true);
  };

  const audio = () => {
    Speech.speak(nextWord.word, {
      voice: "de-de-x-deg-network",
      pitch: 1,
      language: "de-DE",
    });
  };

  const listen = async () => {
    if (!speechAvailable) {
      console.warn("El reconocimiento no está disponible en este dispositivo.");
      return;
    }

    try {
      const permission =
        await ExpoSpeechRecognitionModule.requestPermissionsAsync();

      if (!permission.granted) {
        console.warn("No se concedió permiso para usar el micrófono.");
        return;
      }

      ExpoSpeechRecognitionModule.start({
        lang: "de-DE",
        interimResults: true,
        continuous: false,
      });
    } catch (error) {
      console.error("No se pudo iniciar el reconocimiento:", error);
    }
  };

  const next = () => {
    setHasFailedOnce(false);
    setShowAudio(false);
    setUpdatedLevel(null);
    setShowNext(false);
    setText("");
    setPlaceholder("");
    reload();
  };

  const showLearnedWords = async () => {
    const learned = await getLearnedWords();
    console.log("Learned words::: \n", learned);
  };

  const handleReset = async () => {
    await deleteAllData();
    await reload();
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <Screen>
        {/* Top */}
        <View style={styles.topRow}>
          <Pressable onPress={() => router.navigate("/")}>
            <Ionicons name="home-outline" size={28} color="white" />
          </Pressable>

          <View style={{ flex: 1, justifyContent: "center", gap: 2 }}>
            <Text style={{ color: "white", fontSize: 10 }}>
              {learnedToday}/50
            </Text>
            <View style={styles.progressBarBackground}>
              <View
                style={[
                  styles.progressBarFill,
                  {
                    width: `${Math.max(0, Math.min(1, progress)) * 100}%`,
                    backgroundColor: theme.colors.primary,
                  },
                ]}
              />
            </View>
          </View>
        </View>

        {/* Question */}
        <View style={styles.card}>
          <LevelBars
            level={updatedLevel ?? nextWord.srsLevel}
            previousLevel={nextWord.srsLevel}
            correct={showNext}
          />

          <View style={[styles.tag, { alignSelf: "stretch" }]}>
            <TextInput
              style={styles.word}
              value={text}
              onChangeText={setText}
              placeholder={placeholder}
              placeholderTextColor="#aaa"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.tag}>
            <Text style={styles.type}>{nextWord.type}</Text>
          </View>
        </View>

        {/* Answer */}
        <View style={styles.card}>
          <Text style={styles.type}>{nextWord.trans}</Text>
        </View>

        {/* Bottom actions */}
        <View style={styles.bottomContainer}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              marginLeft: 12,
              flexDirection: "row",
              gap: 16,
            }}
          >
            {speechAvailable && (
              <Pressable
                onPress={() => {
                  if (listening) {
                    ExpoSpeechRecognitionModule.stop();
                  } else {
                    listen();
                  }
                }}
              >
                <AntDesign
                  name="audio"
                  size={28}
                  color={listening ? "#838aba" : "white"}
                />
              </Pressable>
            )}

            {showAudio && (
              <Pressable onPress={audio}>
                <Ionicons
                  name="volume-high-outline"
                  size={28}
                  color={"white"}
                />
              </Pressable>
            )}

            <Pressable onPress={handleReset}>
              <FontAwesome6 name="file-word" size={28} color={"white"} />
            </Pressable>
          </View>

          {showNext ? (
            <Pressable style={styles.bottomButtonNext} onPress={next}>
              <Ionicons
                name="arrow-forward-circle"
                size={18}
                color={"#474e57"}
              />
              <Text style={styles.bottomText}>Siguiente</Text>
            </Pressable>
          ) : showLearn ? (
            <Pressable style={styles.bottomButton} onPress={show}>
              <Ionicons name="chatbox-ellipses" size={18} color={"#474e57"} />
              <Text style={styles.bottomText}>Aprender</Text>
            </Pressable>
          ) : (
            <Pressable
              style={
                text.trim() === ""
                  ? styles.bottomButtonDisabled
                  : styles.bottomButton
              }
              onPress={checkAnswer}
              disabled={text.trim() === ""}
            >
              <FontAwesome6
                name="circle-check"
                size={18}
                color={text.trim() === "" ? "#525252" : "#474e57"}
              />
              <Text
                style={
                  text.trim() === ""
                    ? styles.bottomTextDisabled
                    : styles.bottomText
                }
              >
                Validar
              </Text>
            </Pressable>
          )}
        </View>
      </Screen>
    </KeyboardAvoidingView>
  );
};

export default PlayScreen;

const styles = StyleSheet.create({
  topRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 32,
  },

  progressBarBackground: {
    flex: 1,
    height: 8,
    backgroundColor: "#343A42",
    borderRadius: 8,
    overflow: "hidden",
  },

  progressBarFill: {
    height: "100%",
    borderRadius: 8,
  },

  card: {
    backgroundColor: "#343A42",
    marginTop: 16,
    padding: 16,
    borderRadius: 8,
    gap: 12,
    elevation: 4,
  },

  label: {
    fontSize: 12,
    color: "#FFD54F",
  },

  tag: {
    elevation: 2,
    backgroundColor: "#474e57",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },

  word: {
    fontSize: 16,
    color: "white",
    minWidth: 120,
    minHeight: 24,
    paddingVertical: 0,
    paddingHorizontal: 0,
    textAlignVertical: "center",
  },

  type: {
    fontSize: 16,
  },

  bottomContainer: {
    backgroundColor: "#343A42",
    position: "absolute",
    bottom: 20,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 24,
    padding: 10,
    borderRadius: 24,
    width: "100%",
  },

  bottomButton: {
    backgroundColor: "#e7e7e7",
    borderRadius: 64,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 12,
    gap: 12,
    elevation: 4,
  },

  bottomButtonDisabled: {
    backgroundColor: "#cfcfcf",
    borderRadius: 64,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 12,
    gap: 12,
    opacity: 0.6,
    elevation: 0,
  },

  bottomButtonNext: {
    backgroundColor: "#4CAF50",
    borderRadius: 64,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    padding: 12,
    gap: 12,
    elevation: 4,
  },

  bottomText: {
    fontSize: 16,
    color: "#343A42",
    borderRadius: 8,
    fontWeight: 700,
  },

  bottomTextDisabled: {
    fontSize: 16,
    color: "#525252",
    fontWeight: 700,
  },
});
