import { ViewStyle } from "react-native";
import { Surface, useTheme } from "react-native-paper";

type Props = {
  children: React.ReactNode;
  style?: ViewStyle;
};

export function Screen({ children, style }: Props) {
  const theme = useTheme();

  return (
    <Surface
      style={[
        {
          flex: 1,
          backgroundColor: theme.colors.background,
          paddingTop: 40,
          paddingHorizontal: 16,
        },
        style,
      ]}
    >
      {children}
    </Surface>
  );
}
