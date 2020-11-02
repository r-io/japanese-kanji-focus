import Documentary from '@components/main/Documentary';
import Home from '@components/main/Home';
import Movie from '@components/main/Movie';
import LogoTitle from '@components/navigation/LogoTitle';
import SearchButton from '@components/navigation/SearchButton';
import colors from '@constants/colors';
import routes from '@constants/routes';
import React from 'react';
import { Platform, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

const Main = createMaterialTopTabNavigator(
  {
    Home,
    Documentary,
    Movie
  },
  {
    navigationOptions: ({ navigation }) => ({
      headerLeft: () => <View />,
      headerTitle: () => <LogoTitle onPress={() => navigation.navigate(routes.Home)} />,
      headerRight: () => <SearchButton onPress={() => navigation.navigate(routes.Search)} />
    }),
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let iconName = '';
        let iconType = '';
        if (routeName === routes.Home) {
          iconType = 'entypo';
          iconName = 'home';
        } else if (routeName === routes.Documentary) {
          iconType = 'ionicon';
          iconName = 'md-videocam';
        } else if (routeName === routes.Movie) {
          iconType = 'material-community';
          iconName = 'filmstrip';
        }
        return <Icon type={iconType} name={iconName} size={25} color={tintColor} />;
      }
    }),
    initialRouteName: routes.Home,
    tabBarPosition: 'bottom',
    lazy: true,
    swipeEnabled: false,
    tabBarOptions: {
      showIcon: true,
      activeTintColor: colors.primary,
      inactiveTintColor: colors.lightGrey,
      style: {
        backgroundColor: colors.trueBlack
      },
      allowFontScaling: false,
      labelStyle: {
        fontSize: 8,
        margin: 0
      },
      tabStyle: {
        padding: 0,
        paddingTop: Platform.OS === 'ios' ? 10 : 0,
        paddingBottom: Platform.OS === 'ios' ? 20 : 0
      },
      indicatorStyle: {
        backgroundColor: colors.transparent,
        height: 0
      }
    },
  }
);

export default Main;
