import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigators/AuthStack';
import { Provider } from 'react-redux';
import store from './src/store/index';
import { isAuth } from './src/services/Auth/authService';
import HomeStack from './src/navigators/HomeStack';


const App = () => {


  return (
    <Provider store={store} >
      <NavigationContainer>
        {isAuth() ?
          <HomeStack />
          :
          <AuthStack />
        }
      </NavigationContainer>
    </Provider>
  );
};

export default App;
