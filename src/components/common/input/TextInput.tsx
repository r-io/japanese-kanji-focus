import colors from '@constants/colors';
import React from 'react';
import { Text } from 'react-native';
import { Input, InputProps } from 'react-native-elements';
import styles from './styles/TextInput.styles';

interface Props extends InputProps {
	requiredSign?: boolean;
	height?: number;
}

interface State { }

class TextInput extends React.Component<Props, State> {

	private renderLabel() {
		const { label, requiredSign } = this.props;

		if (!label) {
			return undefined;
		}

		return (
			<Text
				style={styles.label}
				allowFontScaling={false}
			>
				{label}
				{requiredSign &&
					<Text
						style={styles.requiredSign}
						allowFontScaling={false}
					>
						*
					</Text>
				}
			</Text>
		);
	}

	public render() {
		const { height } = this.props;
		return (
			<Input
				{...this.props}
				label={this.renderLabel()}
				containerStyle={styles.container}
				inputContainerStyle={styles.inputContainer}
				placeholderTextColor={colors.mediumGray}
				inputStyle={[styles.input, { height }]}
				errorStyle={styles.error}
				selectionColor={colors.trueBlack}
			/>
		);
	}
}

export default TextInput;
