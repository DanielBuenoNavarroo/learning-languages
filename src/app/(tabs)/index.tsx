import { Screen } from "@/components/Screen";
import { Image } from "expo-image";
import { Animated, Pressable, View } from "react-native";
import { Text } from "react-native-paper";

import { Feather, Entypo } from "@expo/vector-icons";

const IndexScreen = () => {
  const scrollY = new Animated.Value(0);

  const shadowOpacity = scrollY.interpolate({
    inputRange: [0, 10],
    outputRange: [0, 0.15],
    extrapolate: "clamp",
  });

  const days = Array.from({ length: 7 }).map((_, i) =>
    new Date(2024, 0, i + 1).toLocaleDateString("en-GB", { weekday: "short" }),
  );

  const today = new Date().toLocaleDateString("en-GB", { weekday: "short" });

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
            source={require("../../assets/img/flags/Flag_of_Japan.png")}
            style={{ width: 45, height: 25, borderRadius: 5 }}
          />
          <Text>Change Language</Text>
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
          <Text>0/50 cards</Text>
          <Pressable>
            <Text>Change goal</Text>
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
            return (
              <View style={{ alignItems: "center", gap: 10 }} key={day}>
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
                    day === "Mon" && {
                      borderColor: "transparent",
                      backgroundColor: "#b561d6b7",
                    },
                    day === "Tue" && {
                      borderColor: "transparent",
                      backgroundColor: "#39ac2fde",
                    },
                  ]}
                >
                  {day === "Mon" && (
                    <Entypo name="cross" size={20} color="#e2b2f5" />
                  )}
                  {day === "Tue" && (
                    <Feather name="check" size={20} color="#19f804" />
                  )}
                </Pressable>
                <Text
                  style={[
                    { borderRadius: 5, padding: 3 },
                    day === today && {
                      backgroundColor: "#444444de",
                    },
                  ]}
                >
                  {day}
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
