import { Screen } from "@/components/Screen";
import { ThemeContext } from "@/themes/ThemeContext";
import { useContext } from "react";
import { Button, Text } from "react-native-paper";

const account = () => {
  const { mode, setMode } = useContext(ThemeContext);
  return (
    <Screen>
      <Text>account</Text>
      <Text>Modo actual: {mode}</Text>

      <Button onPress={() => setMode("light")}>Claro</Button>
      <Button onPress={() => setMode("dark")}>Oscuro</Button>
      <Button onPress={() => setMode("system")}>Sistema</Button>
    </Screen>
  );
};

export default account;
