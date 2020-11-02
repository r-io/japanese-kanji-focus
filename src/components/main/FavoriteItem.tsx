import { Favorite } from '@typings/model/favorite';
import bind from 'bind-decorator';
import React from 'react';
import { Avatar, ListItem } from 'react-native-elements';
import styles from './styles/FavoriteItem.styles';

interface Props {
  favorite: Favorite;
  onPress: (favorite: Favorite) => void;
}

interface State { }

class FavoriteItem extends React.PureComponent<Props, State> {

  @bind
  handlePress() {
    const { onPress, favorite } = this.props;
    onPress(favorite);
  }

  render() {
    const { favorite } = this.props;
    return (
      <ListItem
        containerStyle={styles.container}
        topDivider
        onPress={this.handlePress}
      >
        <Avatar
          titleStyle={styles.initial}
          title={favorite.initial}
          overlayContainerStyle={{ backgroundColor: favorite.color }}
          size="medium"
          rounded
        />
        <ListItem.Content>
          <ListItem.Title style={styles.title}>{favorite.title}</ListItem.Title>
          <ListItem.Subtitle style={styles.subtitle}>{favorite.characters}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron />
      </ListItem>
    );
  }
}

export default FavoriteItem;