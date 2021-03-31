import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from "../screens/HomeScreen/HomeScreen";
import MenuScreen from "../screens/MenuScreen/MenuScreen";
import ScannerScreen from "../screens/ScannerScreen/ScannerScreen";

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="MenuScreen" component={MenuScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ScannerScreen" component={ScannerScreen} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default HomeStack;
