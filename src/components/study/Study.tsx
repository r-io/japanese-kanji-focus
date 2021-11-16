import { mapNavigationToState } from '@helpers/navigation';
import bind from 'bind-decorator';
import KanjiDictionary from 'kanji-dictionary-lookup';
import { KanjiResult } from 'kanji.js';
import React from 'react';
import { Dimensions, View } from 'react-native';
import { Kanji } from 'react-native-kanji-animation';
import Modal from 'react-native-modal';
import Carousel from 'react-native-snap-carousel';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { connect, DispatchProp } from 'react-redux';
import PracticeCanvas from './PracticeCanvas';
import StudyItem from './StudyItem';
import styles from './styles/Study.styles';

export interface NavigationProps {
  characters: string[];
}

type Props = NavigationStackScreenProps<NavigationProps> & DispatchProp;

interface State extends NavigationProps {
  screenWidth: number;
  kanjiDetails?: KanjiResult[];
  selectedKanji?: KanjiResult;
  isModalVisible: boolean;
}

class Study extends React.Component<Props, State> {
  kanjis: Array<Kanji | null> = [];

  constructor(props: Props) {
    super(props);
    this.state = {
      screenWidth: Dimensions.get('window').width,
      isModalVisible: false,
      ...mapNavigationToState(props.navigation)
    };
  }

  componentDidMount() {
    const { navigation } = this.props;
    const { characters } = this.state;

    if (characters.length === 0) {
      navigation.goBack();
    }

    const kanjiDetails = characters.map(character => KanjiDictionary.getDetails(character));
    this.setState({ kanjiDetails });

    characters.forEach(character => this.kanjis?.push(null));
  }

  @bind
  handlePressAnimation(index: number) {
    if (this.kanjis[index] !== null){
      (this.kanjis[index] as Kanji).animate();
    }
  }

  @bind
  handlePressPractice(item: KanjiResult) {
    const { isModalVisible } = this.state;
    if (!isModalVisible) {
      this.setState({ selectedKanji: item });
      this.toggleModal();
    }
  }

  @bind
  handleEndPractice() {
    const { isModalVisible } = this.state;
    if (isModalVisible) {
      this.toggleModal();
    }
  }

  toggleModal() {
    const { isModalVisible } = this.state;
    this.setState({ isModalVisible: !isModalVisible });
  }

  renderModalCanvas() {
    const { selectedKanji, isModalVisible } = this.state;
    if (!selectedKanji) {
       return null;
    }
    return (
			<Modal
        isVisible={isModalVisible}
        animationIn="zoomIn"
        animationInTiming={500}
        animationOut="zoomOut"
        animationOutTiming={500}
        onBackButtonPress={this.handleEndPractice}
        onBackdropPress={this.handleEndPractice}
      >
        <PracticeCanvas kanjiDetail={selectedKanji} onEnd={this.handleEndPractice} />
      </Modal>
    );
  }

  renderItem(item: KanjiResult) {
    const { screenWidth } = this.state;
    return (
      <StudyItem
        kanjiDetail={item}
        canvasSize={screenWidth/3}
        onPressPractice={this.handlePressPractice}
      />
    );
  }

  render() {
    const { screenWidth, kanjiDetails } = this.state;
    return (
      <View style={styles.container}>
        <Carousel<KanjiResult>
          data={kanjiDetails || []}
          renderItem={({ item }: { item: KanjiResult }) => this.renderItem(item)}
          sliderWidth={screenWidth}
          itemWidth={screenWidth - 50 }
          lockScrollWhileSnapping={true}
          inactiveSlideOpacity={1}
          inactiveSlideScale={0.9}
        />
        {this.renderModalCanvas()}
      </View>
    );
  }
}

export default connect()(Study);