import { StackNavigator } from 'react-navigation';

import Timeline from './scenes/Timeline';

const TimelineNavigator = StackNavigator({
  Timeline: { screen: Timeline },
}, {
  initialRouteName: 'Timeline',
  headerMode: 'none',
});

export default TimelineNavigator;
