import colors from '@constants/colors';
import ReduxState from '@typings/reduxState';
import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Text } from 'react-native-elements';
import Modal from 'react-native-modal';
import { connect, DispatchProp } from 'react-redux';
import styles from './styles/AppLoading.styles';

interface StateProps {
	isLoading: boolean;
}

type Props = StateProps & DispatchProp;

class AppLoading extends React.Component<Props, {}> {

	public render() {
		const { isLoading } = this.props;
		return (
			<Modal
				animationIn="fadeIn"
				animationOut="fadeOut"
				isVisible={isLoading}
			>
				<View style={styles.modalContainer}>
					<View style={styles.innerModalContainer}>
						<ActivityIndicator
							size="large"
							color={colors.primary}
						/>
						<Text
							style={styles.title}
							allowFontScaling={false}
						>
							Loading...
						</Text>
					</View>
				</View>
			</Modal>
		);
	}
}

function mapStateToProps(state: ReduxState): StateProps {
	return { isLoading: state.loading.isLoading };
}

export default connect(mapStateToProps)(AppLoading);
