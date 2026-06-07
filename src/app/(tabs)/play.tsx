import { Screen } from "@/components/Screen";
import { Button, Text } from "react-native-paper";
import { HanziWriter, useHanziWriter } from "@jamsch/react-native-hanzi-writer";
import { View } from "react-native";

import * as Speech from "expo-speech";

const PlayScreen = () => {
  const writer = useHanziWriter({
    character: "日",
    async loader(char) {
      const res = await fetch(
        `https://cdn.jsdelivr.net/npm/hanzi-writer-data@2.0/${char}.json`,
      );
      return await res.json();
    },
  });

  const quizActive = writer.quiz.useStore((s) => s.active);

  const startQuiz = () => {
    writer.quiz.start({
      leniency: 1,
      quizStartStrokeNum: 0,
      showHintAfterMisses: 2,
      onComplete({ totalMistakes }) {
        console.log("Finish");
      },
      onCorrectStroke() {
        console.log("Correct");
      },
      onMistake(strokeData) {
        console.log("on mistake: ", strokeData);
      },
    });
  };

  const speak = () => {
    const thingToSay = "こんにちは";
    Speech.speak(thingToSay, {
      voice: "ja-jp-x-jad-network",
      pitch: 1,
      language: "ja-JP",
    });
  };

  return (
    <Screen>
      <Text>PlayScreen</Text>
      <HanziWriter
        writer={writer}
        loading={<Text>Loading...</Text>}
        error={
          <View>
            <Text>Error loading character.</Text>
          </View>
        }
        style={{ alignSelf: "center" }}
      >
        <HanziWriter.GridLines color="#000" />
        <HanziWriter.Svg>
          <HanziWriter.Character color="#fff" radicalColor="green" />
          <HanziWriter.QuizStrokes />
          <HanziWriter.QuizMistakeHighlighter
            color="#539bf5"
            strokeDuration={400}
          />
        </HanziWriter.Svg>
      </HanziWriter>
      <Button onPress={quizActive ? writer.quiz.stop : startQuiz}>
        <Text>{quizActive ? "Stop Quiz" : "Start Quiz"}</Text>
      </Button>
      <Button onPress={speak}>
        <Text>Speech</Text>
      </Button>
    </Screen>
  );
};

export default PlayScreen;
