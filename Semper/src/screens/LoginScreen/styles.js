import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 15,
    alignItems: 'center',
    flex: 1
  },
  logoWrapper: {
    marginVertical: 29
  },
  inputArea: {
    marginBottom: 17,
    width: "100%"
  },
  inputWrapper: {
    marginBottom: 19
  },
  navigationButtonContainer: {
    marginTop: 22,
    alignItems: 'center'
  },
  navigationButton: {
    marginBottom: 17
  },
  navigationButtonText: {
    color: COLORS.GREY,
    textDecorationLine: 'underline',
    fontSize: 12,
    lineHeight: 14
  }
})

export default styles;
