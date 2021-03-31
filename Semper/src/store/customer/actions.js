import {
  HANDLE_LOGIN,
  HANDLE_LOGOUT,
  HANDLE_PROGRESS
} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../services/Api/Api';
import { Alert } from 'react-native';

const API = new Api;

export const LogIn = ({ email, password }) => async dispatch => {

  const result = await API.logIn({ email, password });
  console.log("RESULT", result)

  await dispatch({
    type: HANDLE_PROGRESS,
    payload: true
  })

  if (result.statusCode === 200) {
    AsyncStorage.setItem('userToken', result.customer.token)

    await dispatch({
      type: HANDLE_LOGIN,
      payload: result.customer
    })
  } else {
    await dispatch({
      type: HANDLE_PROGRESS,
      payload: false
    })
    Alert.alert('', result.data.error)
  }

}
