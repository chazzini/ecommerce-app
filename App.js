import { useFonts } from "expo-font";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect, useState } from "react";

SplashScreen.preventAutoHideAsync();
export default function App() {
  const [num, setNum] = useState(0);
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    meduim: require("./assets/fonts/Poppins-Medium.ttf"),
    light: require("./assets/fonts/Poppins-Light.ttf"),
    extraBold: require("./assets/fonts/Poppins-ExtraBold.ttf"),
    bold: require("./assets/fonts/Poppins-Bold.ttf"),
    semiBold: require("./assets/fonts/Poppins-SemiBold.ttf"),
  });

  const onLoad = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <View style={styles.container} onLayout={onLoad}>
      <Text style={styles.fonts}>
        Open up App.js to start working on your app! {""}
        {num}
      </Text>
      <Button
        title="+"
        onPress={() => {
          setNum((prev) => prev + 1);
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fonts: {
    fontFamily: "bold",
    fontSize: 36,
  },
  normal: {
    fontFamily: "regular",
    fontSize: 30,
  },
});
