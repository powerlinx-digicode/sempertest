import React, { useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './src/navigators/AuthStack';
import { Provider } from 'react-redux';
import store from './src/store/index';
import { isAuth } from './src/services/Auth/authService';
import HomeStack from './src/navigators/HomeStack';
import { I18nextProvider, translate } from 'react-i18next';
import i18n from './src/locales/i18n';

const App = () => {

  return (

    <Provider store={store} >
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          {isAuth() ?
            <HomeStack />
            :
            <AuthStack />
          }
        </NavigationContainer>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
