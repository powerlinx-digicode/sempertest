import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import styles from './styles';

const HeaderBar = ({ showMenu, screenName }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{screenName}</Text>
    </SafeAreaView>
  )
}

export default HeaderBar;
