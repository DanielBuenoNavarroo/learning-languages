import { View, Text, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";

export const LevelBars = ({ level }: { level: number }) => {
  const theme = useTheme();

  const getColor = (i: number) => {
    if (level === 1 && i === 1) return "#FFD54F";
    if (level === 5) return "#4CAF50";
    if (i <= level) return theme.colors.primary;
    return "#474e57";
  };

  return (
    <View style={styles.levelContainer}>
      {[1, 2, 3, 4, 5].map((i) => (
        <View
          key={i}
          style={[
            styles.levelBar,
            { backgroundColor: getColor(i) },
          ]}
        />
      ))}

      {level === 1 && (
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
