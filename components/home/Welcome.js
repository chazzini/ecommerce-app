import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import style from "./welcome.style";
import { COLORS, SIZES } from "../../constants/theme";
import { Feather, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={style.container}>
        <Text style={style.welcomeText(COLORS.black, SIZES.xSmall)}>
          Find The Most
        </Text>
        <Text style={style.welcomeText(COLORS.primary, 0)}>
          Luxurious Furniture
        </Text>
      </View>
      <View style={style.searchContainer}>
        <TouchableOpacity>
          <Feather name="search" size={24} style={style.searchIcon} />
        </TouchableOpacity>
        <View style={style.searchWrapper}>
          <TextInput
            value=""
            style={style.searchInput}
            placeholder="what are you looking for?"
          />
        </View>
        <View>
          <TouchableOpacity
            style={style.searchBtn}
            onPress={() => {
              navigation.navigate("search");
            }}
          >
            <Ionicons
              name="camera-outline"
              color={COLORS.offwhite}
              size={SIZES.xLarge}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
