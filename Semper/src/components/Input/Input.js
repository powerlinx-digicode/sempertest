import React, { useState } from 'react';
import { TextInput, Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { COLORS } from '../../constants/colors';
import ResetIcon from '../../public/images/general/resetField.svg';

const Input = ({ label, canReset = false, onReset, type = '', ...otherProps }) => {

  const [isFocused, setFocus] = useState(false)

  return (
    <View style={[styles.container, isFocused ? { borderBottomColor: COLORS.GREEN_LIGHT } : null]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholderTextColor={COLORS.GREY}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        {...otherProps}
      />
      {(canReset && isFocused) &&
        <TouchableOpacity style={styles.resetButton} activeOpacity={0.8} onPress={onReset}>
          <ResetIcon width={7} height={7} />
        </TouchableOpacity>
      }
      {(type === 'password' && isFocused) &&
        <TouchableOpacity style={[styles.resetButton, { backgroundColor: COLORS.WHITE, width: 'auto', }]} activeOpacity={0.8} onPress={onReset}>
          <Text style={styles.showButtonText}>Show</Text>
        </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomColor: COLORS.BLACK,
    borderBottomWidth: 1,
  },
  input: {
    width: '100%',
    paddingVertical: 0
  },
  label: {
    fontSize: 14,
    lineHeight: 16,
    color: COLORS.BLACK,
    marginBottom: 17
  },
  resetButton: {
    backgroundColor: COLORS.GREY_LIGHT,
    width: 15,
    height: 15,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    right: 6,
    bottom: 7
  },
  showButtonText: {
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.BLACK
  }
})

export default Input;
