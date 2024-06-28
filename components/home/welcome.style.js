import { SIZES } from "../../constants/theme";
import { StyleSheet } from "react-native";
import * as styleSearch from "../../screens/search.styles";

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
  ...styleSearch.default,
});

export default style;
