import { SIZES } from "../../constants/theme";
import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  container: {
    width: "100%",
    marginTop: SIZES.xLarge,
  },

  title: (color, top) => ({
    fontFamily: "bold",
    fontSize: SIZES.xLarge,
    marginTop: top,
    marginHorizontal: 12,
    color,
    lineHeight: 24,
  }),
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    marginHorizontal: SIZES.small,
  },
});

export default style;
