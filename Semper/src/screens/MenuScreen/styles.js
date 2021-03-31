import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    paddingHorizontal: 15
  },
  customerInfo: {
    marginTop: 40,
    borderBottomColor: COLORS.BLACK,
    borderBottomWidth: 1,
    paddingBottom: 21
  },
  customerInfoName: {
    fontSize: 18,
    lineHeight: 21,
    color: COLORS.BLACK,
    marginBottom: 2
  },
  customerInfoEmail: {
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.BLACK
  },
  logoutBtnText: {
    color: COLORS.ORANGE,
    fontSize: 18,
    lineHeight: 21,
  },
  logoutBtn: {
    borderBottomColor: COLORS.BLACK,
    borderBottomWidth: 1,
    paddingBottom: 39,
    marginTop: 40
  },
  titleAccount: {
    fontSize: 36,
    lineHeight: 42,
    color: COLORS.BLACK,
    marginTop: 29,
    fontWeight: 'bold'
  },
  notifyInfoText: {
    color: COLORS.BLACK,
    fontSize: 18,
    lineHeight: 21,
  },
  notifyInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    borderBottomColor: COLORS.BLACK,
    borderBottomWidth: 1,
  }
})

export default styles;
