import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";
import style from "./search.styles";
import { COLORS, SIZES } from "../constants/theme";

const Search = () => {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
