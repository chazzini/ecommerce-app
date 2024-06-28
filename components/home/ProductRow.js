import { View, Text, FlatList } from "react-native";
import React from "react";
import ProductCard from "./ProductCard";
import { SIZES } from "../../constants/theme";
const products = [1, 2, 3, 4, 5, 6];
const ProductRow = () => {
  return (
    <FlatList
      contentContainerStyle={{ marginLeft: SIZES.small }}
      data={products}
      horizontal
      keyExtractor={(item) => item.toString()}
      renderItem={({ item }) => {
        return <ProductCard />;
      }}
      ItemSeparatorComponent={<View style={{ width: 20 }}></View>}
    />
  );
};

export default ProductRow;
