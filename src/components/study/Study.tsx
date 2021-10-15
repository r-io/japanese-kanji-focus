import { mapNavigationToState } from '@helpers/navigation';
import bind from 'bind-decorator';
import KanjiDictionary from 'kanji-dictionary-lookup';
import { KanjiResult } from 'kanji.js';
import React from 'react';
import {  Dimensions, View } from 'react-native';
import { Badge, Text } from 'react-native-elements';
import { Kanji } from 'react-native-kanji-animation';
import Modal from 'react-native-modal';
import Carousel from 'react-native-snap-carousel';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { connect, DispatchProp } from 'react-redux';
import CommandButton from './CommandButton';
import DetailRow from './DetailRow';
import PracticeCanvas from './PracticeCanvas';
import styles from './styles/Study.styles';

export interface NavigationProps {
  characters: string[];
}

type Props = NavigationStackScreenProps<NavigationProps> & DispatchProp;

interface State extends NavigationProps {
  screenWidth: number;
  kanjiDetails?: KanjiResult[];
  selectedIndex?: number;
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
  handlePressPractice(index: number) {
    const { isModalVisible } = this.state;
    if (!isModalVisible) {
      this.setState({ selectedIndex: index });
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
    const { kanjiDetails, selectedIndex, isModalVisible } = this.state;
    if (!kanjiDetails || !selectedIndex) {
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
        <PracticeCanvas kanjiDetail={kanjiDetails[selectedIndex]} onEnd={this.handleEndPractice} />
      </Modal>
    );
  }

  renderDetails(item: KanjiResult, index: number) {
    const { screenWidth } = this.state;

    return (
      <View style={styles.detailContainer}>
        <View style={styles.detailUpperContainer}>
          <View style={[styles.detailCanvasContainer, { width: screenWidth/3, height: screenWidth/3 }]}>
            <Kanji
              ref={el => this.kanjis[index] = el}
              duration={500}
              size={screenWidth/3}
              element={item.literal}
              pathProps={{ strokeWidth: 5 }}
              onPress={() => this.handlePressAnimation(index)}
            />
          </View>
          <View style={styles.detailButtonsContainer}>
            <CommandButton
              icon="playlist-plus"
              title="Add to List"
              onPress={() => null}
            />
            <CommandButton
              icon="brush"
              title="Writing Practice"
              onPress={() => this.handlePressPractice(index)}
            />
          </View>
        </View>
        <View style={styles.detailLowerContainer}>
          <DetailRow title="Meanings (意味):">
            <Text style={styles.meaning}>{item.meanings.join(', ')}</Text>
          </DetailRow>
          <DetailRow title="Onyomi (音読み):">
            {item.onyomi.map((value, index2) =>
              <Badge
                key={value + '#' + index2}
                badgeStyle={styles.onyomiBadge}
                textStyle={styles.badgeText}
                value={value}
              />
            )}
          </DetailRow>
          <DetailRow title="Kunyomi (訓読み):">
            {item.kunyomi.map((value, index2) =>
              <Badge
                key={value + '#' + index2}
                badgeStyle={styles.kunyomiBadge}
                textStyle={styles.badgeText}
                value={value}
              />
            )}
          </DetailRow>
        </View>
      </View>
    );
  }

  renderItem(item: KanjiResult, index: number) {
    return (
      <View style={styles.innerContainer}>
        {this.renderDetails(item, index)}
      </View>
    );
  }

  render() {
    const { screenWidth, kanjiDetails } = this.state;
    return (
      <View style={styles.container}>
        <Carousel<KanjiResult>
          data={kanjiDetails || []}
          renderItem={({ item, index }: { item: KanjiResult; index: number }) => this.renderItem(item, index)}
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