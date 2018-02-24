import { StackNavigator } from 'react-navigation';
import SettingsPage from './scenes/SettingsPage';

const SettingsNavigator = StackNavigator({
    SettingsPage: { screen: SettingsPage },
}, {
    initialRouteName: 'SettingsPage',
    headerMode: 'none',
});

export default SettingsNavigator;
