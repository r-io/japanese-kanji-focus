import AppDialog from '@components/app/AppDialog';
import AppLoading from '@components/app/AppLoading';
import Challenge from '@components/challenge/Challenge';
import Main from '@components/main/Main';
import BackButton from '@components/navigation/BackButton';
import LogoTitle from '@components/navigation/LogoTitle';
import Search from '@components/search/Search';
import Study from '@components/study/Study';
import routes from '@constants/routes';
import { getStatusBarSettings } from '@helpers/statusBar';
import rootReducer from '@reducers/rootReducers';
import navigationStyle, { navigationCard } from '@themes/navigation';
import theme from '@themes/theme';
import Axios from 'axios';
import bind from 'bind-decorator';
import React from 'react';
import { StatusBar, StatusBarProps, View } from 'react-native';
import { API_URL } from 'react-native-dotenv';
import { ThemeProvider } from 'react-native-elements';
import Orientation from 'react-native-orientation-locker';
import SplashScreen from 'react-native-splash-screen';
import { createAppContainer, NavigationContainerComponent, NavigationState } from 'react-navigation';
import { createStackNavigator, StackHeaderLeftButtonProps } from 'react-navigation-stack';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk));

const AppNavigator = createStackNavigator(
  {
    Main,
    Search,
    Study,
    Challenge,
  },
  {
    initialRouteName: routes.Main,
    defaultNavigationOptions: ({ navigation }) => ({
      ...navigationStyle,
      cardStyle: navigationCard,
      headerLeft: (header: StackHeaderLeftButtonProps) => <BackButton {...header} />,
      headerTitle: () => <LogoTitle onPress={() => navigation.navigate(routes.Home)} />,
      headerRight: () => <View />
    }),
    headerMode: 'screen'
  }
);

const AppContainer = createAppContainer(AppNavigator);

Axios.defaults.baseURL = API_URL;
Axios.defaults.headers.common.isappuser = true;

interface Props { }

interface State {
  statusBarSetting: StatusBarProps;
}

class App extends React.Component<Props, State> {

  navigator: NavigationContainerComponent | null = null;

  constructor(props: Props) {
    super(props);
    this.state = {
      statusBarSetting: getStatusBarSettings(routes.Main)
    };
  }

  async componentDidMount() {
    Orientation.lockToPortrait();
    SplashScreen.hide();
  }

  @bind
  handleNavigationStateChange(prevState: NavigationState, nextState: NavigationState) {
    const prevStatusBarSetting = getStatusBarSettings(prevState.routes[prevState.routes.length - 1].routeName);
    const nextStatusBarSetting = getStatusBarSettings(nextState.routes[nextState.routes.length - 1].routeName);
    if (prevStatusBarSetting !== nextStatusBarSetting) {
      this.setState({ statusBarSetting: nextStatusBarSetting });
    }
    SplashScreen.hide();
  }

  render() {
    const { statusBarSetting } = this.state;
    return (
      <ThemeProvider theme={theme}>
        <StatusBar {...statusBarSetting} />
        <Provider store={store}>
          <AppContainer
            ref={el => this.navigator = el}
            onNavigationStateChange={this.handleNavigationStateChange}
          />
          <AppDialog />
          <AppLoading />
        </Provider >
      </ThemeProvider>
    );
  }
}

export default App;
