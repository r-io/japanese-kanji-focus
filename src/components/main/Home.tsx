import colors from '@constants/colors';
import routes from '@constants/routes';
import { UserData } from '@typings/model/auth';
import { Favorite } from '@typings/model/favorite';
import ReduxState from '@typings/reduxState';
import bind from 'bind-decorator';
// import Kanji from 'kanji-dictionary-lookup';
import React from 'react';
import { View } from 'react-native';
import { Card } from 'react-native-elements';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { connect, DispatchProp } from 'react-redux';
import FavoriteItem from './FavoriteItem';
import styles from './styles/Home.styles';

export interface StateProps {
  userData?: UserData;
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
      favorites: this.generateFavorites()
    };
  }

  // TEMPORARY
  generateFavorites(): Favorite[] {
    return [
      {
        title: 'Numbers 1',
        initial: 'N1',
        color: colors.green,
        characters: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
      },
      {
        title: 'Numbers 2',
        initial: 'N2',
        color: colors.blue,
        characters: ['百', '千', '万', '円', '口', '目',]
      }
    ];
  }

  @bind
  handlePressFavorite() {
    const { navigation } = this.props;
    navigation.navigate(routes.Challenge);
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

  render() {
    const { favorites } = this.state;
    return (
      <View style={styles.container}>
        <Card containerStyle={styles.card} >
          <Card.Title style={styles.cardTitle}>Favorites</Card.Title>
          {/* <Card.Divider /> */}
          {favorites.map((favorite, index) => this.renderFavoriteItem(favorite, index))}
        </Card>
      </View >
    );
  }
}

function mapStateToProps(state: ReduxState): StateProps {
  return {
    userData: state.auth.userData,
    lastRatingPopup: state.session.rating.lastRatingPopup,
    isRated: state.session.rating.isRated
  };
}

export default connect(mapStateToProps)(Home);