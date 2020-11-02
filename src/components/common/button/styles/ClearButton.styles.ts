import colors from '@constants/colors';
import fonts from '@themes/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  title: {
    ...fonts.link
  },
  button: {
    padding: 0,
    alignSelf: 'flex-start'
  },
  pressedTitle: {
    color: colors.blue
  }
});