import colors from '@constants/colors';
import { Path, SketchCanvas } from '@terrylinla/react-native-sketch-canvas';
import { Coordinate } from '@typings/model/coordinate';
import bind from 'bind-decorator';
import { KanjiResult } from 'kanji.js';
import React from 'react';
import {  Dimensions, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { Kanji } from 'react-native-kanji-animation';
import Svg, { Line } from 'react-native-svg';
import { connect } from 'react-redux';
import styles from './styles/PracticeCanvas.styles';

interface Props {
  kanjiDetail: KanjiResult;
  onEnd: () => void;
}

interface State {
  canvasSize: number;
  step: number;
  tries: number;
  strokeCoordinates: Coordinate[][];
  showHintButton: boolean;
  showKanjiHint: boolean;
  showCorrect: boolean;
}

class PracticeCanvas extends React.Component<Props, State> {

  canvas: SketchCanvas | null = null;
  kanji: Kanji | null = null;
  kanjiHint: Kanji | null = null;
  kanjiCorrect: Kanji | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      strokeCoordinates: [],
      canvasSize: Dimensions.get('window').width - 60,
      step: 0,
      tries: 0,
      showHintButton: false,
      showKanjiHint: false,
      showCorrect: false
    };
  }

  componentDidMount() {
    this.getStrokeCoordinates();
  }

  componentDidUpdate() {
    const { onEnd } = this.props;
    const { step, strokeCoordinates, tries, showHintButton, showCorrect } = this.state;
    if (step === strokeCoordinates.length && strokeCoordinates.length > 0) {
      if (!showCorrect) {
        this.setState({ showCorrect: true }, () => {
          this.kanjiCorrect?.animate(() => {
            setTimeout(() => {
              this.setState({
                step: 0,
                strokeCoordinates: [],
                showCorrect: false
              }, () => {
                this.setState({
                  step: 0,
                  tries: 0,
                  showHintButton: false
                });
                onEnd();
              });
            }, 500);
          });
        });
      }
    }
    if (tries >= 3 && !showHintButton) {
      this.setState({ showHintButton: true });
    }
  }

  getStrokeCoordinates() {
    if (!this.kanji) {
      return;
    }
    const { canvasSize } = this.state;
    const strokeProperties = this.kanji.strokeProperties();
    const strokeCoordinates: Coordinate[][] = [];
    strokeProperties.forEach(strokeProperty => {
      const singleStrokeCoordinates: Coordinate[] = [];
      let distance = 0;
      while (distance < strokeProperty.getTotalLength()) {
        const coor = strokeProperty.getPointAtLength(distance);
        distance += 2;
        singleStrokeCoordinates.push({
          x: coor.x * canvasSize / 109,
          y: coor.y * canvasSize / 109
        });
      }
      strokeCoordinates.push(singleStrokeCoordinates);
    });
    this.setState({ strokeCoordinates });
  }

  @bind
  handlePressAnimation() {
    this.kanji?.animate();
  }

  @bind
  handlePressHint() {
    this.setState({ showKanjiHint: true }, () => {
      this.kanjiHint?.animate(() => {
        this.setState({ showKanjiHint: false });
      });
    });
  }

  @bind
  handleStrokeEnd({ path }: Path) {
    if (!this.canvas) {
      return;
    }
    this.canvas.deletePath(path.id);
    const coordinates: Coordinate[] = path.data.map(value => {
      const xy = value.split(',');
      return {
        x: Number(xy[0]),
        y: Number(xy[1])
      };
    });

    const { strokeCoordinates, step, tries } = this.state;
    if (step === strokeCoordinates.length) {
      return;
    }
    const verdict = this.getVerdict(strokeCoordinates[step], coordinates);
    if (verdict) {
      this.setState({
        step: step + 1,
        tries: 0,
        showHintButton: false
      });
    } else {
      this.setState({
        tries: tries < 3 ? tries + 1 : tries
      });
    }
  }

  getVerdict(answerCoordinates: Coordinate[], userCoordinates: Coordinate[]): boolean {
    const limit = 70;

    if (
      this.ensureMinimumDistance(answerCoordinates, userCoordinates, limit) &&
      this.ensureMinimumDistance(userCoordinates, answerCoordinates, limit) &&
      this.ensureDistanceFirstAndLast(answerCoordinates, userCoordinates, limit) &&
      this.ensureXYDistance(userCoordinates, answerCoordinates, limit)
    ) {
      return true;
    }
    return false;
  }

  ensureMinimumDistance(coordinates1: Coordinate[], coordinates2: Coordinate[], limit: number): boolean {
    let belowLimit = true;
    coordinates1.forEach(coor1 => {
      if (!belowLimit) {
        return;
      }
      let minimum = 9999;
      coordinates2.forEach(coor2 => {
        if (!belowLimit) {
          return;
        }
        const dis = this.getDistance(coor1.x, coor1.y, coor2.x, coor2.y);
        if (dis < minimum) {
          minimum = dis;
        }
      });
      if (minimum > limit) {
        belowLimit = false;
      }
    });
    return belowLimit;
  }

  ensureDistanceFirstAndLast(coordinates1: Coordinate[], coordinates2: Coordinate[], limit: number): boolean {
    const initialPointDistance = this.getDistance(
      coordinates1[0].x, coordinates1[0].y,
      coordinates2[0].x, coordinates2[0].y
    );
    if (initialPointDistance > limit) {
      return false;
    }

    const coordinates1LastIndex = coordinates1.length - 1;
    const coordinates2LastIndex = coordinates2.length - 1;
    const lastPointDistance = this.getDistance(
      coordinates1[coordinates1LastIndex].x, coordinates1[coordinates1LastIndex].y,
      coordinates2[coordinates2LastIndex].x, coordinates2[coordinates2LastIndex].y
    );
    return lastPointDistance <= limit;
  }

  ensureXYDistance(coordinates1: Coordinate[], coordinates2: Coordinate[], limit: number): boolean {
    const coordinates1LastIndex = coordinates1.length - 1;
    const coordinates2LastIndex = coordinates2.length - 1;

    const coordinates1DistanceX = coordinates1[coordinates1LastIndex].x - coordinates1[0].x;
    const coordinates2DistanceX = coordinates2[coordinates2LastIndex].x - coordinates2[0].x;
    const coordinates1DistanceY = coordinates1[coordinates1LastIndex].y - coordinates1[0].y;
    const coordinates2DistanceY = coordinates2[coordinates2LastIndex].y - coordinates2[0].y;

    return Math.abs(coordinates1DistanceX - coordinates2DistanceX) <= limit &&
      Math.abs(coordinates1DistanceY - coordinates2DistanceY) <= limit;
  }

  getDistance(x1: number, y1: number, x2: number, y2: number) {
    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
  }

  renderGridLines() {
    const { canvasSize } = this.state;
    return (
      <Svg
        style={styles.gridContainer}
        height={canvasSize}
        width={canvasSize}
      >
        <Line
          x1={canvasSize / 2} y1={0} x2={canvasSize / 2} y2={canvasSize}
          strokeWidth={1} stroke={colors.white} strokeDashoffset={2.5} strokeDasharray={5}
        />
        <Line
          x1={0} y1={canvasSize / 2} x2={canvasSize} y2={canvasSize / 2}
          strokeWidth={1} stroke={colors.white} strokeDashoffset={2.5} strokeDasharray={5}
        />
        <Line
          x1={canvasSize * 1 / 4} y1={0} x2={canvasSize * 1 / 4} y2={canvasSize}
          strokeWidth={1} stroke={colors.white} strokeDashoffset={2.5} strokeDasharray={5} strokeOpacity={0.5}
        />
        <Line
          x1={canvasSize * 3 / 4} y1={0} x2={canvasSize * 3 / 4} y2={canvasSize}
          strokeWidth={1} stroke={colors.white} strokeDashoffset={2.5} strokeDasharray={5} strokeOpacity={0.5}
        />
        <Line
          x1={0} y1={canvasSize * 1 / 4} x2={canvasSize} y2={canvasSize * 1 / 4}
          strokeWidth={1} stroke={colors.white} strokeDashoffset={2.5} strokeDasharray={5} strokeOpacity={0.5}
        />
        <Line
          x1={0} y1={canvasSize * 3 / 4} x2={canvasSize} y2={canvasSize * 3 / 4}
          strokeWidth={1} stroke={colors.white} strokeDashoffset={2.5} strokeDasharray={5} strokeOpacity={0.5}
        />
      </Svg>
    );
  }

  renderCanvas() {
    const { kanjiDetail } = this.props;
    const { canvasSize, step, showHintButton, showKanjiHint, showCorrect } = this.state;
    if (!kanjiDetail) {
      return;
    }
    return (
      <View
        style={[styles.canvasContainer, { width: canvasSize }]}
      >
        {showHintButton &&
          <Icon
            raised
            containerStyle={styles.hintButton}
            disabled={showKanjiHint}
            reverse={true}
            color={'red'}
            name={'lightbulb'}
            type={'foundation'}
            size={15}
            onPress={this.handlePressHint}
          />
        }
         <View
          style={[styles.canvasInnerContainer, { height: canvasSize }]}
        >
          {this.renderGridLines()}
          <Kanji
            ref={el => this.kanji = el}
            containerStyle={styles.kanjiAnswer}
            size={canvasSize}
            element={kanjiDetail.literal}
            step={step}
          />
          <Kanji
            ref={el => this.kanjiHint = el}
            containerStyle={styles.kanjiAnswer}
            size={canvasSize}
            element={kanjiDetail.literal}
            previousStep={false}
            step={step + 1}
            duration={1000}
            pathProps={{
              strokeOpacity: (showKanjiHint) ? 1 : 0,
              stroke: colors.red
            }}
          />
          <Kanji
            ref={el => this.kanjiCorrect = el}
            containerStyle={styles.kanjiAnswer}
            size={canvasSize}
            element={'O'}
            step={1}
            duration={500}
            pathProps={{
              strokeOpacity: showCorrect ? 0.4 : 0,
              stroke: colors.red,
              strokeWidth: 12
            }}
          />
          <SketchCanvas
            ref={el => this.canvas = el}
            style={styles.sketchCanvas}
            strokeColor={colors.white}
            strokeWidth={7}
            onStrokeEnd={this.handleStrokeEnd}
          />
        </View>
      </View>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderCanvas()}
      </View>
    );
  }
}

export default connect()(PracticeCanvas);