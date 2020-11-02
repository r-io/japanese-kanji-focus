import routes from '@constants/routes';
import statusBar from '@themes/statusBar';
import { StatusBarProps } from 'react-native';

export function getStatusBarSettings(route: string): StatusBarProps {
  switch (route) {
    case routes.Landing:
    case routes.Main:
    case routes.Home:
    case routes.Documentary:
    case routes.Movie:
    case routes.Search:
    default:
      return statusBar.black;
  }
}