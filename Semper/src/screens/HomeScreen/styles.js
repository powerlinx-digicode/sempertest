import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    justifyContent: "space-between"
  },
  newsList: {
    marginTop: 23,
    paddingHorizontal: 10
  }
})

export default styles;
