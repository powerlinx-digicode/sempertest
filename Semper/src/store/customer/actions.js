import {
  HANDLE_LOGIN,
  HANDLE_LOGOUT,
  HANDLE_PROGRESS
} from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from '../../services/Api/Api';
import { Alert } from 'react-native';
import * as navigationService from '../../services/Navigation/navigationService';

const API = new Api;

export const LogIn = ({ email, password }) => async dispatch => {

  await dispatch({
    type: HANDLE_PROGRESS,
    payload: true
  })

  const result = await API.logIn({ email, password });

  if (result.statusCode === 200) {
    AsyncStorage.setItem('userToken', result.data.token)

    await dispatch({
      type: HANDLE_LOGIN,
      payload: result.data
    })

    navigationService.navigate('Home');

  } else {
    await dispatch({
      type: HANDLE_PROGRESS,
      payload: false
    })

    Alert.alert('', result.data.error)
  }

}
