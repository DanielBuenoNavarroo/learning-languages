import { Screen } from "@/components/Screen";
import { Image } from "expo-image";
import { Animated, Pressable, View } from "react-native";
import { Text } from "react-native-paper";
import { Feather } from "@react-native-vector-icons/feather";
import { Entypo } from "@react-native-vector-icons/entypo";
import { useProgress } from "@/components/context/ProgressContext";

const IndexScreen = () => {
  const { progress, learnedToday, weeklyProgress } = useProgress();

  const scrollY = new Animated.Value(0);

  const shadowOpacity = scrollY.interpolate({
    inputRange: [0, 10],
    outputRange: [0, 0.15],
    extrapolate: "clamp",
  });

  const today = new Date();

  const getDateKey = (date: Date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  };

  const monday = new Date(today);
  const dayOfWeek = (today.getDay() + 6) % 7;
  monday.setDate(today.getDate() - dayOfWeek);
  monday.setHours(0, 0, 0, 0);

  const days = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(monday);
    date.setDate(monday.getDate() + i);

    return {
      key: getDateKey(date),
      label: date.toLocaleDateString("es-Es", { weekday: "short" }),
      isFuture: getDateKey(date) > getDateKey(today),
      isToday: getDateKey(date) === getDateKey(today),
    };
  });

  const completedToday = progress >= 1;

  return (
    <Screen>
      <Animated.View
        style={{
          height: 70,
          justifyContent: "center",
          paddingHorizontal: 16,
          paddingTop: 30,
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 0,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: shadowOpacity,
          elevation: shadowOpacity,
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 16,
          }}
        >
          <Image
            source={require("../../assets/img/flags/german-flag.png")}
            style={{ width: 45, height: 25, borderRadius: 5 }}
          />
          <Text>German</Text>
        </Pressable>
      </Animated.View>
      <Animated.ScrollView>
        <View
          style={{
            paddingTop: 40,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
            }}
          >
            TODAY'S GOAL
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text style={{ color: "#999797" }}>{learnedToday} / 50 cards</Text>

          <Pressable>
            <Text style={{ color: "#b561d6" }}>Change goal</Text>
          </Pressable>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingTop: 30,
          }}
        >
          {days.map((day) => {
            const count = weeklyProgress[day.key] ?? 0;
            const completed = count >= 50;
            const showResult = !day.isFuture && !day.isToday;

            return (
              <View key={day.key} style={{ alignItems: "center", gap: 10 }}>
                <Pressable
                  style={[
                    {
                      width: 25,
                      height: 25,
                      borderWidth: 2,
                      borderColor: "#353535",
                      borderRadius: 5,
                      alignItems: "center",
                      justifyContent: "center",
                    },

                    showResult &&
                      completed && {
                        borderColor: "transparent",
                        backgroundColor: "#39ac2fde",
                      },

                    showResult &&
                      !completed && {
                        borderColor: "transparent",
                        backgroundColor: "#b561d6b7",
                      },

                    day.isToday &&
                      completed && {
                        borderColor: "transparent",
                        backgroundColor: "#39ac2fde",
                      },
                  ]}
                >
                  {showResult && completed && (
                    <Feather name="check" size={20} color="#19f804" />
                  )}

                  {showResult && !completed && (
                    <Entypo name="cross" size={20} color="#e2b2f5" />
                  )}

                  {day.isToday && completed && (
                    <Feather name="check" size={20} color="#19f804" />
                  )}
                </Pressable>

                <Text
                  style={[
                    { borderRadius: 5, padding: 3 },
                    day.isToday && { backgroundColor: "#444444de" },
                  ]}
                >
                  {day.label.charAt(0).toUpperCase() +
                    day.label.slice(1).toLowerCase()}
                </Text>
              </View>
            );
          })}
        </View>
      </Animated.ScrollView>
    </Screen>
  );
};

export default IndexScreen;
