import colors from '@constants/colors';
import bind from 'bind-decorator';
import React from 'react';
import { Button, Icon } from 'react-native-elements';
import styles from './styles/PickerItem.styles';

export interface PickerItemData {
	label: string;
	value: string | number;
}

interface Props extends PickerItemData {
	onPress: (value: PickerItemData) => void;
}

class PickerItem extends React.Component<Props, {}> {

	constructor(props: Props) {
		super(props);
	}

	@bind
	handlePress() {
		const { onPress, label, value } = this.props;
		onPress({ label, value });
	}

	private renderIcon() {
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
			<Button
				onPress={this.handlePress}
				type="clear"
				style={styles.container}
				title={label}
				titleStyle={styles.label}
				titleProps={{ allowFontScaling: false }}
				icon={this.renderIcon()}
				iconRight={true}
			/>
		);
	}
}

export default PickerItem;
