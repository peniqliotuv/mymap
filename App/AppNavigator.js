import { StackNavigator } from 'react-navigation';

import TimelineNavigator from './timeline/TimelineNavigator';
import SplashNavigator from './splash/SplashNavigator';

const AppNavigator = StackNavigator({
  Splash: { screen: SplashNavigator },
  Timeline: { screen: TimelineNavigator },
}, {
  initialRouteName: 'Splash',
  headerMode: 'none',
});

export default AppNavigator;
