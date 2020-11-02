import colors from '@constants/colors';
import { StyleProp, ViewStyle } from 'react-native';
import { NavigationStackOptions } from 'react-navigation-stack';

const navigationStyle: NavigationStackOptions = {
	headerStyle: {
		backgroundColor: colors.trueBlack,
		borderBottomColor: colors.transparent
	},
	headerTintColor: colors.white,
	headerTitleStyle: {
		color: colors.primaryText,
		fontWeight: 'bold'
	}
};


export const navigationCard: StyleProp<ViewStyle> = {
	backgroundColor: colors.primaryBackground
};

export const transparentHeader: NavigationStackOptions = {
	headerTransparent: true,
	headerStyle: {
		backgroundColor: colors.transparent
	}
};

export default navigationStyle;