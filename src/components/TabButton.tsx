import { Pressable, ViewStyle } from "react-native";
import { MD3Theme, Text } from "react-native-paper";

type TabButtonProps = {
  label: string;
  icon?: (color: string) => React.ReactNode;
  onPress: () => void;
  style?: ViewStyle;
  focused?: boolean;
  theme: MD3Theme;
};

const TabButton = ({
  label,
  icon,
  onPress,
  style,
  focused = false,
  theme,
}: TabButtonProps) => {
  const color = focused ? theme.colors.primary : theme.colors.onSurfaceVariant;
  return (
    <Pressable
      onPress={onPress}
      style={[
        {
          flex: 1,
          alignItems: "center",
        },
        focused && {
          outlineColor: theme.colors.primary,
        },
        style,
      ]}
    >
      {icon && icon(color)}
      <Text
        style={[
          {
            fontSize: 12,
            fontWeight: 600,
            marginTop: 2,
          },
          focused && {
            color: theme.colors.primary,
          },
        ]}
      >
        {label}
      </Text>
    </Pressable>
  );
};

export default TabButton;
