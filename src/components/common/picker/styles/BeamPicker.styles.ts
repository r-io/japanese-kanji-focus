import colors from '@constants/colors';
import fonts from '@themes/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: colors.trueBlack,
  },
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.white,
    paddingHorizontal: 8,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    flex: 1,
    ...fonts.small,
  },
  modalContainer: {
    flexDirection: 'row',
    backgroundColor: colors.primaryBackground,
    margin: 20,
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 2
  },
  title: {
    // ...fonts.title,
    textAlign: 'center',
    color: colors.blue
  }
});