import { StackNavigator } from 'react-navigation';
import SettingsPage from './scenes/SettingsPage';
import EditProfilePage from './scenes/EditProfilePage';

const SettingsNavigator = StackNavigator({
    Settings: { screen: SettingsPage },
    EditProfile: { screen: EditProfilePage },
}, {
    initialRouteName: 'Settings',
    headerMode: 'none',
});

export default SettingsNavigator;
