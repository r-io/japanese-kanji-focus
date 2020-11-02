import colors from '@constants/colors';
import fonts from '@themes/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  button: {
    flex: 1,
    borderRadius: 0,
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: 'center',
    elevation: 5,
    marginBottom: 0
  },
  text: {
    ...fonts.smallPrimary,
    textAlign: 'center',
    alignSelf: 'center'
  },
  error: {
    ...fonts.smallPrimary,
    color: colors.error,
    textAlign: 'center'
  },
  darkText: {
    ...fonts.smallPrimary,
    textAlign: 'center',
    alignSelf: 'center',
    color: colors.trueBlack
  }
});