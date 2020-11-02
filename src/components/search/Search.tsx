import { callApi } from '@actions/apiActions';
import { setSessionData } from '@actions/sessionActions';
import LoaderControl from '@components/common/loaderControl/LoaderControl';
import Picker from '@components/common/picker/Picker';
import { PickerItemData } from '@components/common/picker/PickerItem';
import colors from '@constants/colors';
import { FILTER_BY_DATA, filterByType, SORT_BY_DATA } from '@constants/picker';
// import routes from '@constants/routes';
import { getFilmAdvancedSearch } from '@helpers/api';
import { GetFilmAdvancedSearchParam } from '@typings/film';
import { UserData } from '@typings/model/auth';
import { Film } from '@typings/model/film';
import ReduxState from '@typings/reduxState';
import bind from 'bind-decorator';
import React from 'react';
import { Dimensions, FlatList, RefreshControl, View } from 'react-native';
import { SearchBar, Text } from 'react-native-elements';
import Orientation from 'react-native-orientation-locker';
import Toast from 'react-native-root-toast';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { connect, DispatchProp } from 'react-redux';
import styles from './styles/Search.styles';

interface StateProps {
  userData?: UserData;
  filterBy: string;
  sortBy: string;
}

interface SearchSection {
  title: string;
  films: Film[];
}

type Props = NavigationStackScreenProps & DispatchProp & StateProps;

interface State {
  sections: SearchSection[];
  lastSearch: string;
  search: string;
  hasMore: boolean;
  skip: number;
  isRefreshing: boolean;
  isFetching: boolean;
  isFetchingError: boolean;
  filterBy: string;
  sortBy: string;
  numColumns: number;
}

