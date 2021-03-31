import React from 'react';
import { View, Text } from 'react-native';
import HeaderBar from '../../components/Header/HeaderBar';
import styles from './styles';
import ScannerBottomBar from '../../components/ScannerBottomBar/ScannerBottomBar';

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <HeaderBar screenName={'News'} showMenu={true} />
      <View style={styles.container}>
        <View>

        </View>
        <ScannerBottomBar openScanner={() => navigation.navigate('ScannerScreen')} />
      </View>
    </>
  )
}

export default HomeScreen;
