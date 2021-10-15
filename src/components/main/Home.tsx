import { NavigationProps as ChallengeNavigationProps } from '@components/challenge/Challenge';
import Picker from '@components/common/picker/Picker';
import { PickerItemData } from '@components/common/picker/PickerItem';
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
  set?: Set;
}

class Home extends React.Component<Props, State> {

  picker: Picker | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      collections: jkfCollections,
      activeSections: []
    };
  }

	mapPickerItems(): PickerItemData[] {
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
  handlePressSet(set: Set) {
    if (this.picker) {
      this.setState({ set });
      this.picker.showModal(set.title);
    }
  }

  @bind
  handlePickerSelected(item: PickerItemData) {
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
        <Picker
          ref={el => this.picker = el}
          data={this.mapPickerItems()}
          onSelected={this.handlePickerSelected}
        />
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