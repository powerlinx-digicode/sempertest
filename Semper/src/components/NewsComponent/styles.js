import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: COLORS.GREY,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 5
  },
  topInfo: {
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  topTitle: {
    fontSize: 18,
    lineHeight: 21,
    color: COLORS.ORANGE
  },
  topDate: {
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.BLACK
  },
  newsText: {
    fontSize: 12,
    lineHeight: 14,
    color: COLORS.BLACK,
    flexWrap: 'wrap',
    overflow: 'hidden',
    marginTop: 16
  },
  closedInfo: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 10
  },
})

export default styles;
