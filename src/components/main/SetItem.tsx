import { Set } from '@typings/model/sets';
import bind from 'bind-decorator';
import React from 'react';
import { Avatar, ListItem } from 'react-native-elements';
import styles from './styles/SetItem.styles';

interface Props {
  set: Set;
  showTotal?: boolean;
  onPress: (set: Set) => void;
}

interface State { }

class SetItem extends React.Component<Props, State> {

  @bind
  handlePress() {
    const { onPress, set } = this.props;
    onPress(set);
  }

  render() {
    const { set, showTotal } = this.props;
    return (
      <ListItem
        containerStyle={styles.container}
        topDivider
        onPress={this.handlePress}
      >
        <Avatar
          titleStyle={styles.initial}
          title={set.initial}
          overlayContainerStyle={{ backgroundColor: set.color }}
          size="medium"
          rounded
        />
        <ListItem.Content>
          <ListItem.Title style={styles.title}>{set.title}</ListItem.Title>
          { showTotal
            ? <ListItem.Subtitle style={styles.subtitle}>{set.characters.length} Kanji</ListItem.Subtitle>
            : <ListItem.Subtitle style={styles.subtitle}>{set.characters}</ListItem.Subtitle>
          }
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  }
}

export default SetItem;