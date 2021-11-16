import { NavigationProps as ChallengeNavigationProps } from '@components/challenge/Challenge';
import Picker from '@components/common/picker/Picker';
import { PickerItemData } from '@components/common/picker/PickerItem';
import circleColors from '@constants/circleColors';
import jkfCollections from '@constants/collections';
import colors from '@constants/colors';
import routes from '@constants/routes';
import { getRandomKanjiProficiency } from '@helpers/random';
import { Collection } from '@typings/model/collection';
import { KanjiProficiency } from '@typings/model/kanjiProficiency';
import { Set } from '@typings/model/sets';
import ReduxState from '@typings/reduxState';
import bind from 'bind-decorator';
import React from 'react';
import { ScrollView, View } from 'react-native';
import Accordion from 'react-native-collapsible/Accordion';
import { Card, Icon } from 'react-native-elements';
import { NavigationEventSubscription } from 'react-navigation';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { connect, DispatchProp } from 'react-redux';
import ChallengesSetItem from './ChallengesSetItem';
import ExercisesSetItem from './ExercisesSetItem';
import styles from './styles/Home.styles';

export interface StateProps {
  kanjiProficiencies: KanjiProficiency[];
}

type Props = NavigationStackScreenProps & DispatchProp & StateProps;

interface State {
  collections: Collection[];
  activeSections: number[];
  set?: Set;
}

class Home extends React.Component<Props, State> {

  challengespicker: Picker | null = null;
  exercisespicker: Picker | null = null;
  navigationListener: NavigationEventSubscription | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      collections: jkfCollections,
      activeSections: []
    };
  }

  componentDidMount() {
    this.navigationListener = this.props.navigation.addListener(
      'willFocus',
      () => this.forceUpdate()
    );
  }

  componentWillUnmount() {
    this.navigationListener?.remove();
  }

	mapChallengesPickerItems(): PickerItemData[] {
    const { kanjiProficiencies } = this.props;
    const result: PickerItemData[] = [];
    const numOfCharacters = [10,25,50,100,200];

    for (const numOfCharacter of numOfCharacters) {
      if (kanjiProficiencies.length < numOfCharacter) {
        break;
      }
      result.push({
        label: numOfCharacter + ' Characters',
        value: numOfCharacter
      });
    }
    result.push({
      label: 'All (' + kanjiProficiencies.length + ' Characters)' ,
      value: kanjiProficiencies.length
    });
		return result;
	}

  mapExercisesPickerItems(): PickerItemData[] {
		return [
      {
        label: 'Study',
        value: routes.Study
      },
      {
        label: 'Writing Challenge',
        value: routes.Challenge
      }
    ];
	}

  @bind
  handlePressExercisesSet(set: Set) {
    if (this.exercisespicker) {
      this.setState({ set });
      this.exercisespicker.showModal(set.title);
    }
  }

  @bind
  handlePressChallengesSet(set: Set) {
    if (this.challengespicker) {
      this.setState({ set });
      this.challengespicker.showModal(set.title);
    }
  }

  @bind
  handleExercisesPickerSelected(item: PickerItemData) {
    const { set } = this.state;
    if (!set) {
      return;
    }
    if (item.value === routes.Study) {
      const { navigation } = this.props;
      const params: ChallengeNavigationProps = { characters: [...set.characters] };
      navigation.navigate(routes.Study, params);
    } else if (item.value === routes.Challenge) {
      const { navigation } = this.props;
      const params: ChallengeNavigationProps = { characters: [...set.characters] };
      navigation.navigate(routes.Challenge, params);
    }
  }

  @bind
  handleChallengesPickerSelected(item: PickerItemData) {
    const { navigation, kanjiProficiencies } = this.props;
    const params: ChallengeNavigationProps =
      { characters: getRandomKanjiProficiency(item.value as number, kanjiProficiencies) };
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
      <ExercisesSetItem
        onPress={this.handlePressExercisesSet}
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

  generateChallengeSet(kanjiProficiencies: KanjiProficiency[]): Set {
    return {
      title: 'Review: Writing Challenge',
      initial: 'RWC',
      color: circleColors.red,
      characters: kanjiProficiencies.map(kp => kp.kanji)
    };
  }

  render() {
    const { kanjiProficiencies } = this.props;
    const { collections, activeSections } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Card containerStyle={styles.card} >
          <View style={styles.cardHeaderContainer}>
            <Icon name="target" type="material-community" color={colors.white} size={20} />
            <Card.Title style={styles.cardHeader}>
              Challenges
            </Card.Title>
            <Icon name="target" type="material-community" color={colors.transparent} size={20} />
          </View>
          <ChallengesSetItem
            onPress={this.handlePressChallengesSet}
            set={this.generateChallengeSet(kanjiProficiencies)}
          />
        </Card>
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
        <View style={styles.bottomContainer} />
        <Picker
          ref={el => this.challengespicker = el}
          data={this.mapChallengesPickerItems()}
          onSelected={this.handleChallengesPickerSelected}
        />
        <Picker
          ref={el => this.exercisespicker = el}
          data={this.mapExercisesPickerItems()}
          onSelected={this.handleExercisesPickerSelected}
        />
      </ScrollView >
    );
  }
}

function mapStateToProps(state: ReduxState): StateProps {
  return {
    kanjiProficiencies: state.session.proficiency.kanji
  };
}

export default connect(mapStateToProps)(Home);