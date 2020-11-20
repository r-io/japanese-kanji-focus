import Favourite from '@components/main/Favourite';
import Home from '@components/main/Home';
import Settings from '@components/main/Settings';
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
    Favourite,
    Settings
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
          iconType = 'ionicon';
          iconName = 'home';
        } else if (routeName === routes.Favourite) {
          iconType = 'ionicon';
          iconName = 'heart';
        } else if (routeName === routes.Settings) {
          iconType = 'ionicon';
          iconName = 'md-settings-sharp';
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
