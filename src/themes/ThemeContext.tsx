import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useEffect, useMemo, useState } from "react";
import { useColorScheme } from "react-native";
import { darkTheme, lightTheme } from "./theme";

export const ThemeContext = createContext({
  theme: lightTheme,
  mode: "light",
  setMode: (mode: "light" | "dark" | "system") => {},
});

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const systemScheme = useColorScheme();
  const [mode, setMode] = useState<"light" | "dark" | "system">("system");

  useEffect(() => {
    AsyncStorage.getItem("theme-mode").then((value) => {
      if (value) setMode(value as any);
    });
  }, []);

  useEffect(() => {
    AsyncStorage.setItem("theme-mode", mode);
  }, [mode]);

  const theme =
    mode === "system"
      ? systemScheme === "dark"
        ? darkTheme
        : lightTheme
      : mode === "dark"
        ? darkTheme
        : lightTheme;

  const value = useMemo(() => ({ theme, mode, setMode }), [theme, mode]);

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
