import colors from '@constants/colors';
import bind from 'bind-decorator';
import React from 'react';
import { Platform } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { BaseButton } from 'react-native-gesture-handler';
import styles from './styles/PickerItem.styles';

export interface PickerItemData {
	label: string;
	value: PickerItemData[] | string;
}

interface Props extends PickerItemData {
	onPress: (value: PickerItemData[] | string) => void;
}

class PickerItem extends React.Component<Props, {}> {

	constructor(props: Props) {
		super(props);
	}

	@bind
	handlePress() {
		const { onPress, value } = this.props;
		onPress(value);
	}

	private renderIcon() {
		const { value } = this.props;
		if (typeof (value) === 'string') {
			return;
		}

		return (
			<Icon
				type={'ionicon'}
				name={'md-chevron-forward'}
				size={20}
				color={colors.white}
			/>
		);
	}

	public render() {
		const { label } = this.props;
		return (
			<BaseButton
				rippleColor={colors.ripple}
				onPress={Platform.OS === 'ios' ? this.handlePress : () => null}
			>
				<Button
					onPress={Platform.OS === 'android' ? this.handlePress : () => null}
					type="clear"
					style={styles.container}
					title={label}
					titleStyle={styles.label}
					titleProps={{ allowFontScaling: false }}
					icon={this.renderIcon()}
					iconRight={true}
				/>
			</BaseButton>
		);
	}
}

export default PickerItem;
