import React, { useEffect } from 'react';
import {
  View,
  StyleSheet,
  Alert,
} from 'react-native';
import { RNCamera } from 'react-native-camera';
import HeaderBar from '../../components/Header/HeaderBar';
import { COLORS } from '../../constants/colors';
import Api from '../../services/Api/Api';
import i18n from 'i18next';

const API = new Api();

const ScannerScreen = ({ navigation }) => {

  useEffect(() => {
    API.scanCode({ code: '4820215621311', }).then(res => {
      // console.log("RES", res)
    })

  }, [])

  const onBarCodeRead = (e) => {
    Alert.alert("Barcode value is" + e.data, "Barcode type is" + e.type);
    // API.scanCode({ code: '4820215621311' })
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
