import TabButton from "@/components/TabButton";
import TabFloatingButton from "@/components/TabFloatingButton";
import {
  FontAwesome6,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";
import { View } from "react-native";
import { Surface, useTheme } from "react-native-paper";

const TAB_HEIGHT = 70;
const FAB_SIZE = 70;

const tabs = [
  {
    name: "index",
    label: "Home",
    icon: (color: string) => (
      <Ionicons name="home-outline" size={28} color={color} />
    ),
  },
  {
    name: "content",
    label: "Content",
    icon: (color: string) => (
      <MaterialCommunityIcons
        name="folder-multiple-outline"
        size={28}
        color={color}
      />
    ),
    style: { marginRight: 10 },
  },
  {
    name: "fab-space",
    label: "",
    icon: undefined,
  },
  {
    name: "insights",
    label: "Insights",
    icon: (color: string) => (
      <Ionicons name="stats-chart" size={28} color={color} />
    ),
    style: { marginLeft: 10 },
  },
  {
    name: "account",
    label: "Account",
    icon: (color: string) => (
      <FontAwesome6 name="user" size={28} color={color} />
    ),
  },
];

export default function Layout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: TAB_HEIGHT },
      }}
      tabBar={({ navigation, state }) => {
        const currentRoute = state.routes[state.index].name;

        return (
          <Surface
            style={{
              flexDirection: "row",
              height: TAB_HEIGHT,
              justifyContent: "space-around",
              paddingTop: 7,
              borderTopWidth: 1,
              borderTopColor: "#343A42",
              backgroundColor: theme.colors.background,
            }}
          >
            {tabs.map((tab, i) => {
              if (tab.name === "fab-space") {
                return <View key={i} style={{ flex: 1 }} />;
              }

              const isFocused = currentRoute === tab.name;

              return (
                <TabButton
                  key={tab.name}
                  label={tab.label}
                  icon={(color) => tab.icon?.(color)}
                  onPress={() => navigation.navigate(tab.name)}
                  theme={theme}
                  focused={isFocused}
                  style={tab.style}
                />
              );
            })}

            <TabFloatingButton
              FAB_SIZE={FAB_SIZE}
              TAB_HEIGHT={TAB_HEIGHT}
              navigation={navigation}
              theme={theme}
            />
          </Surface>
        );
      }}
    >
      <Tabs.Screen name="index" />
      <Tabs.Screen name="content" />
      <Tabs.Screen name="play" options={{ href: null }} />
      <Tabs.Screen name="insights" />
      <Tabs.Screen name="account" />
    </Tabs>
  );
}
