import { Set } from '@typings/model/sets';
import bind from 'bind-decorator';
import React from 'react';
import { Avatar, ListItem } from 'react-native-elements';
import styles from './styles/ExercisesSetItem.styles';

interface Props {
  set: Set;
  onPress: (set: Set) => void;
}

class ChallengesSetItem extends React.Component<Props> {

  @bind
  handlePress() {
    const { onPress, set } = this.props;
    onPress(set);
  }

  render() {
    const { set } = this.props;
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
          <ListItem.Subtitle style={styles.subtitle}>{set.characters.length} Kanji</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  }
}

export default ChallengesSetItem;