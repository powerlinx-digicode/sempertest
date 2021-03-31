import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styles from './styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import BurgerMenu from '../../public/images/general/burgermenu.svg';
import ArrowBack from '../../public/images/general/arrow-back.svg'

const HeaderBar = ({ showMenu, screenName, canGoBack = false, goBack, onClickBurger }) => {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>{screenName}</Text>
      </SafeAreaView>
      <View style={styles.headerButtons}>
        <View>
          {canGoBack &&
            <TouchableOpacity activeOpacity={0.8} onPress={() => goBack()} style={styles.backButton}>
              <ArrowBack height={18} width={10} />
            </TouchableOpacity>
          }
        </View>
        <View>
          {showMenu &&
            <TouchableOpacity activeOpacity={0.8} onPress={() => onClickBurger()} style={styles.burgerMenu}>
              <BurgerMenu width={30} height={18} />
            </TouchableOpacity>}
        </View>
      </View>
    </>
  )
}

export default HeaderBar;
