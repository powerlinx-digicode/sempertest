import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    alignItems: 'center',
    flex: 1,
    backgroundColor: COLORS.WHITE
  },
  logoWrapper: {
    marginVertical: 29
  },
  inputArea: {
    marginBottom: 17,
    width: "100%",
    flex: 1
  },
  inputWrapper: {
    marginBottom: 19
  },
  navigationButtonContainer: {
    marginTop: 22,
    alignItems: 'center'
  },
  navigationButton: {
    marginBottom: 17,
    borderBottomColor: COLORS.GREY,
    paddingBottom: 1,
    borderBottomWidth: 1,
  },
  navigationButtonText: {
    color: COLORS.GREY,
    fontSize: 12,
    lineHeight: 14
  }
})

export default styles;
