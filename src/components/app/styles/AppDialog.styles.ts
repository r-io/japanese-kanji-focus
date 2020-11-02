import colors from '@constants/colors';
import fonts from '@themes/fonts';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primaryBackground,
    paddingHorizontal: 10,
    paddingTop: 0,
    paddingVertical: 0
  },
  title: {
    ...fonts.title,
    color: colors.blue
  },
  description: {
    ...fonts.mediumPrimary
  },
  button: {
    ...fonts.mediumPrimaryBold,
    color: colors.primary
  },
  buttonContainer: {
    marginVertical: 10,
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  image: {
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: 20
  }
});