import { Screen } from "@/components/Screen";
import { ThemeContext } from "@/themes/ThemeContext";
import { Image } from "expo-image";
import { useContext } from "react";
import { Pressable, View } from "react-native";
import { Text } from "react-native-paper";

import { Feather, Entypo } from "@expo/vector-icons";

const IndexScreen = () => {
  const { theme } = useContext(ThemeContext);

  const days = Array.from({ length: 7 }).map((_, i) =>
    new Date(2024, 0, i + 1).toLocaleDateString("en-GB", { weekday: "short" }),
  );

  return (
    <Screen>
      <View>
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
      </View>
      <View
        style={{
          paddingTop: 20,
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
              <Text>{day}</Text>
            </View>
          );
        })}
      </View>
    </Screen>
  );
};

export default IndexScreen;
