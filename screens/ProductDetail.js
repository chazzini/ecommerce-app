import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";

import style from "./productdetails.style";
import { Ionicons, SimpleLineIcons } from "@expo/vector-icons";
import { COLORS } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductDetail = () => {
  const navigation = useNavigation();
  const [counter, setCounter] = useState(0);
  return (
    <SafeAreaView style={style.container}>
      <View style={style.container}>
        <View style={style.upperRow}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Ionicons name="arrow-back-circle" size={30} color={COLORS.black} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => {}}>
            <Ionicons name="heart" size={30} color={COLORS.primary} />
          </TouchableOpacity>
        </View>
        <Image
          source={{
            uri: "https://frenchfurnitureorlando.com/wp-content/uploads/2023/09/275238423_3130394180582705_5855078907312410249_n.jpg",
          }}
          style={style.image}
        />
        <View style={style.details}>
          <View style={style.titleRow}>
            <Text style={style.title}>Product</Text>
            <View style={style.priceWrapper}>
              <Text style={style.price}>$ 680.30</Text>
            </View>
          </View>

          <View style={style.ratingRow}>
            <View style={style.rating}>
              {[1, 2, 3, 4, 5].map((index) => {
                return (
                  <Ionicons name="star" key={index} size={20} color="gold" />
                );
              })}
              <Text style={style.ratingText}> (4.9)</Text>
            </View>
            <View style={style.rating}>
              <TouchableOpacity
                onPress={() => {
                  setCounter((prev) => prev + 1);
                }}
              >
                <SimpleLineIcons name="plus" size={20} />
              </TouchableOpacity>
              <Text style={style.ratingText}> {counter} </Text>
              <TouchableOpacity
                onPress={() => {
                  setCounter((prev) => prev - 1);
                }}
              >
                <SimpleLineIcons name="minus" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
