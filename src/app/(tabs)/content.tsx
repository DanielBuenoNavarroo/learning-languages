import KanjiIcon from "@/components/KanjiIcon";
import { Screen } from "@/components/Screen";
import React from "react";
import { Text } from "react-native-paper";

const ContentScreen = () => {
  return (
    <Screen>
      <Text>ContentScreen</Text>
      <KanjiIcon char="日" size={50} color="white" />
    </Screen>
  );
};

export default ContentScreen;
