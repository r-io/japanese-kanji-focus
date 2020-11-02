import colors from '@constants/colors';
import fonts from '@themes/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  label: {
    ...fonts.mediumPrimaryBold,
    fontSize: 18,
    marginBottom: 5
  },
  requiredSign: {
    color: colors.red
  },
  inputContainer: {
    borderBottomWidth: 0
  },
  input: {
    backgroundColor: colors.white,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 0,
    minHeight: 35,
    ...fonts.mediumPrimary,
    color: colors.darkText
  },
  error: {
    marginTop: 3,
    marginLeft: 0,
    ...fonts.smallPrimary,
    color: colors.error
  }
});