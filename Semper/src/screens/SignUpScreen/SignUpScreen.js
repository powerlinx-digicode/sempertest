import React from 'react';
import { View, Text } from 'react-native';
import HeaderBar from '../../components/Header/HeaderBar';
import styles from './styles';
import MainLogo from '../../uikit/MainLogo/MainLogo';
import Button from '../../uikit/Button/Button';
import Input from '../../components/Input/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import i18n from '../../locales/i18n';

const SignUpScreen = ({ navigation }) => {

  return (
    <>
      <HeaderBar screenName={i18n.t('Auth:Signup')} />
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <MainLogo width={209} height={92} />
        </View>
        <View style={styles.inputArea}>
          <View style={styles.inputWrapper}>
            <Input label={'Username'} placeholder={'Enter your name or Surname'} canReset={true} />
          </View>
          <View style={styles.inputWrapper}>
            <Input label={i18n.t('Auth:InputEmail')} placeholder={i18n.t('Auth:InputEmailPlaceholder')} canReset={true} />
          </View>
          <View style={styles.inputWrapper}>
            <Input label={i18n.t('Auth:InputPassword')} placeholder={i18n.t('Auth:InputPasswordPlaceholder')} type={'password'} />
          </View>
          <Input label={i18n.t('Auth:InputConfirmPassword')} placeholder={i18n.t('Auth:InputConfirmPasswordPlaceholder')} type={'password'} />
        </View>

        <Button text={i18n.t('Auth:Signup')} />

        <View style={styles.navigationButtonContainer}>
          <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate("LogIn")} activeOpacity={0.8}>
            <Text style={styles.navigationButtonText}>{i18n.t('Auth:Login')}</Text>
          </TouchableOpacity>
        </View>

      </View>
    </>
  )
}

export default SignUpScreen;