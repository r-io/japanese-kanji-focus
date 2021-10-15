import routes from '@constants/routes';
import statusBar from '@themes/statusBar';
import { StatusBarProps } from 'react-native';

export function getStatusBarSettings(route: string): StatusBarProps {
  switch (route) {
    case routes.Landing:
    case routes.Main:
    case routes.Home:
    case routes.Settings:
    case routes.Favourite:
    case routes.Search:
    case routes.Study:
    case routes.Challenge:
    default:
      return statusBar.black;
  }
}