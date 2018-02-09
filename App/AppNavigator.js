import { StackNavigator } from 'react-navigation';

import TimelineNavigator from './timeline/TimelineNavigator';
import LoginNavigator from './login/LoginNavigator';
import SplashNavigator from './splash/SplashNavigator';

const AppNavigator = StackNavigator({
  Splash: { screen: SplashNavigator },
  Login: { screen: LoginNavigator },
  Timeline: { screen: TimelineNavigator },
}, {
  initialRouteName: 'Splash',
  headerMode: 'none',
});

export default AppNavigator;
