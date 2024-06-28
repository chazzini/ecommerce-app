import { View, Text } from "react-native";
import React from "react";
import style from "./welcome.style";
import { COLORS, SIZES } from "../../constants/theme";

const Welcome = () => {
  return (
    <View style={style.container}>
      <Text style={style.welcomeText(COLORS.black, SIZES.xSmall)}>
        Find The Most
      </Text>
      <Text style={style.welcomeText(COLORS.gray, 0)}>Luxurious Furniture</Text>
    </View>
  );
};

export default Welcome;
