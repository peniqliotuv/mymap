import { StackNavigator } from 'react-navigation';

import TimelineList from './scenes/TimelineList';

const TimelineNavigator = StackNavigator({
  TimelineList: { screen: TimelineList },
}, {
  initialRouteName: 'TimelineList',
  headerMode: 'screen',
});

export default TimelineNavigator;
