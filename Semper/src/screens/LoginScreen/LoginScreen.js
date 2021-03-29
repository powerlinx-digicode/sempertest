import React from 'react';
import { View, Text } from 'react-native';
import HeaderBar from '../../components/Header/HeaderBar';
import styles from './styles';
import MainLogo from '../../uikit/MainLogo/MainLogo';

const LoginScreen = () => {
  return (
    <>
      <HeaderBar screenName={'Log in'} />
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <MainLogo width={209} height={92} />
        </View>
      </View>
    </>
  )
}

export default LoginScreen;
