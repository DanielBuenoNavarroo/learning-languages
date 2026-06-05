import { MD3DarkTheme, MD3LightTheme } from "react-native-paper";

export const lightTheme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: "#006971",
    onPrimary: "#ffffff",
    primaryContainer: "#9df0f9",
    onPrimaryContainer: "#004f55",
    secondary: "#4a6365",
    onSecondary: "#ffffff",
    tertiary: "#505e7d",
    onTertiary: "#ffffff",
    error: "#ba1a1a",
    onError: "#ffffff",
    onSurface: "#161d1d",
    onSurfaceVariant: "#3f4849",
    outline: "#6f797a",
    outlineVariant: "#bec8c9",
  },
};

export const darkTheme = {
  ...MD3DarkTheme,
  colors: {
    ...MD3DarkTheme.colors,
    primary: "#81d4dc",
    onPrimary: "#00363b",
    primaryContainer: "#004f55",
    onPrimaryContainer: "#9df0f9",
    secondary: "#b1cbce",
    onSecondary: "#1c3437",
    tertiary: "#b8c6ea",
    onTertiary: "#21304c",
    error: "#ffb4ab",
    onError: "#690005",
    onSurface: "#dee4e4",
    onSurfaceVariant: "#bec8c9",
    outline: "#899294",
    outlineVariant: "#3f4849",
  },
};
