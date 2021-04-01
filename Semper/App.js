import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigators/AuthStack';
import { Provider } from 'react-redux';
import store from './src/store/index';
import HomeStack from './src/navigators/HomeStack';
import i18n from './src/locales/i18n';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = () => {

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    const isAuth = async () => {
      const token = await AsyncStorage.getItem('userToken');
      if (token) {
        setIsAuth(true)
      } else {
        setIsAuth(false)
      }
    }
    isAuth();
  }, [])

  return (

    <Provider store={store} >
      <NavigationContainer>
        {isAuth ?
          <HomeStack />
          :
          <AuthStack />
        }
      </NavigationContainer>
    </Provider>
  );
};

export default App;
