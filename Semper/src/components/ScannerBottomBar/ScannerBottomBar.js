import React from 'react';
import { View, SafeAreaView, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import BarCode from '../../public/images/general/barcode.svg';

const ScannerBottomBar = ({ openScanner }) => {
  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity style={styles.scannerButton} activeOpacity={0.9} onPress={() => openScanner()}>
          <BarCode width={54} height={54} />
        </TouchableOpacity>
      </View>

    </>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.ORANGE,
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: 71
  },
  scannerButton: {
    backgroundColor: COLORS.ORANGE,
    paddingTop: 19,
    paddingBottom: 9.7,
    paddingHorizontal: 26,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    bottom: 15
  }
})

export default ScannerBottomBar;
