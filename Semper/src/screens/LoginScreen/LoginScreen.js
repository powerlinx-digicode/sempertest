import React, { useState } from 'react';
import { View, Text } from 'react-native';
import HeaderBar from '../../components/Header/HeaderBar';
import styles from './styles';
import MainLogo from '../../uikit/MainLogo/MainLogo';
import Button from '../../uikit/Button/Button';
import Input from '../../components/Input/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LogIn } from '../../store/customer/actions';
import { connect } from 'react-redux';


const LoginScreen = ({ navigation, isLoading, login }) => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [securePassword, setSecurePassword] = useState(true)


  return (
    <>
      <HeaderBar screenName={'Log in'} />
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <MainLogo width={209} height={92} />
        </View>
        <View style={styles.inputArea}>
          <View style={styles.inputWrapper}>
            <Input
              label={'Email address'}
              placeholder={'Your email'}
              canReset={true}
              value={email}
              onReset={() => setEmail('')}
              onChangeText={(value) => setEmail(value)}
              keyboardType='email-address' />
          </View>
          <Input
            label={'Password'}
            placeholder={'Your passoword'}
            type={'password'}
            value={password}
            onReset={() => setSecurePassword(!securePassword)}
            onChangeText={(value) => setPassword(value)}
            secureTextEntry={securePassword}
          />
        </View>

        <Button text={'Log in'} onPress={() => login({ email, password })} isLoading={isLoading} />

        <View style={styles.navigationButtonContainer}>
          <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate("ForgotPassword")} activeOpacity={0.8}>
            <Text style={styles.navigationButtonText}>Forgot your password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate("SignUp")} activeOpacity={0.8}>
            <Text style={styles.navigationButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </>
  )
}

const mapStateToProps = state => {
  return {
    isLoading: state.customer.isLoading,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    login: ({ email, password }) => dispatch(LogIn({ email, password })),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
