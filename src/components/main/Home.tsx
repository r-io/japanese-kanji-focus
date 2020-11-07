import { NavigationProps as ChallengeNavigationProps } from '@components/challenge/Challenge';
import circleColors from '@constants/circleColors';
import jkfCollections from '@constants/collections';
import colors from '@constants/colors';
import routes from '@constants/routes';
import { Collection } from '@typings/model/collection';
import { Set } from '@typings/model/sets';
import ReduxState from '@typings/reduxState';
import bind from 'bind-decorator';
import React from 'react';
import { ScrollView, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { Card, Icon } from 'react-native-elements';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { connect, DispatchProp } from 'react-redux';
import SetItem from './SetItem';
import styles from './styles/Home.styles';

export interface StateProps {
  lastRatingPopup: Date | undefined;
  isRated: boolean;
}

type Props = NavigationStackScreenProps & DispatchProp & StateProps;

interface State {
  collections: Collection[];
  activeSections: number[];
}

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      collections: jkfCollections,
      activeSections: []
    };
  }

  @bind
  handlePressSet(set: Set) {
    const { navigation } = this.props;
    const params: ChallengeNavigationProps = { characters: [...set.characters] };
    navigation.navigate(routes.Challenge, params);
  }

  @bind
  handleChangeAccordion(indexes: number[]) {
    this.setState({
      activeSections: indexes
    });
  }

  renderSetItem(set: Set, index: number) {
    return (
      <SetItem
        onPress={this.handlePressSet}
        key={index + ''}
        set={set}
      />
    );
  }

  renderSetX(collection: Collection) {
    const sets = collection.sets;
    const setX: Set = {
      title: sets[0].title + ' - ' + sets[sets.length - 1].title,
      initial: 'X' + collection.index,
      characters: [].concat.apply([], sets.map(set => set.characters) as any),
      color: circleColors.red
    };
    return this.renderSetItem(setX, -collection.index);
  }

  @bind
  renderCollectionItem(collection: Collection) {
    return (
      <View>
        {collection.sets.map((set, index) => this.renderSetItem(set, index))}
        {this.renderSetX(collection)}
      </View>
    );
  }

  @bind
  renderAccordionHeader(collection: Collection, index: number, isActive: boolean) {
    return (
      <View>
        <Card.Divider />
        <View style={styles.cardTitleContainer}>
          <Icon name={isActive ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} color={colors.transparent} />
          <Card.Title style={styles.cardTitle}>{collection.title}</Card.Title>
          <Icon name={isActive ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} color={colors.white} />
        </View>
      </View>
    );
  }

  render() {
    const { collections, activeSections } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Card containerStyle={styles.card} >
          <View style={styles.cardHeaderContainer}>
            <Icon name="pen" type="material-community" color={colors.white} size={20} />
            <Card.Title style={styles.cardHeader}>
              Exercises
            </Card.Title>
            <Icon name="pen" type="material-community" color={colors.transparent} size={20} />
          </View>
          <Accordion
            activeSections={activeSections}
            sections={collections}
            renderHeader={this.renderAccordionHeader}
            renderContent={this.renderCollectionItem}
            onChange={this.handleChangeAccordion}
          />
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