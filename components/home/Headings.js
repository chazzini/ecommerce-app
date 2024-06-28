import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import style from "./heading.style";
import { Ionicons } from "@expo/vector-icons";
import { COLORS, SIZES } from "../../constants/theme";

const Headings = () => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <Text style={style.title(COLORS.black)}>New Arrivals</Text>
        <TouchableOpacity onPress={() => {}}>
          <Ionicons
            name="grid-sharp"
            size={SIZES.large - 2}
            color={COLORS.primary}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Headings;
