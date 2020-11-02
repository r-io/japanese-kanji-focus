import colors from '@constants/colors';
import fonts from '@themes/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 2,
    right: 20
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal: 10,
    paddingRight: 12,
    elevation: 5,
    shadowRadius: 3,
    shadowOpacity: 0.3
  },
  title: {
    ...fonts.mediumPrimaryBold,
    marginLeft: 5
  }
});