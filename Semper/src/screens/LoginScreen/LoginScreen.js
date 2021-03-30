import React from 'react';
import { View, Text } from 'react-native';
import HeaderBar from '../../components/Header/HeaderBar';
import styles from './styles';
import MainLogo from '../../uikit/MainLogo/MainLogo';
import Button from '../../uikit/Button/Button';
import Input from '../../components/Input/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Api from '../../services/Api/Api';
import { LogIn } from '../../store/customer/actions';
import { connect } from 'react-redux';

const API = new Api;

const LoginScreen = ({ navigation, isLoading, login }) => {


  return (
    <>
      <HeaderBar screenName={'Log in'} />
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <MainLogo width={209} height={92} />
        </View>
        <View style={styles.inputArea}>
          <View style={styles.inputWrapper}>
            <Input label={'Email address'} placeholder={'Your email'} canReset={true} />
          </View>
          <Input label={'Password'} placeholder={'Your passoword'} type={'password'} />
        </View>

        <Button text={'Log in'} onPress={login} />

        <View style={styles.navigationButtonContainer}>
          <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={styles.navigationButtonText}>Forgot your password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate("SignUp")}>
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
