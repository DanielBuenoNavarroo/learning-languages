import React from "react";
import { Text } from "react-native-paper";

type Props = {
  char: string;
  size?: number;
  color?: string;
  weight?: "regular" | "bold";
};

export default function KanjiIcon({
  char,
  size = 32,
  color = "#000",
  weight = "regular",
}: Props) {
  return (
    <Text
      style={{
        fontFamily: "Kanji",
        fontSize: size,
        color,
        fontWeight: weight === "bold" ? "700" : "400",
        includeFontPadding: false,
        textAlignVertical: "center",
      }}
    >
      {char}
    </Text>
  );
}
