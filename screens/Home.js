import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import style from "./home.styles";
import Welcome from "../components/home/Welcome";
import Carousel from "../components/home/Carousel";
import Headings from "../components/home/Headings";
import ProductRow from "../components/home/ProductRow";

const Home = () => {
  return (
    <SafeAreaView>
      <View style={style.appBarContainer}>
        <View style={style.appBar}>
          <Ionicons name="location-outline" size={24} />
          <Text style={style.location}>Warri</Text>
          <View style={{ alignItems: "flex-end" }}>
            <View style={style.cartCount}>
              <Text style={style.cartNumber}>8</Text>
            </View>
            <TouchableOpacity>
              <Ionicons name="bag-handle-sharp" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
        <View
          style={{
            paddingHorizontal: 12,
          }}
        >
          <Carousel />
        </View>
        <Headings />
        <ProductRow />
        {/* added for android scrolling */}
        <View style={{ height: 150 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
