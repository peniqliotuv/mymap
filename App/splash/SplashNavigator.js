import { StackNavigator } from 'react-navigation';
import Splashscreen from './scenes/Splashscreen';

const SplashNavigator = StackNavigator(
  {
    Splashscreen: {
      screen: Splashscreen,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
  },
  {
    initialRouteName: 'Splashscreen',
    headerMode: 'none',
    navigationOptions: ({ navigation }) => {
      return {
        headerMode: 'none',
        gesturesEnabled: false,
      };
    },
  }
);

export default SplashNavigator;
