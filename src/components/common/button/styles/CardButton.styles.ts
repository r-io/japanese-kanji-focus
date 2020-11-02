import colors from '@constants/colors';
import fonts from '@themes/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    borderRadius: 10,
  },
  innerContainer: {
    flex: 1,
    maxWidth: 500,
    flexDirection: 'row',
    borderWidth: 3,
    borderColor: colors.primary,
    borderRadius: 10,
    padding: 10,
    alignItems: 'center'
  },
  imageIconContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 100
  },
  textContainer: {
    flex: 2,
    marginHorizontal: 10,
    justifyContent: 'center'
  },
  title: {
    ...fonts.medium,
    marginVertical: 5,
    color: colors.blue
  },
  description: {
    ...fonts.medium,
    marginVertical: 5
  }
});