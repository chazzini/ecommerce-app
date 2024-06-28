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
          <Ionicons name="camera-outline" style={style.searchIcon} size={24} />
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
            <Feather
              name="search"
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
