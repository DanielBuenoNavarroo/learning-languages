import { Screen } from "@/components/Screen";
import { Pressable, View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";

const Card = ({
  disabled = false,
  text,
}: {
  disabled?: boolean;
  text: string;
}) => (
  <Pressable
    disabled={disabled}
    style={disabled ? styles.cardDisabled : styles.card}
  >
    <Text style={{fontSize: 16}}>{text}</Text>
  </Pressable>
);

const Section = ({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    <Text style={styles.sectionSubtitle}>{subtitle}</Text>
    <View style={styles.cardRow}>{children}</View>
  </View>
);

const ContentScreen = () => {
  return (
    <Screen>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Learning Content</Text>
      </View>

      <Section title="DECKS" subtitle="Choose vocabularies to learn">
        <Card text="Decks" />
        <Card text="Create a deck" disabled />
      </Section>

      <Section title="EXERCISES" subtitle="Practise with different exercises">
        <Card text="Learn vocabulary" />
        <Card text="Sentence builder" disabled />
      </Section>
    </Screen>
  );
};

export default ContentScreen;

const styles = StyleSheet.create({
  header: {
    elevation: 8,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "600",
  },
  section: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 16,
  },
  sectionSubtitle: {
    fontSize: 12,
    color: "#cfcfcf",
  },
  cardRow: {
    marginTop: 8,
    flexDirection: "row",
    gap: 16,
  },
  card: {
    backgroundColor: "#343A42",
    height: 128,
    borderRadius: 12,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardDisabled: {
    backgroundColor: "#2A2F35",
    height: 128,
    borderRadius: 12,
    flex: 1,
    opacity: 0.4,
    borderWidth: 1,
    borderColor: "#4A4F55",
    alignItems: "center",
    justifyContent: "center",
  },
});
