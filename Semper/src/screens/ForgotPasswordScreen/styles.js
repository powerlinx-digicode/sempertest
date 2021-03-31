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
    marginBottom: 61,
    width: "100%"
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
