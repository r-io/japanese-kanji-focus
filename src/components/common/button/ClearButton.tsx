import bind from 'bind-decorator';
import React from 'react';
import { Button, ButtonProps } from 'react-native-elements';
import styles from './styles/ClearButton.styles';

interface Props extends ButtonProps {
	onPress: (value?: any) => void;
	value?: any;
}

interface State {
	isPressed: boolean;
}

class ClearButton extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {
			isPressed: false
		};
	}

	@bind
	private handlePress() {
		const { onPress, value } = this.props;
		if (value) {
			onPress(value);
		}
		else {
			onPress();
		}
	}

	@bind
	private handlePressIn() {
		this.setState({ isPressed: true });
	}

	@bind
	private handlePressOut() {
		this.setState({ isPressed: false });
	}

	public render() {
		const { title, buttonStyle, titleStyle } = this.props;
		const { isPressed } = this.state;
		return (
			<Button
				{...this.props}
				onPress={this.handlePress}
				buttonStyle={[styles.button, buttonStyle]}
				titleStyle={[styles.title, titleStyle, isPressed && styles.pressedTitle]}
				titleProps={{ allowFontScaling: false }}
				type="clear"
				title={title}
				onPressIn={this.handlePressIn}
				onPressOut={this.handlePressOut}
			/>
		);
	}
}

export default ClearButton;
