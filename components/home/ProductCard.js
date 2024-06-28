import { TouchableOpacity, View, Text, Image } from "react-native";
import React from "react";
import style from "./productcart.style";
import { Ionicons } from "@expo/vector-icons";
import { SIZES, COLORS } from "../../constants/theme";
import { useNavigation } from "@react-navigation/native";

const ProductCard = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("details");
      }}
    >
      <View style={style.container}>
        <View style={style.imageContainer}>
          <Image
            source={{
              uri: "https://frenchfurnitureorlando.com/wp-content/uploads/2023/09/Living_Set_Whole_1.webp",
            }}
            resizeMethod="contain"
            style={style.image}
          />
        </View>
        <View style={style.details}>
          <Text style={style.title} numberOfLines={1}>
            Product title the is very long
          </Text>
          <Text style={style.supplier}>Product title</Text>
          <Text style={style.price}>$ 2.50</Text>
        </View>

        <TouchableOpacity style={style.addBtn}>
          <Ionicons name="add" size={SIZES.large} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCard;
