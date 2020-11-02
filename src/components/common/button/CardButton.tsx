import colors from '@constants/colors';
import React from 'react';
import { ImageURISource, View } from 'react-native';
import { Image, Text } from 'react-native-elements';
import { BaseButton, BaseButtonProperties } from 'react-native-gesture-handler';
import styles from './styles/CardButton.styles';

interface Props extends BaseButtonProperties {
	imageSource: ImageURISource;
	title: string;
	description: string;
	onPress: () => void;
}

class CardButton extends React.Component<Props, {}> {

	constructor(props: Props) {
		super(props);
	}

	public render() {
		const { onPress, imageSource, title, description } = this.props;
		return (
			<BaseButton
				style={styles.container}
				onPress={onPress}
				rippleColor={colors.ripple}
			>
				<View style={styles.innerContainer}>
					<Image
						containerStyle={styles.imageIconContainer}
						resizeMode={'contain'}
						source={imageSource}
					/>
					<View style={styles.textContainer}>
						<Text
							style={styles.title}
							allowFontScaling={false}
						>
							{title}
						</Text>
						<Text
							style={styles.description}
							allowFontScaling={false}
						>
							{description}
						</Text>
					</View>
				</View>
			</BaseButton>
		);
	}
}

export default CardButton;
