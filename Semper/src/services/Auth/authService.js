import AsyncStorage from '@react-native-async-storage/async-storage';
import * as navigationService from '../Navigation/navigationService';


export const isAuth = async () => {
  const token = await AsyncStorage.getItem('userToken');

  if (token) {
    return true;
  } else {
    return false;
  }

}

export const LogOut = async () => {
  await AsyncStorage.clear();
  navigationService.navigate('Auth');
}
