import bind from 'bind-decorator';
import { KanjiResult } from 'kanji.js';
import React from 'react';
import {  ScrollView, View } from 'react-native';
import { Badge, Text } from 'react-native-elements';
import { Kanji } from 'react-native-kanji-animation';
import { connect } from 'react-redux';
import CommandButton from './CommandButton';
import DetailRow from './DetailRow';
import styles from './styles/StudyItem.styles';

interface Props {
  kanjiDetail: KanjiResult;
  canvasSize: number;
  onPressPractice: (kanjiDetail: KanjiResult) => void;
}

interface State {}

class StudyItem extends React.Component<Props, State> {
  kanji: Kanji | null = null;

  @bind
  handlePressAnimation() {
    if (this.kanji){
      this.kanji.animate();
    }
  }

  @bind
  handlePressPractice() {
    const { onPressPractice, kanjiDetail } = this.props;
    onPressPractice(kanjiDetail);
  }

  renderUpperDetails() {
    const { kanjiDetail, canvasSize } = this.props;
    return (
      <View style={styles.upperContainer}>
        <View style={[styles.canvasContainer, { width: canvasSize, height: canvasSize }]}>
          <Kanji
            ref={el => this.kanji = el}
            duration={500}
            size={canvasSize}
            element={kanjiDetail.literal}
            pathProps={{ strokeWidth: 5 }}
            onPress={this.handlePressAnimation}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <CommandButton
            icon="playlist-plus"
            title="Add to List"
            onPress={() => null}
          />
          <CommandButton
            icon="brush"
            title="Writing Practice"
            onPress={this.handlePressPractice}
          />
        </View>
      </View>
    );
  }

  renderLowerDetails() {
    const { kanjiDetail } = this.props;
    return (
      <View style={styles.lowerContainer}>
        <DetailRow title="Meanings (意味):">
          <Text style={styles.meaning}>{kanjiDetail.meanings.join(', ')}</Text>
        </DetailRow>
        {kanjiDetail.onyomi.length > 0 &&
          <DetailRow title="Onyomi (音読み):">
            {kanjiDetail.onyomi.map((value, index2) =>
              <Badge
                key={value + '#' + index2}
                badgeStyle={styles.onyomiBadge}
                textStyle={styles.badgeText}
                value={value}
              />
            )}
          </DetailRow>
        }
        {kanjiDetail.kunyomi.length > 0 &&
          <DetailRow title="Kunyomi (訓読み):">
            {kanjiDetail.kunyomi.map((value, index2) =>
              <Badge
                key={value + '#' + index2}
                badgeStyle={styles.kunyomiBadge}
                textStyle={styles.badgeText}
                value={value}
              />
            )}
          </DetailRow>
        }
        <DetailRow title="Compounds:" valueContainerStyle={styles.compoundsContainer}>
          {kanjiDetail.compounds.map(compound =>
            <View style={styles.compoundContainer} key={compound.kanji + ' ' + compound.kana}>
              <View style={styles.compoundUpperContainer}>
                <Text style={styles.compoundKanjiText}>{compound.kanji}</Text>
                <Text style={styles.compoundKanaText}>{compound.kana}</Text>
              </View>
              <Text style={styles.compoundTranslationText}>{compound.translation}</Text>
            </View>
          )}
        </DetailRow>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.innerContainer} showsVerticalScrollIndicator={false}>
          {this.renderUpperDetails()}
          {this.renderLowerDetails()}
        </ScrollView>
      </View>
    );
  }
}

export default connect()(StudyItem);