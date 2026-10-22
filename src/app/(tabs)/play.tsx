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
import { useState } from "react";
import { useProgress } from "@/components/context/ProgressContext";
import { useSRS } from "@/hooks/useSRS";
import { LevelBars } from "@/components/LevelBars";
import AntDesign from "@react-native-vector-icons/ant-design";
import {
  ExpoSpeechRecognitionModule,
  useSpeechRecognitionEvent,
} from "expo-speech-recognition";

const PlayScreen = () => {
  const [text, setText] = useState("");
  const [placeholder, setPlaceholder] = useState("");
  const [showAudio, setShowAudio] = useState(false);
  const [listening, setListening] = useState(false);

  const theme = useTheme();
  const { progress, setProgress } = useProgress();
  const { nextWord, markCorrect, markWrong, markSolution, reload } = useSRS();

  if (!nextWord || !nextWord.word) return;

  const checkAnswer = () => {
    const normalize = (value: string) =>
      value.trim().toLocaleLowerCase("de-DE");

    if (normalize(text) === normalize(nextWord.word)) {
      markCorrect();
    } else {
      markWrong();
    }

    setText("");
  };

  const show = () => {
    setPlaceholder(nextWord.word);
  };

  const audio = () => {
    Speech.speak(nextWord.word, {
      voice: "de-de-x-deg-network",
      pitch: 1,
      language: "de-DE",
    });
  };

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
    console.error("Error de reconocimiento:", event.error, event.message);
  });

  const listen = async () => {
    try {
      const permission =
        await ExpoSpeechRecognitionModule.requestPermissionsAsync();

      if (!permission.granted) {
        console.warn("No se concedió permiso para usar el micrófono.");
        return;
      }

      setText("");

      ExpoSpeechRecognitionModule.start({
        lang: "de-DE",
        interimResults: true,
        continuous: false,
      });
    } catch (error) {
      console.error("No se pudo iniciar el reconocimiento:", error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={0}
    >
      <Screen>
        {/* Top */}
        <View style={styles.topRow}>
          <Pressable onPress={() => router.navigate("/")}>
            <Ionicons name="home-outline" size={28} color="white" />
          </Pressable>

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

        {/* Question */}
        <View style={styles.card}>
          <View style={{}}>
            <LevelBars level={nextWord.srsLevel} />
          </View>

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
              gap: 16
            }}
          >
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
            {showAudio && (
              <Pressable onPress={audio}>
                <Ionicons name="volume-high-outline" size={28} color={"white"} />
              </Pressable>
            )}
          </View>
          <Pressable style={styles.bottomButton} onPress={show}>
            <Ionicons name="chatbox-ellipses" size={18} color={"#474e57"} />
            <Text style={styles.bottomText}>Aprender</Text>
          </Pressable>
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
    padding: 8,
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
  },

  bottomText: {
    fontSize: 16,
    color: "#343A42",
    borderRadius: 8,
    fontWeight: 700
  },
});
