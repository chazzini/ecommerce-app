import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

import style from "./productdetails.style";
import {
  Fontisto,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
} from "@expo/vector-icons";
import { COLORS, SIZES } from "../constants/theme";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

const ProductDetail = () => {
  const navigation = useNavigation();
  const [counter, setCounter] = useState(0);

  const decrement = () => {
    if (counter > 1) setCounter((prev) => prev - 1);
  };
  return (
    <SafeAreaView style={style.container}>
      <ScrollView style={style.container}>
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
              <TouchableOpacity onPress={decrement}>
                <SimpleLineIcons name="minus" size={20} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={style.descriptionWrapper}>
            <Text style={style.descriptionHeading}>Description</Text>
            <Text style={style.description}>
              Sed non commodo magna, vitae gravida ante. Donec dictum lacus in
              nisl posuere, non egestas sapien hendrerit. Aliquam pulvinar est
              et turpis volutpat tincidunt. Praesent consectetur finibus tellus,
              vel commodo tellus tempus quis. Curabitur risus ex, facilisis eget
              cursus eu, fringilla quis lorem. Integer pretium risus augue, et
              egestas metus aliquam sed.
            </Text>
          </View>

          <View style={{ marginBottom: SIZES.small }}>
            <View style={style.location}>
              <View style={{ flexDirection: "row" }}>
                <Ionicons name="location-outline" size={20} />
                <Text> Warri Ekpan</Text>
              </View>

              <View style={{ flexDirection: "row" }}>
                <MaterialCommunityIcons name="car-2-plus" size={20} />
                <Text> Free Delivery</Text>
              </View>
            </View>
          </View>

          <View style={style.cartRow}>
            <TouchableOpacity onPress={() => {}} style={style.cartBtn}>
              <Text style={style.cartBtnText}>BUY NOW</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {}} style={style.cartAdd}>
              <Fontisto name="shopping-bag" size={20} color={COLORS.offwhite} />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({});
