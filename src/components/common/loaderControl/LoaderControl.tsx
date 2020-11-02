import colors from '@constants/colors';
import React from 'react';
import { ActivityIndicator, StyleProp, View, ViewStyle } from 'react-native';
import { Button } from 'react-native-elements';
import styles from './styles/LoaderControl.styles';

interface Props {
	isShowing: boolean;
	isError?: boolean;
	onPressTryAgain?: () => void;
	containerStyle?: StyleProp<ViewStyle>;
}

class LoaderControl extends React.PureComponent<Props, {}> {

	constructor(props: Props) {
		super(props);
	}

	private renderButton() {
		const { onPressTryAgain } = this.props;
		return (
			<Button
				type="clear"
				onPress={onPressTryAgain}
				title={'Try Again'}
			/>
		);
	}

	private renderSpinner() {
		return (
			<ActivityIndicator
				size="large"
				color={colors.primary}
			/>
		);
	}

	public render() {
		const { isShowing, isError, containerStyle } = this.props;

		if (!isShowing && !isError) {
			return null;
		}

		return (
			<View style={[styles.container, containerStyle]}>
				{isShowing ? this.renderSpinner() : isError && this.renderButton()}
			</View>
		);
	}
}

export default LoaderControl;
