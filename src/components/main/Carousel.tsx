import { Carousel as CarouselModel } from '@typings/model/carousel';
import { Film } from '@typings/model/film';
import bind from 'bind-decorator';
import React from 'react';
import { FlatList, View } from 'react-native';
// import styles from './styles/Carousel.styles';

interface Props {
  carousel: CarouselModel;
  onPressFilm: (film: Film) => void;
  onPressTitle: (carousel: CarouselModel) => void;
}

class Carousel extends React.PureComponent<Props, {}> {

  constructor(props: Props) {
    super(props);
  }

  @bind
  handleKeyExtractor(film: Film, index: number) {
    const { carousel } = this.props;
    return carousel._id + '#' + film._id + '#' + index;
  }

  @bind
  handlePressFilm(film: Film) {
    const { onPressFilm } = this.props;
    onPressFilm(film);
  }

  @bind
  handlePressTitle() {
    const { carousel, onPressTitle } = this.props;
    onPressTitle(carousel);
  }

  private renderItem(film: Film) {
    return (
      <View />
    );
  }

  public render() {
    const { carousel } = this.props;

    return (
      <View style={{ flex: 1 }}>
        {/* <TextArrow onPress={this.handlePressTitle}>{carousel.display_name}</TextArrow> */}
        <FlatList
          data={carousel?.filmIds}
          renderItem={({ item }) => this.renderItem(item)}
          keyExtractor={this.handleKeyExtractor}
          initialNumToRender={5}
          horizontal={true}
        />
      </View>
    );
  }
}

export default Carousel;
