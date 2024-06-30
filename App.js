import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTab from "./navigatiion/BottomTab";
import ProductDetail from "./screens/ProductDetail";
import Cart from "./screens/Cart";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Poppins-Regular.ttf"),
    medium: require("./assets/fonts/Poppins-Medium.ttf"),
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
    <NavigationContainer onReady={onLoad}>
      <Stack.Navigator>
        <Stack.Screen
          name="tabs"
          component={BottomTab}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="details"
          component={ProductDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="cart"
          component={Cart}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
