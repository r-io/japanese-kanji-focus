import colors from '@constants/colors';
import React from 'react';
import { Icon } from 'react-native-elements';
import { BaseButton } from 'react-native-gesture-handler';
import { StackHeaderLeftButtonProps } from 'react-navigation-stack';
import styles from './styles/BackButton.styles';

interface Props extends StackHeaderLeftButtonProps { }

interface State { }

class BackButton extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);
  }

  public render() {
    const { onPress } = this.props;
    return (
      <BaseButton style={styles.button} onPress={onPress} rippleColor={colors.ripple}>
        <Icon type={'ionicon'} name={'md-chevron-back'} size={40} color={colors.white} />
      </BaseButton>
    );
  }
}

export default BackButton;
