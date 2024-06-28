import { View, Text } from "react-native";
import React from "react";

import style from "./carousel.style";
import { COLORS, SIZES } from "../../constants/theme";
import { ImageSlider } from "react-native-image-slider-banner";

const slides = [
  {
    img: "https://frenchfurnitureorlando.com/wp-content/uploads/2023/10/8311df_bbeb72dc27654d0bb1d7fd717ab3a233_7Emv2_d_5440_4080_s_4_2-2048x1536.jpg",
  },
  {
    img: "https://frenchfurnitureorlando.com/wp-content/uploads/2023/09/Living_Set_Whole_1.webp",
  },
  {
    img: "https://frenchfurnitureorlando.com/wp-content/uploads/2023/09/275238423_3130394180582705_5855078907312410249_n.jpg",
  },
];

const Carousel = () => {
  return (
    <ImageSlider
      data={slides}
      autoPlay
      localImg={false}
      caroselImageContainerStyle={style.container}
      caroselImageStyle={{
        height: 200,
        resizeMode: "cover",
        borderRadius: 16,
      }}
    />
  );
};

export default Carousel;
