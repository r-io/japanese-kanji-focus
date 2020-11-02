import colors from '@constants/colors';
import React from 'react';
import { Icon } from 'react-native-elements';
import { BaseButton, BaseButtonProperties } from 'react-native-gesture-handler';
import styles from './styles/NotificationButton.styles';

interface Props extends BaseButtonProperties {
  onPress: () => void;
}

interface State { }

class NotificationButton extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);
  }

  public render() {
    const { onPress } = this.props;
    return (
      <BaseButton style={styles.button} onPress={onPress} rippleColor={colors.ripple}>
        <Icon type={'antdesign'} name={'notification'} size={25} color={colors.white} />
      </BaseButton>
    );
  }
}

export default NotificationButton;
