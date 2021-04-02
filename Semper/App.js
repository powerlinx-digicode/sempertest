import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigators/AuthStack';
import { Provider } from 'react-redux';
import store from './src/store/index';
import HomeStack from './src/navigators/HomeStack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigationRef } from './src/services/Navigation/navigationService';
import { createStackNavigator } from '@react-navigation/stack';
import * as navigationService from './src/services/Navigation/navigationService';
import PushNotificationIOS from "@react-native-community/push-notification-ios";
import PushNotification from "react-native-push-notification";
import { Platform } from 'react-native';
import Api from './src/services/Api/Api';

const Main = createStackNavigator();

const API = new Api();

const App = () => {

  PushNotification.configure({
    // (optional) Called when Token is generated (iOS and Android)
    onRegister: function (token) {
      console.log("TOKEN:", token);
    },

    // (required) Called when a remote is received or opened, or local notification is opened
    onNotification: function (notification) {
      console.log("NOTIFICATION:", notification);

      // process the notification

      // (required) Called when a remote is received or opened, or local notification is opened
      notification.finish(PushNotificationIOS.FetchResult.NoData);
    },

    // (optional) Called when Registered Action is pressed and invokeApp is false, if true onNotification will be called (Android)
    onAction: function (notification) {
      console.log("ACTION:", notification.action);
      console.log("NOTIFICATION:", notification);

      // process the action
    },

    // (optional) Called when the user fails to register for remote notifications. Typically occurs when APNS is having issues, or the device is a simulator. (iOS)
    onRegistrationError: function (err) {
      console.error(err.message, err);
    },

    // IOS ONLY (optional): default: all - Permissions to register.
    permissions: {
      alert: true,
      badge: true,
      sound: true,
    },

    popInitialNotification: true,

    requestPermissions: Platform.OS === 'ios',
  });

  useEffect(() => {
    const isAuth = async () => {

      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        API.getMe().then(res => {
          if (res.statusCode == 200) {
            navigationService.navigate('Home');
          } else {
            navigationService.navigate('Auth');
          }
        })
      }
      else {
        navigationService.navigate('Auth');
      }
    }

    isAuth();
  }, [])

  return (

    <Provider store={store} >
      <NavigationContainer
        ref={navigationRef}
      >
        <Main.Navigator >
          <Main.Screen name="Auth" component={AuthStack} options={{ headerShown: false }} />
          <Main.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        </Main.Navigator >
      </NavigationContainer>
    </Provider>
  );
};

export default App;
