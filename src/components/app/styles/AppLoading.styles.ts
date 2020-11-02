import colors from '@constants/colors';
import fonts from '@themes/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 2,
    borderColor: colors.white,
    paddingHorizontal: 8,
    paddingVertical: 5,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    ...fonts.mediumPrimaryBold,
    marginLeft: 10
  },
  modalContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  innerModalContainer: {
    flexDirection: 'row',
    backgroundColor: colors.primaryBackground,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 5
  }
});