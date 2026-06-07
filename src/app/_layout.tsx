import { ThemeContext, ThemeProvider } from "@/themes/ThemeContext";
import { Stack } from "expo-router";
import { useContext, useEffect, useState } from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import * as Font from "expo-font";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

function ThemedApp() {
  const { theme } = useContext(ThemeContext);

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    Font.loadAsync({
      Kanji: require("../assets/fonts/NotoSansJP/NotoSansJP-Regular.ttf"),
    }).then(() => setLoaded(true));
  }, []);

  if (!loaded) return null;

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider theme={theme}>
        <SafeAreaProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </SafeAreaProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
}
