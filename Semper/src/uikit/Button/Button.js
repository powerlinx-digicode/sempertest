import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { COLORS } from '../../constants/colors';

const Button = ({ onPress, text, isLoading = false }) => {

  return (
    <TouchableOpacity onPress={onPress} style={styles.container} activeOpacity={0.8}>
      {isLoading ?
        <ActivityIndicator color={COLORS.WHITE} size="small" />
        :
        <Text style={styles.title}>{text}</Text>
      }
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.ORANGE,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 13,
    paddingBottom: 12,
    borderRadius: 5,
    shadowColor: COLORS.BLACK,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 10,
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
    color: COLORS.WHITE
  }
})

export default Button;
