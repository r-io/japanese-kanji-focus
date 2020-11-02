import colors from '@constants/colors';
import bind from 'bind-decorator';
import React from 'react';
import { Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { BaseButton, FlatList } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import Separator from '../separator/Separator';
import PickerItem, { PickerItemData } from './PickerItem';
import styles from './styles/Picker.styles';

interface Props {
	title?: string;
	value: string;
	data: PickerItemData[];
	onValueChange: (value: string) => void;
}

interface State {
	selectedData: PickerItemData[];
	label: string;
	isVisible: boolean;
}

class Picker extends React.Component<Props, State> {

	constructor(props: Props) {
		super(props);
		this.state = {
			selectedData: props.data,
			label: this.getLabel(props.data),
			isVisible: false
		};
	}

	componentDidUpdate(prevProps: Props) {
		if (prevProps !== this.props) {
			if (prevProps.value !== this.props.value) {
				this.setState({ label: this.getLabel(this.state.selectedData) });
			}
		}
	}

	getLabel(data: PickerItemData[]) {
		const { value } = this.props;
		const label = data.find(d => d.value === value)?.label;
		return label || value;
	}

	showModal() {
		const { data } = this.props;
		this.setState({ isVisible: true, selectedData: data });
	}

	dismissModal() {
		this.setState({ isVisible: false });
	}

	@bind
	handleKeyExtractor(item: PickerItemData, index: number) {
		return index + '';
	}

	@bind
	handlePressButton() {
		this.showModal();
	}

	@bind
	handlePressItem(newValue: PickerItemData[] | string) {
		const { value, onValueChange } = this.props;
		if (typeof (newValue) === 'string') {
			if (value !== newValue) {
				onValueChange(newValue);
			}
			this.dismissModal();
		} else {
			this.setState({ selectedData: newValue });
		}
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
		const { title } = this.props;
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

	private renderModal() {
		const { isVisible, selectedData } = this.state;
		return (
			<Modal
				isVisible={isVisible}
				onBackButtonPress={this.handleBackPress}
				onBackdropPress={this.handleBackPress}
			>
				<View style={styles.modalContainer}>
					<FlatList
						data={selectedData}
						ListHeaderComponent={this.renderModalHeader}
						renderItem={({ item }) => this.renderItem(item)}
						keyExtractor={this.handleKeyExtractor}
						ItemSeparatorComponent={Separator}
					/>
				</View>
			</Modal>
		);
	}

	public render() {
		const { label } = this.state;
		return (
			<BaseButton style={styles.button} onPress={this.handlePressButton} rippleColor={colors.ripple}>
				<View style={styles.container}>
					<Text
						style={styles.label}
						allowFontScaling={false}
					>
						{label}
					</Text>
					<Icon
						type={'ionicon'}
						name={'md-chevron-down'}
						size={20}
						color={colors.white}
					/>
				</View>
				{this.renderModal()}
			</BaseButton>
		);
	}
}

export default Picker;
