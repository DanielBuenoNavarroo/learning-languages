import React from "react";
import { Pressable, View } from "react-native";
import { MD3Theme, Surface } from "react-native-paper";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { NavigationHelpers, ParamListBase } from "@react-navigation/native";
import { BottomTabNavigationEventMap } from "@react-navigation/bottom-tabs";
import Svg, { Circle } from "react-native-svg";

type Props = {
  TAB_HEIGHT: number;
  FAB_SIZE: number;
  theme: MD3Theme;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

const TabFloatingButton = ({
  FAB_SIZE,
  TAB_HEIGHT,
  navigation,
  theme,
}: Props) => {
  const BUTTON_SIZE = FAB_SIZE - 20;
  const RING_SIZE = BUTTON_SIZE + 15;
  const RING_RADIUS = RING_SIZE / 2 - 4;
  const CIRCUMFERENCE = 2 * Math.PI * RING_RADIUS;

  const progress = 0.0;

  return (
    <Surface
      style={{
        position: "absolute",
        alignSelf: "center",
        bottom: TAB_HEIGHT - FAB_SIZE / 2,
        width: FAB_SIZE,
        height: FAB_SIZE,
        borderRadius: FAB_SIZE / 2,
        backgroundColor: theme.colors.background,
        overflow: "hidden",
        padding: 8,
        elevation: 0,
        shadowColor: "transparent",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Border */}
      <View
        style={{
          position: "absolute",
          top: 0,
          width: FAB_SIZE,
          height: FAB_SIZE / 2,
          borderTopLeftRadius: FAB_SIZE / 2,
          borderTopRightRadius: FAB_SIZE / 2,
          borderWidth: 1,
          borderBottomWidth: 0,
          borderColor: "#343A42",
          backgroundColor: "transparent",
        }}
      />

      {/* PROGRESS RING */}
      <Svg
        width={RING_SIZE}
        height={RING_SIZE}
        style={{ position: "absolute" }}
      >
        <Circle
          cx={RING_SIZE / 2}
          cy={RING_SIZE / 2}
          r={RING_RADIUS}
          stroke="#3d4249"
          strokeWidth={4}
          fill="none"
          strokeDasharray={`${CIRCUMFERENCE * 0.85}, ${CIRCUMFERENCE}`}
          strokeLinecap="round"
          transform={`rotate(-243 ${RING_SIZE / 2} ${RING_SIZE / 2})`}
          origin={`${RING_SIZE / 2}, ${RING_SIZE / 2}`}
        />

        {progress > 0.0 && (
          <Circle
            cx={RING_SIZE / 2}
            cy={RING_SIZE / 2}
            r={RING_RADIUS}
            stroke={theme.colors.primary}
            strokeWidth={4}
            fill="none"
            strokeDasharray={`${CIRCUMFERENCE * 0.85 * progress}, ${CIRCUMFERENCE}`}
            strokeLinecap="round"
            transform={`rotate(-243 ${RING_SIZE / 2} ${RING_SIZE / 2})`}
          />
        )}
      </Svg>

      {/* Navigation button */}
      <Pressable
        onPress={() => navigation.navigate("play")}
        style={{
          width: BUTTON_SIZE,
          height: BUTTON_SIZE,
          borderRadius: BUTTON_SIZE / 2,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "white",
        }}
      >
        <MaterialCommunityIcons name="location-exit" size={28} />
      </Pressable>
    </Surface>
  );
};

export default TabFloatingButton;
