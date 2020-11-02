import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Divider } from 'react-native-elements';
import styles from './styles/Separator.styles';

interface Props {
	style?: StyleProp<ViewStyle>;
}

class Separator extends React.PureComponent<Props, {}> {

	constructor(props: Props) {
		super(props);
	}

	public render() {
		const { style } = this.props;
		return (
			<Divider style={[styles.separator, style]} />
		);
	}
}

export default Separator;
