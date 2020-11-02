import { Slider } from '@typings/model/carousel';
import { Film } from '@typings/model/film';
import bind from 'bind-decorator';
import React from 'react';
import { Dimensions, View } from 'react-native';
import Orientation, { OrientationType } from 'react-native-orientation-locker';
import Carousel from 'react-native-snap-carousel';
// import BannerItem from './BannerItem';

interface Props {
  data?: Slider;
  onPressFilm: (film: Film) => void;
}

interface State {
  width: number;
}

const BANNER_WIDTH = 1920;
const BANNER_HEIGHT = 575;

class Banner extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      width: Dimensions.get('window').width
    };
  }

  componentDidMount() {
    Orientation.addOrientationListener(this.handleOrientationChange);
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this.handleOrientationChange);
  }

  @bind
  private handleOrientationChange(orientation: OrientationType) {
    this.setState({ width: Dimensions.get('window').width });
  }

  @bind
  handlePress(film: Film) {
    const { onPressFilm } = this.props;
    onPressFilm(film);
  }

  getBannerHeight() {
    const { width } = this.state;
    return width * BANNER_HEIGHT / BANNER_WIDTH;
  }

  private renderBannerItem(item: Film) {
    return (
      // <BannerItem
      //   onPress={this.handlePress}
      //   film={item}
      //   height={this.getBannerHeight()}
      // />
      <View />
    );
  }

  public render() {
    const { data } = this.props;
    const { width } = this.state;
    return (
      <Carousel
        data={data?.filmIds || []}
        renderItem={({ item }: any) => this.renderBannerItem(item)}
        inactiveSlideScale={1}
        sliderWidth={width}
        itemWidth={width}
        loop={true}
        autoplay={true}
        enableMomentum={true}
        lockScrollWhileSnapping={true}
        autoplayDelay={3000}
        autoplayInterval={5000}
      />
    );
  }
}

export default Banner;
