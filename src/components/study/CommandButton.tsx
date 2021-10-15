import colors from '@constants/colors';
import bind from 'bind-decorator';
import React from 'react';
import { Icon, ListItem } from 'react-native-elements';
import styles from './styles/CommandButton.styles';

interface Props {
  icon: string;
  title: string;
  onPress: () => void;
}

interface State { }

class CommandButton extends React.PureComponent<Props, State> {

  @bind
  handlePress() {
    const { onPress } = this.props;
    onPress();
  }

  render() {
    const { icon, title } = this.props;
    return (
      <ListItem
        containerStyle={styles.container}
        onPress={this.handlePress}
      >
        <Icon name={icon} type="material-community" color={colors.white} size={15} />
        <ListItem.Content>
          <ListItem.Title style={styles.title}>{title}</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    );
  }
}

export default CommandButton;