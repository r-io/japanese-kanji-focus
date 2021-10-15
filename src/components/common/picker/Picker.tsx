import bind from 'bind-decorator';
import React from 'react';
import { Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import Separator from '../separator/Separator';
import PickerItem, { PickerItemData } from './PickerItem';
import styles from './styles/Picker.styles';

interface Props {
	data: PickerItemData[];
	onSelected: (value: PickerItemData) => void;
}

interface State {
	isVisible: boolean;
	title?: string;
}

class Picker extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {
			isVisible: false
		};
	}

	showModal(title?: string) {
		this.setState({ isVisible: true, title });
	}

	dismissModal() {
		this.setState({ isVisible: false });
	}

	@bind
	handleKeyExtractor(item: PickerItemData, index: number) {
		return item.value + '#' + index;
	}

	@bind
	handlePressButton() {
		this.showModal();
	}

	@bind
	handlePressItem(value: PickerItemData) {
		const { onSelected } = this.props;
		onSelected(value);
		this.dismissModal();
	}

	@bind
	handleBackPress() {
		this.dismissModal();
	}

	@bind
	renderItem(item: PickerItemData) {
		return (
			<PickerItem label={item.label} value={item.value} onPress={this.handlePressItem} />
		);
	}

	@bind
	renderModalHeader() {
		const { title } = this.state;
		if (!title) {
			return null;
		}

		return (
			<View>
				<Text
					style={styles.title}
					allowFontScaling={false}
				>
					{title}
				</Text>
			</View>
		);
	}

	public render() {
		const { data } = this.props;
		const { isVisible } = this.state;
		return (
			<Modal
				isVisible={isVisible}
				onBackButtonPress={this.handleBackPress}
				onBackdropPress={this.handleBackPress}
			>
				<View style={styles.modalContainer}>
					<FlatList<PickerItemData>
						data={data}
						ListHeaderComponent={this.renderModalHeader}
						renderItem={({ item }) => this.renderItem(item)}
						keyExtractor={this.handleKeyExtractor}
						ItemSeparatorComponent={Separator}
					/>
				</View>
			</Modal>
		);
	}
}

export default Picker;
