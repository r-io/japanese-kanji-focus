import { NavigationRoute } from 'react-navigation';
import { NavigationStackProp } from 'react-navigation-stack';

export function mapNavigationToState<T>
  (navigation: NavigationStackProp<NavigationRoute, T> | undefined) {
  const result: any = {};
  if (navigation && navigation.state.params) {
    const params = navigation.state.params;
    for (const key in params) {
      if (params[key]) {
        result[key] = params[key];
      }
    }
  }
  return result as T;
}