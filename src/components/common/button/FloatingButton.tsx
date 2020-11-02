import colors from '@constants/colors';
import bind from 'bind-decorator';
import React from 'react';
import { Animated, Easing } from 'react-native';
import { Icon, Text } from 'react-native-elements';
import { BaseButton } from 'react-native-gesture-handler';
import styles from './styles/FloatingButton.styles';

interface Props {
	title: string;
	onPress: (value?: any) => void;
	isShowing: boolean;
	value?: any;
}

interface State {
	isAnimating: boolean;
	bottom: Animated.Value;
}

class FloatingButton extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);

		this.state = {
			isAnimating: false,
			bottom: new Animated.Value(-50)
		};
	}

	componentDidMount() {
		if (this.props.isShowing) {
			this.animationShowFloatingButton();
		}
	}

	componentDidUpdate(prevProps: Props) {
		if (prevProps !== this.props) {
			if (!prevProps.isShowing && this.props.isShowing) {
				this.animationShowFloatingButton();
			} else if (prevProps.isShowing && !this.props.isShowing) {
				this.animationHideFloatingButton();
			}
		}
	}

	@bind
	handlePress() {
		const { value, onPress } = this.props;
		if (value) {
			onPress(value);
		} else {
			onPress();
		}
	}

	animationShowFloatingButton() {
		const { isAnimating } = this.state;
		if (isAnimating) {
			return;
		}
		this.setState({ isAnimating: true });
		this.state.bottom.setValue(-50);
		Animated.timing(this.state.bottom, {
			useNativeDriver: false,
			toValue: 20,
			duration: 500,
			easing: Easing.linear
		}).start(() => {
			this.setState({ isAnimating: false });
		});
	}

	animationHideFloatingButton() {
		const { isAnimating } = this.state;
		if (isAnimating) {
			return;
		}
		this.setState({ isAnimating: true });
		this.state.bottom.setValue(20);
		Animated.timing(this.state.bottom, {
			useNativeDriver: false,
			toValue: -50,
			duration: 500,
			easing: Easing.linear
		}).start(() => {
			this.setState({ isAnimating: false });
		});
	}

	private renderIcon() {
		return (
			<Icon
				type={'entypo'}
				name={'list'}
				size={25}
				color={colors.primaryText}
			/>
		);
	}

	public render() {
		const { isShowing, title } = this.props;
		const { isAnimating, bottom } = this.state;
		return (
			<Animated.View style={[styles.container, { bottom: isAnimating ? bottom : isShowing ? 20 : -50 }]}>
				<BaseButton
					style={styles.button}
					onPress={this.handlePress}
				>
					{this.renderIcon()}
					<Text
						style={styles.title}
						allowFontScaling={false}
					>
						{title}
					</Text>
				</BaseButton>
			</Animated.View>
		);
	}
}

export default FloatingButton;
