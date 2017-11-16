import { StackNavigator } from 'react-navigation';

import PostNavigator from './post/PostNavigator';
import TimelineNavigator from './timeline/TimelineNavigator';

const AppNavigator = StackNavigator({
  Post: { screen: PostNavigator },
  Timeline: {screen: TimelineNavigator },
}, {
  initialRouteName: 'Timeline',
  headerMode: 'none',
});

export default AppNavigator;
