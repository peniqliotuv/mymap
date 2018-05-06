import { StackNavigator } from 'react-navigation';

import Timeline from './scenes/Timeline';
import SettingsNavigator from '../settings/SettingsNavigator';

const TimelineNavigator = StackNavigator(
  {
    Timeline: {
      screen: Timeline,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    SettingsNavigator: {
      screen: SettingsNavigator,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
  },
  {
    initialRouteName: 'Timeline',
    headerMode: 'none',
    navigationOptions: {
      gesturesEnabled: false,
    },
  }
);

export default TimelineNavigator;
