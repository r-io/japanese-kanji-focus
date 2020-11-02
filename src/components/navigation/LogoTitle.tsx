import React from 'react';
import { Image } from 'react-native-elements';
import { BorderlessButton } from 'react-native-gesture-handler';
import styles from './styles/LogoTitle.styles';

interface Props {
  onPress?: () => void;
}

interface State { }

class LogoTitle extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);
  }

  public render() {
    const { onPress } = this.props;
    return (
      <BorderlessButton style={styles.container} onPress={onPress}>
        <Image
          containerStyle={styles.imageContainer}
          resizeMode={'contain'}
          source={require('@assets/images/logo.png')}
        />
      </BorderlessButton>
    );
  }
}

export default LogoTitle;
