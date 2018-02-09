import { StackNavigator } from 'react-navigation';
import Splashscreen from './scenes/Splashscreen';

const SplashNavigator = StackNavigator({
    Splashscreen: { screen: Splashscreen },
}, {
    initialRouteName: 'Splashscreen',
    headerMode: 'none',
});

export default SplashNavigator;
