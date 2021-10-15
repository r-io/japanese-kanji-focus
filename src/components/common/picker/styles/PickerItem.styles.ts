import fonts from '@themes/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  label: {
    ...fonts.mediumArial,
    textAlign: 'left',
    flex: 1
  }
});