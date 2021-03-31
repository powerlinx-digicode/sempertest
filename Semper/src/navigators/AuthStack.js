import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../screens/LoginScreen/LoginScreen";
import SignUpScreen from "../screens/SignUpScreen/SignUpScreen";
import ForgotPassword from "../screens/ForgotPasswordScreen/ForgotPasswordScreen";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator >
      <Stack.Screen name="LogIn" component={LoginScreen} options={{ headerShown: false }} />
      <Stack.Screen name="SignUp" component={SignUpScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
};

export default AuthStack;
