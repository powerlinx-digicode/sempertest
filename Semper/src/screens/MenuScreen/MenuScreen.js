import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Switch } from 'react-native';
import styles from './styles';
import HeaderBar from '../../components/Header/HeaderBar';
import { COLORS } from '../../constants/colors';
import { connect } from 'react-redux';
import i18n from '../../locales/i18n';
import { LogOut } from '../../services/Auth/authService';


const MenuScreen = ({ navigation }) => {

  const [toggle, onToggle] = useState(false)

  return (
    <>
      <HeaderBar screenName={i18n.t('Menu:MenuScreenTitle')} canGoBack={true} goBack={() => navigation.goBack()} />
      <View style={styles.container}>
        <View style={styles.customerInfo}>
          <Text style={styles.customerInfoName}>Username</Text>
          <Text style={styles.customerInfoEmail}>User e-mail</Text>
        </View>
        <View style={styles.notifyInfo}>
          <Text style={styles.notifyInfoText}>E-mail notification</Text>
          <Switch
            trackColor={{ false: COLORS.GREEN_LIGHT, true: COLORS.GREY_LIGHT }}
            thumbColor={toggle ? "#E95721" : COLORS.GREY}
            ios_backgroundColor="#3e3e3e"
            onValueChange={onToggle}
            value={toggle}
          />
        </View>
        <Text style={styles.titleAccount}>Account</Text>
        <TouchableOpacity activeOpacity={0.9} style={styles.logoutBtn} onPress={() => LogOut()}>
          <Text style={styles.logoutBtnText}>{i18n.t('Menu:LogoutButton')}</Text>
        </TouchableOpacity>

      </View>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    customer: state.customer.customerData
  }
}

export default connect(mapStateToProps, null)(MenuScreen);
