import AsyncStorage from '@react-native-async-storage/async-storage';

export const isAuth = async () => {
  const token = await AsyncStorage.getItem('userToken');

  if (token) {
    return true;
  } else {
    return false;
  }

}


