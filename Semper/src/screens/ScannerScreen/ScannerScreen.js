import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import { RNCamera, } from 'react-native-camera';
import HeaderBar from '../../components/Header/HeaderBar';
import { COLORS } from '../../constants/colors';
import Api from '../../services/Api/Api';
import i18n from '../../locales/i18n';
import { createLocalNotification, sendMessage } from '../../services/Notifications/notificationService';

const API = new Api();

const handleScannedCode = (statusCode) => {
  switch (statusCode) {
    case 200: {
      sendMessage({ text: "The order has been successfully linked to you" });
      break;
    }
    case 404: {
      Alert.alert('', 'Order not found. Contact the manager')
      break;
    }
    case 500: {
      Alert.alert('', 'Service is unavailable. Please try again later')
      break;
    }
    default: {
      Alert.alert('', 'Please try a different code and contact the manager.')
      break;
    }
  }
}

const ScannerScreen = ({ navigation }) => {

  const onBarCodeRead = (e) => {
    Alert.alert("Barcode value is" + e.data, "Barcode type is" + e.type);

    API.scanCode({ code: e.data, }).then(res => {

      handleScannedCode(res.statusCode)

    }).catch(err => {
      Alert.alert('', 'Please try a different code and contact the manager.')
    })
  }

  return (
    <>
      <HeaderBar screenName={i18n.t('Home:ScannerTitle')} canGoBack={true} goBack={() => navigation.goBack()} />
      <View style={styles.container}>

        <RNCamera
          style={styles.preview}

          onBarCodeRead={onBarCodeRead}
          androidCameraPermissionOptions={{
            title: 'Permission to use camera',
            message: 'We need your permission to use your camera',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
          androidRecordAudioPermissionOptions={{
            title: 'Permission to use audio recording',
            message: 'We need your permission to use your audio',
            buttonPositive: 'Ok',
            buttonNegative: 'Cancel',
          }}
        >
        </RNCamera>
      </View>
    </>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    backgroundColor: COLORS.WHITE
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  cameraIcon: {
    margin: 5,
    height: 40,
    width: 40
  },
  bottomOverlay: {
    position: "absolute",
    width: "100%",
    flex: 20,
    flexDirection: "row",
    justifyContent: "space-between"
  },
});

export default ScannerScreen;
