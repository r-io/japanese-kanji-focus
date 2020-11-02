import colors from '@constants/colors';
import { StatusBarProps } from 'react-native';

enum StatusBarKey { transparent, black }

const statusBar: { [key in keyof typeof StatusBarKey]: StatusBarProps } = {
  transparent: {
    hidden: true
  },
  black: {
    barStyle: 'light-content',
    hidden: false,
    backgroundColor: colors.trueBlack
  }
};

export default statusBar;