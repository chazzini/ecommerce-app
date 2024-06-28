import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Profile";
import Search from "../screens/Search";
import Home from "../screens/Home";

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
  },
};

const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="home"
        component={Home}
        options={{ tabBarIcon: (focused) => {
            return <Ionicon
        } }}
      />
      <Tab.Screen name="search" component={Search} />
      <Tab.Screen name="profile" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomTab;
