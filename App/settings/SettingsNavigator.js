import { StackNavigator } from 'react-navigation';
import SettingsPage from './scenes/SettingsPage';
import NotificationsPage from './scenes/NotificationsPage';

const SettingsNavigator = StackNavigator({
    SettingsPage: { screen: SettingsPage },
    NotificationsPage: { screen: NotificationsPage },
}, {
    initialRouteName: 'SettingsPage',
    headerMode: 'none',
});

export default SettingsNavigator;

