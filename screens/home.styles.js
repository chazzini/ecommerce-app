import { COLORS, SIZES } from "../constants/theme";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  textStyle: {
    fontFamily: "bold",
    fontSize: 20,
  },
  appBarContainer: {
    marginHorizontal: 22,
    marginTop: SIZES.small,
  },
  appBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  location: {
    fontFamily: "semiBold",
    fontSize: SIZES.medium,
    color: COLORS.gray,
  },
  cartCount: {
    position: "absolute",
    bottom: 16,
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "green",
    justifyContent: "center",
    zIndex: 999,
  },
  cartNumber: { color: COLORS.white, fontSize: SIZES.xSmall },
});

export default style;
