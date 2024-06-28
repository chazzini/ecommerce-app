import { COLORS, SIZES } from "../../constants/theme";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  constainer: {
    width: "100%",
  },
  welcomeText: (color, top) => ({
    fontFamily: "bold",
    fontSize: SIZES.xxLarge,
    marginTop: top,
    marginHorizontal: 12,
    color,
  }),
});

export default style;
