import React from 'react';
import { View, Text } from 'react-native';
import HeaderBar from '../../components/Header/HeaderBar';
import styles from './styles';
import MainLogo from '../../uikit/MainLogo/MainLogo';
import Button from '../../uikit/Button/Button';
import Input from '../../components/Input/Input';
import { TouchableOpacity } from 'react-native-gesture-handler';


const ForgotPassword = ({ navigation }) => {


  return (
    <>
      <HeaderBar screenName={'Password reminder'} />
      <View style={styles.container}>
        <View style={styles.logoWrapper}>
          <MainLogo width={209} height={92} />
        </View>
        <View style={styles.inputArea}>
          <View style={styles.inputWrapper}>
            <Input label={'Email address'} placeholder={'Your email'} canReset={true} />
          </View>
        </View>

        <Button text={'Enter'} />

        <View style={styles.navigationButtonContainer}>
          <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate("LogIn")} activeOpacity={0.8}>
            <Text style={styles.navigationButtonText}>Log in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.navigationButton} onPress={() => navigation.navigate("SignUp")} activeOpacity={0.8}>
            <Text style={styles.navigationButtonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </>
  )
}

export default ForgotPassword;
