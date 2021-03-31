import React from 'react';
import { View, Text } from 'react-native';
import HeaderBar from '../../components/Header/HeaderBar';
import styles from './styles';
import ScannerBottomBar from '../../components/ScannerBottomBar/ScannerBottomBar';
import News from '../../components/NewsComponent/NewsComponent';
import i18n from 'i18next';

const HomeScreen = ({ navigation, }) => {
  return (
    <>
      <HeaderBar screenName={i18n.t('Home:NewsScreenTitle')} showMenu={true} onClickBurger={() => navigation.navigate('MenuScreen')} />
      <View style={styles.container}>
        <View style={styles.newsList}>
          <News />
        </View>
        <ScannerBottomBar openScanner={() => navigation.navigate('ScannerScreen')} />
      </View>
    </>
  )
}

export default HomeScreen;