class Search extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      sections: this.getDefaultSearchSectionList(),
      lastSearch: '',
      search: '',
      hasMore: true,
      skip: 0,
      isRefreshing: false,
      isFetching: false,
      isFetchingError: false,
      filterBy: this.props.filterBy,
      sortBy: this.props.sortBy,
      numColumns: this.getNumColumns()
    };
  }

  timeoutId: number | undefined = undefined;

  componentDidMount() {
    Orientation.addOrientationListener(this.handleOrientationChange);
    this.callGetFilmAdvancedSearch();
  }

  componentWillUnmount() {
    Orientation.removeOrientationListener(this.handleOrientationChange);
  }

  @bind
  handleOrientationChange() {
    this.setState({ numColumns: this.getNumColumns() });
  }

  getNumColumns() {
    const width = Dimensions.get('window').width;
    return Math.floor(width / 120);
  }

  getDefaultSearchSectionList(): SearchSection[] {
    return [{
      title: 'Top Results',
      films: []
    }, {
      title: 'Related Results',
      films: []
    }];
  }

  mapFilterBy(filterByData: PickerItemData[]) {
    const { userData } = this.props;
    if (userData?.libraryLogin === true) {
      filterByData = filterByData.filter(item =>
        [filterByType.subscriber, filterByType.premiumRental]
          .indexOf(item.value as string) === -1
      );
    }
    return filterByData;
  }

  mapFilmsToState(newBestFilms: Film[], newGoodFilms: Film[]) {
    const { sections } = this.state;
    sections[0].films = sections[0].films.concat(newBestFilms);
    sections[1].films = sections[1].films.concat(newGoodFilms);
    this.setState({ sections });
  }

  @bind
  callGetFilmAdvancedSearch() {
    const { isFetching, hasMore, skip, sortBy, filterBy, search } = this.state;
    if (search === this.state.lastSearch && isFetching) {
      return;
    } else if (search !== this.state.lastSearch && !hasMore) {
      return;
    }

    const { dispatch } = this.props;

    const params = {
      search,
      limit: 12,
      skip,
      sortBy,
      filterBy
    } as GetFilmAdvancedSearchParam;

    this.setState({ isFetching: true, lastSearch: search });
    dispatch(callApi(getFilmAdvancedSearch(params),
      (res) => {
        if (this.state.lastSearch === search) {
          this.mapFilmsToState(res.best, res.good);
          this.setState({
            isFetchingError: false,
            hasMore: res.hasMore,
            skip: skip + 12
          });
        }
      },
      (err) => {
        if (this.state.lastSearch === search) {
          Toast.show(JSON.stringify(err.error.message));
          this.setState({ isFetchingError: true });
        }
      },
      () => {
        if (this.state.lastSearch === search) {
          this.setState({ isFetching: false, isRefreshing: false });
        }
      }
    ));
  }

  @bind
  handleValueChangeFilterBy(value: string) {
    this.setState({ filterBy: value, hasMore: true, skip: 0, sections: this.getDefaultSearchSectionList() }, () => {
      this.callGetFilmAdvancedSearch();
    });
    this.props.dispatch(setSessionData('filterSort', {
      filterBy: value
    }));
  }

  @bind
  handleValueChangeSortBy(value: string) {
    this.setState({ sortBy: value, hasMore: true, skip: 0, sections: this.getDefaultSearchSectionList() }, () => {
      this.callGetFilmAdvancedSearch();
    });
    this.props.dispatch(setSessionData('filterSort', {
      sortBy: value
    }));
  }

  @bind
  handleChangeText(search: string) {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.setState({ search, hasMore: true, skip: 0, sections: this.getDefaultSearchSectionList() }, () => {
      this.timeoutId = setTimeout(() => this.callGetFilmAdvancedSearch(), 500);
    });
  }

  @bind
  handleRefresh() {
    this.setState({ isRefreshing: true, hasMore: true, skip: 0, sections: this.getDefaultSearchSectionList() }, () => {
      this.callGetFilmAdvancedSearch();
    });
  }

  @bind
  handlePress(film: Film) {
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
  handleKeyExtractor(film: Film) {
    return film._id;
  }

  @bind
  handleKeyExtractorSection(section: SearchSection) {
    return section.title;
  }

  renderItem(film: Film) {
    return (
      // <FilmItem onPress={this.handlePress} film={film} />
      <View />
    );
  }

  renderSectionHeader(section: SearchSection) {
    if (section.films.length === 0) {
      return null;
    }
    return (
      <Text
        style={styles.sectionTitle}
        allowFontScaling={false}
      >
        {section.title + ':'}
      </Text>
    );
  }

  renderSectionItem(section: SearchSection) {
    const { numColumns } = this.state;
    return (
      <FlatList
        key={numColumns}
        style={styles.innerContainer}
        data={section.films}
        ListHeaderComponent={() => this.renderSectionHeader(section)}
        renderItem={({ item }) => this.renderItem(item)}
        keyExtractor={this.handleKeyExtractor}
        numColumns={numColumns}
        initialNumToRender={12}
      />
    );
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

  @bind
  renderHeader() {
    const { filterBy, sortBy, search } = this.state;
    return (
      <View>
        <SearchBar
          placeholder="Type Here..."
          inputContainerStyle={styles.searchInnerContainer}
          containerStyle={styles.searchContainer}
          inputStyle={styles.searchInput}
          onChangeText={this.handleChangeText}
          allowFontScaling={false}
          value={search}
          autoFocus={true}
          selectionColor={colors.white}
          placeholderTextColor={colors.mediumGray}
        />
        <View style={styles.pickerContainer}>
          <Text
            style={styles.pickerLabel}
            allowFontScaling={false}
          >
            Filter By
          </Text>
          <Picker
            title="Filter By"
            value={filterBy}
            onValueChange={this.handleValueChangeFilterBy}
            data={this.mapFilterBy(FILTER_BY_DATA)}
          />
        </View>
        <View style={styles.pickerContainer}>
          <Text
            style={styles.pickerLabel}
            allowFontScaling={false}
          >
            Sort By
          </Text>
          <Picker
            title="Sort By"
            value={sortBy}
            onValueChange={this.handleValueChangeSortBy}
            data={SORT_BY_DATA}
          />
        </View>
      </View>
    );
  }

  @bind
  renderFooter() {
    const { hasMore, isFetchingError, isRefreshing } = this.state;
    return (
      <View>
        <LoaderControl
          isShowing={hasMore && !isRefreshing}
          isError={isFetchingError}
          onPressTryAgain={this.callGetFilmAdvancedSearch}
        />
      </View>
    );
  }

  @bind
  renderEmpty() {
    const { hasMore } = this.state;
    if (hasMore) {
      return null;
    }

    return (
      <Text
        style={styles.noResult}
        allowFontScaling={false}
      >
        No result found!
      </Text>
    );
  }

  public render() {
    const { sections } = this.state;
    return (
      <FlatList
        style={styles.container}
        data={sections}
        renderItem={({ item }) => this.renderSectionItem(item)}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={this.renderFooter}
        ListEmptyComponent={this.renderEmpty}
        refreshControl={this.renderRefreshControl()}
        keyExtractor={this.handleKeyExtractorSection}
        onEndReached={this.callGetFilmAdvancedSearch}
        onEndReachedThreshold={0.1}
      />
    );
  }
}

function mapStateToProps(state: ReduxState): StateProps {
  return {
    userData: state.auth.userData,
    filterBy: state.session.filterSort.filterBy,
    sortBy: state.session.filterSort.sortBy
  };
}

export default connect(mapStateToProps)(Search);
