import { Colors } from "react-native/Libraries/NewAppScreen";
import { COLORS, SIZES } from "../constants/theme";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: { flex: 1 },
  upperRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 20,
    zIndex: 999,
    position: "absolute",
    top: 0,
    left: 0,
    width: SIZES.width - 44,
    paddingHorizontal: SIZES.small,
    marginTop: SIZES.small,
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details: {
    marginTop: -SIZES.large,
    backgroundColor: COLORS.lightWhite,
    width: SIZES.width,
    borderTopRightRadius: SIZES.medium,
    borderTopLeftRadius: SIZES.medium,
  },
  titleRow: {
    marginHorizontal: 20,
    paddingBottom: SIZES.medium,
    width: SIZES.width - 44,
    justifyContent: "space-between",
    alignItems: "center",
    top: 20,
    flexDirection: "row",
  },
  ratingRow: {
    paddingBottom: SIZES.small,
    width: SIZES.width - 10,
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 5,
    top: 5,
    flexDirection: "row",
  },
  rating: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: SIZES.large,
  },
  ratingText: {
    fontFamily: "regular",
    fontSize: SIZES.medium,
    color: COLORS.gray2,
    lineHeight: 20,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,
  },
  priceWrapper: {
    borderRadius: SIZES.large,
    backgroundColor: COLORS.secondary,
  },
  price: {
    paddingHorizontal: 10,
    fontFamily: "semiBold",
    fontSize: SIZES.large,
  },
});

export default style;
