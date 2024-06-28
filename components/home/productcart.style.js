import { COLORS, SIZES } from "../../constants/theme";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    width: 152,
    height: 200,
    borderRadius: SIZES.small,
    backgroundColor: COLORS.secondary,
    marginTop: SIZES.xLarge,
  },
  imageContainer: {
    flex: 1,
    width: 140,
    marginLeft: SIZES.small / 2,
    marginTop: SIZES.small / 2,
    borderRadius: SIZES.small,
    overflow: "hidden",
    backgroundColor: "grey",
  },
  image: {
    aspectRatio: 1,
    resizeMode: "cover",
  },
  detail: {
    padding: SIZES.small,
  },
  title: {
    fontFamily: "bold",
    fontSize: SIZES.large,

    marginBottom: 2,
  },
  price: {
    fontFamily: "bold",
    fontSize: SIZES.medium,

    marginBottom: 2,
  },
  details: {
    padding: SIZES.small,
  },
  supplier: {
    fontFamily: "regular",
    fontSize: SIZES.small,
    color: COLORS.green,
  },
  addBtn: {
    position: "absolute",
    right: 15,
    bottom: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 15,
  },
});

export default style;
