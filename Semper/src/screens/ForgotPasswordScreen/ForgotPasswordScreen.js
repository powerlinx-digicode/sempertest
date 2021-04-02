import React from 'react';
import { View, Text } from 'react-native';
import HeaderBar from '../../components/Header/HeaderBar';
import styles from './styles';
import MainLogo from '../../uikit/MainLogo/MainLogo';
import Button from '../../uikit/Button/Button';
import Input from '../../components/Input/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import i18n from '../../locales/i18n';


const ForgotPassword = ({ navigation }) => {

  return (
    <>
      <HeaderBar screenName={i18n.t('Auth:PasswordScreenTitle')} />
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <MainLogo width={209} height={92} />
        </View>
        <View style={styles.inputArea}>
          <View style={styles.inputWrapper}>
            <Input label={i18n.t('Auth:InputEmail')} placeholder={i18n.t('Auth:InputEmailPlaceholder')} canReset={true} />
          </View>
        </View>

        <Button text={'Enter'} />

        <View style={styles.navigationButtonContainer}>
          <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate("LogIn")} activeOpacity={0.8}>
            <Text style={styles.navigationButtonText}>{i18n.t('Auth:Login')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate("SignUp")} activeOpacity={0.8}>
            <Text style={styles.navigationButtonText}>{i18n.t('Auth:SignupBtn')}</Text>
          </TouchableOpacity>
        </View>

      </View>
    </>
  )
}

export default ForgotPassword;
