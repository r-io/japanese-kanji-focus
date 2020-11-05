import { NavigationProps as ChallengeNavigationProps } from '@components/challenge/Challenge';
import circleColors from '@constants/circleColors';
import kanjiList from '@constants/kanjiList';
import routes from '@constants/routes';
import { Favorite } from '@typings/model/favorite';
import ReduxState from '@typings/reduxState';
import bind from 'bind-decorator';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { Card } from 'react-native-elements';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { connect, DispatchProp } from 'react-redux';
import FavoriteItem from './FavoriteItem';
import styles from './styles/Home.styles';

export interface StateProps {
  lastRatingPopup: Date | undefined;
  isRated: boolean;
}

type Props = NavigationStackScreenProps & DispatchProp & StateProps;

interface State {
  favorites: Favorite[];
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      favorites: kanjiList.data
    };
  }

  @bind
  handlePressFavorite(favorite: Favorite) {
    const { navigation } = this.props;
    const params: ChallengeNavigationProps = { characters: [...favorite.characters] };
    navigation.navigate(routes.Challenge, params);
  }

  renderFavoriteItem(favorite: Favorite, index: number) {
    return (
      <FavoriteItem
        onPress={this.handlePressFavorite}
        key={index + ''}
        favorite={favorite}
      />
    );
  }

  renderFavoriteAll(favorites: Favorite[]) {
    const favoriteX: Favorite = {
      title: 'Exercise 1 - 20',
      initial: 'X1',
      characters: [].concat.apply([], favorites.map(favorite => favorite.characters) as any),
      color: circleColors.red
    };
    return this.renderFavoriteItem(favoriteX, 0);
  }

  render() {
    const { favorites } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Card containerStyle={styles.card} >
          <Card.Title style={styles.cardTitle}>Favorites</Card.Title>
          {favorites.map((favorite, index) => this.renderFavoriteItem(favorite, index))}
          {this.renderFavoriteAll(favorites)}
        </Card>
        <View style={{ flex: 1, height: 20 }} />
      </ScrollView >
    );
  }
}

function mapStateToProps(state: ReduxState): StateProps {
  return {
    lastRatingPopup: state.session.rating.lastRatingPopup,
    isRated: state.session.rating.isRated
  };
}

export default connect(mapStateToProps)(Home);