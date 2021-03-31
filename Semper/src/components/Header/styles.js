import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.WHITE,
    width: '100%',
  },
  title: {
    fontSize: 18,
    lineHeight: 21,
    color: COLORS.BLACK,
    marginTop: 18
  },
  burgerMenu: {
  },
  backButton: {
  },
  headerButtons: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 20
  }
})

export default styles;
