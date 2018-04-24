import { StackNavigator } from 'react-navigation';

import Timeline from './scenes/Timeline';
import SettingsNavigator from '../settings/SettingsNavigator';

const TimelineNavigator = StackNavigator(
  {
    Timeline: { screen: Timeline },
    SettingsNavigator: { screen: SettingsNavigator },
  },
  {
    initialRouteName: 'Timeline',
    headerMode: 'none',
  }
);

export default TimelineNavigator;
