import { AppRegistry } from 'react-native';
import App from './App';
// import './shim';
import { name as appName } from './package.json';

AppRegistry.registerComponent(appName, () => App);
