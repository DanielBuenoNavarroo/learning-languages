import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

export const LevelBars = ({
  level,
  previousLevel,
  correct = false,
}: {
  level: number;
  previousLevel: number;
  correct?: boolean;
}) => {
  const theme = useTheme();

  const getColor = (i: number) => {
    if (correct && i <= level) return "#4CAF50";
    if (!correct && previousLevel === 1 && i === 1) {
      return "#FFD54F";
    }
    if (i <= previousLevel) return theme.colors.primary;

    return "#474e57";
  };

  return (
    <View style={styles.levelContainer}>
      {[1, 2, 3, 4, 5].map((i) => (
        <View
          key={i}
          style={[styles.levelBar, { backgroundColor: getColor(i) }]}
        />
      ))}

      {previousLevel === 1 && !correct && (
        <Text style={styles.newLabel}>Nueva palabra</Text>
      )}

    </View>
  );
};

const styles = StyleSheet.create({
  levelContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    marginBottom: 8,
  },

  levelBar: {
    width: 22,
    height: 4,
    borderRadius: 4,
  },

  newLabel: {
    marginLeft: 8,
    fontSize: 10,
    color: "#FFD54F",
  },
});
