import { StackNavigator } from 'react-navigation';

import PostNavigator from './post/PostNavigator';
import TimelineNavigator from './timeline/TimelineNavigator';
import LoginNavigator from './login/LoginNavigator';

const AppNavigator = StackNavigator({
  Login: { screen: LoginNavigator },
  Post: { screen: PostNavigator },
  Timeline: { screen: TimelineNavigator },
}, {
  initialRouteName: 'Login',
  headerMode: 'none',
});

export default AppNavigator;
