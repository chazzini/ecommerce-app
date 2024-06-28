import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { style } from "./home.styles";
import { Ionicons } from "@expo/vector-icons";

const Search = () => {
  return (
    <SafeAreaView>
      <View style={style.appBarContainer}>
        <Text>Search</Text>
        <Ionicons name="locate-outline" size={24} />
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({});
