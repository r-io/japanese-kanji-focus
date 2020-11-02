import { dismissDialog } from '@actions/dialogActions';
import colors from '@constants/colors';
import ReduxState from '@typings/reduxState';
import bind from 'bind-decorator';
import React from 'react';
import { ImageSourcePropType, View } from 'react-native';
import Dialog from 'react-native-dialog';
import { Image } from 'react-native-elements';
import { connect, DispatchProp } from 'react-redux';
import styles from './styles/AppDialog.styles';

interface StateProps {
	isShowing: boolean;
	title: string;
	description: string;
	onPressPrimary?: () => void;
	onPressSecondary?: () => void;
	primaryButtonText: string;
	secondaryButtonText: string;
	cancelable: boolean;
	imageSource?: ImageSourcePropType;
	singleButton: boolean;
}

type Props = StateProps & DispatchProp;

class AppDialog extends React.Component<Props, {}> {

	@bind
	handledismiss() {
		const { dispatch } = this.props;
		dispatch(dismissDialog());
	}

	@bind
	handlePressPrimary() {
		const { onPressPrimary } = this.props;
		this.handledismiss();
		if (onPressPrimary) {
			onPressPrimary();
		}
	}

	@bind
	handlePressSecondary() {
		const { onPressSecondary } = this.props;
		this.handledismiss();
		if (onPressSecondary) {
			onPressSecondary();
		}
	}

	public renderContentWithImage(imageSource: ImageSourcePropType, title: string, description: string) {
		return (
			<View>
				<Image
					source={imageSource}
					containerStyle={styles.image}
				/>
				<Dialog.Title
					style={styles.title}
					allowFontScaling={false}
				>
					{title}
				</Dialog.Title>
				<Dialog.Description
					style={styles.description}
					allowFontScaling={false}
				>
					{description}
				</Dialog.Description>
			</View>
		);
	}

	public renderContent(title: string, description: string) {
		return ([
			<Dialog.Title
				key="title"
				style={styles.title}
				allowFontScaling={false}
			>
				{title}
			</Dialog.Title>,
			<Dialog.Description
				key="description"
				style={styles.description}
				allowFontScaling={false}
			>
				{description}
			</Dialog.Description>
		]);
	}

	public render() {
		const {
			isShowing,
			title,
			description,
			primaryButtonText,
			secondaryButtonText,
			cancelable,
			imageSource,
			singleButton
		} = this.props;
		return (
			<Dialog.Container
				visible={isShowing}
				contentStyle={styles.container}
				onBackButtonPress={cancelable ? this.handledismiss : undefined}
				onBackdropPress={cancelable ? this.handledismiss : undefined}
				blurComponentIOS={<View style={{ backgroundColor: colors.primaryBackground }} />}
			>
				{imageSource
					? this.renderContentWithImage(imageSource, title, description)
					: this.renderContent(title, description)
				}
				<View style={styles.buttonContainer}>
					{!singleButton &&
						<Dialog.Button
							style={styles.button}
							label={secondaryButtonText}
							onPress={this.handlePressSecondary}
							allowFontScaling={false}
						/>
					}
					<Dialog.Button
						style={styles.button}
						label={primaryButtonText}
						onPress={this.handlePressPrimary}
						allowFontScaling={false}
					/>
				</View>
			</Dialog.Container>
		);
	}
}

function mapStateToProps(state: ReduxState): StateProps {
	const { isShowing, title, description, onPressPrimary, onPressSecondary, options } = state.dialog;
	return {
		isShowing,
		title,
		description,
		onPressPrimary,
		onPressSecondary,
		primaryButtonText: options?.primaryButtonText || 'OK',
		secondaryButtonText: options?.secondaryButtonText || 'Cancel',
		cancelable: options?.cancelable !== undefined ? options.cancelable : true,
		imageSource: options?.imageSource,
		singleButton: options?.singleButton || false
	};
}

export default connect(mapStateToProps)(AppDialog);
