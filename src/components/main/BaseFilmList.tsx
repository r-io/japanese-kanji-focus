import { callApi } from '@actions/apiActions';
import { setSessionData } from '@actions/sessionActions';
import FloatingButton from '@components/common/button/FloatingButton';
import LoaderControl from '@components/common/loaderControl/LoaderControl';
import colors from '@constants/colors';
import refresh from '@constants/refresh';
import { getSliderCarousels } from '@helpers/api';
import { GetSliderCarouselsParam } from '@typings/carousel';
import { Carousel, Slider, SpecialCarousel } from '@typings/model/carousel';
import { Film } from '@typings/model/film';
import { FilmType } from '@typings/subjects';
import bind from 'bind-decorator';
import React from 'react';
import { NativeScrollEvent, NativeSyntheticEvent, RefreshControl, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Toast from 'react-native-root-toast';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { DispatchProp } from 'react-redux';
import Banner from './Banner';
import CarouselList from './Carousel';
import styles from './styles/BaseFilmList.styles';

interface OwnProps {
  floatingButton: {
    isShowing: true;
    title: string;
    filmType: FilmType;
  } | {
    isShowing: false;
  };
  page: string;
  recommendationCarousel?: SpecialCarousel;
}

type Props = OwnProps & DispatchProp & NavigationStackScreenProps;

interface State {
  isRefreshing: boolean;
  banner?: Slider;
  carousels?: Carousel[];
  isFetching: boolean;
  isFetchingError: boolean;
  isShowingFloatingButton: boolean;
  previousScrollPosition: number;
}

abstract class BaseFilmList extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      isRefreshing: false,
      isFetching: false,
      isFetchingError: false,
      isShowingFloatingButton: true,
      previousScrollPosition: 0
    };
  }

  componentDidMount() {
    // this.requestPermission();
    this.callGetSliderCarousels();
    this.props.dispatch(setSessionData('refresh', {
      [refresh.favouritesCarousel]: () => this.handleRefresh()
    }));
  }

  componentDidUpdate(prevProps: Props) {
    if (prevProps !== this.props) {
      if (
        prevProps.recommendationCarousel !== this.props.recommendationCarousel &&
        this.props.recommendationCarousel &&
        this.state.carousels
      ) {
        this.state.carousels.unshift(this.props.recommendationCarousel);
      }
    }
  }

  // async requestPermission() {
  //   if (Platform.OS === 'android') {
  //     try {
  //       await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
  //       await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE);
  //     } catch (err) {
  //       Toast.show(JSON.stringify(err));
  //     }
  //   }
  // }

  @bind
  callGetSliderCarousels() {
    const { page, dispatch } = this.props;
    const params: GetSliderCarouselsParam = {
      isMobile: true,
      page
    };
    this.setState({ isFetching: true });
    dispatch(callApi(getSliderCarousels(params),
      (res) => this.setState({
        banner: res.result.slider,
        carousels: (this.props.recommendationCarousel ? [this.props.recommendationCarousel] as Carousel[] : [])
          .concat(res.result.carousels),
        isFetchingError: false
      }),
      (err) => {
        Toast.show(JSON.stringify(err.error.message));
        this.setState({ isFetchingError: true });
      },
      () => this.setState({ isFetching: false, isRefreshing: false })
    ));
  }

  @bind
  handleRefresh() {
    this.setState({ isRefreshing: true });
    this.callGetSliderCarousels();
  }

  @bind
  handleKeyExtractor(carousel: Carousel) {
    return carousel._id;
  }

  @bind
  handlePressFilm(film: Film) {
    // const params: WatchNavigationProps = {
    //   filmHandle: film.filmHandle
    // };
    // const key: string = routes.Watch + '#' + film.filmHandle;
    // this.props.navigation?.navigate({
    //   routeName: routes.Watch,
    //   params,
    //   key
    // });
  }

  @bind
  handlePressTitle(carousel: Carousel) {
    // const { navigation } = this.props;
    // if (carousel.carouselType === 'CAROUSEL') {
    //   const { filmType, subjects, categories } = carousel;
    //   const params: CatalogueNavigationProps = {
    //     filmType,
    //     subjectName: subjects,
    //     category: categories
    //   };
    //   navigation?.navigate(routes.Catalogue, params);
    // } else if (carousel.carouselType === 'SPECIAL') {
    //   if (carousel._id === 'FAVOURITE') {
    //     navigation?.navigate(routes.Favourites);
    //   } else if (carousel._id === 'CONTINUE_WATCHING') {
    //     navigation?.navigate(routes.ContinueWatching);
    //   }
    // }
  }

  @bind
  handlePressFloatingButton(filmType: FilmType) {
    // this.props.dispatch(callApi(getAddSubjectAnalytic()));
    // const params: SubjectsNavigationProps = { filmType };
    // this.props.navigation?.dispatch(
    //   StackActions.push({
    //     routeName: routes.Subjects,
    //     params,
    //   })
    // );
  }

  @bind
  handleScroll(event: NativeSyntheticEvent<NativeScrollEvent>) {
    const { floatingButton } = this.props;
    if (!floatingButton.isShowing) {
      return;
    }
    const position = event.nativeEvent.contentOffset.y;
    const { isShowingFloatingButton, previousScrollPosition } = this.state;

    if (previousScrollPosition < position - 20 && isShowingFloatingButton) {
      this.setState({ isShowingFloatingButton: false, });
    } else if (previousScrollPosition > position + 20 && !isShowingFloatingButton) {
      this.setState({ isShowingFloatingButton: true });
    }
    if (Math.abs(previousScrollPosition - position) >= 20) {
      this.setState({ previousScrollPosition: position });
    }
  }

  @bind
  handleBeginDrag(event: NativeSyntheticEvent<NativeScrollEvent>) {
    this.setState({ previousScrollPosition: event.nativeEvent.contentOffset.y });
  }

  renderRefreshControl() {
    const { isRefreshing } = this.state;
    return (
      <RefreshControl
        colors={[colors.orange]}
        progressBackgroundColor={colors.trueBlack}
        tintColor={colors.orange}
        refreshing={isRefreshing}
        onRefresh={this.handleRefresh}
      />
    );
  }

  renderItem(carousel: Carousel) {
    return (
      <CarouselList
        onPressFilm={this.handlePressFilm}
        onPressTitle={this.handlePressTitle}
        carousel={carousel}
      />
    );
  }

  @bind
  renderHeader() {
    const { isFetching, isFetchingError, isRefreshing, banner } = this.state;
    return (
      <View>
        <LoaderControl
          isShowing={isFetching && !isRefreshing}
          isError={isFetchingError}
          onPressTryAgain={this.callGetSliderCarousels}
        />
        <Banner onPressFilm={this.handlePressFilm} data={banner} />
      </View>
    );
  }

  public render() {
    const { floatingButton } = this.props;
    const { carousels, isShowingFloatingButton } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          data={carousels || []}
          renderItem={({ item }) => this.renderItem(item)}
          refreshControl={this.renderRefreshControl()}
          ListHeaderComponent={this.renderHeader}
          keyExtractor={this.handleKeyExtractor}
          onScroll={this.handleScroll}
          onScrollBeginDrag={this.handleBeginDrag}
        />
        {floatingButton.isShowing &&
          <FloatingButton
            isShowing={isShowingFloatingButton}
            title={floatingButton.title}
            value={floatingButton.filmType}
            onPress={this.handlePressFloatingButton}
          />
        }
      </View>
    );
  }
}

export default BaseFilmList;
