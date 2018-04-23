import { StackNavigator } from 'react-navigation';
import SettingsPage from './scenes/SettingsPage';
import NotificationsPage from './scenes/NotificationsPage';
import EditProfilePage from './scenes/EditProfilePage';

const SettingsNavigator = StackNavigator({
  SettingsPage: { screen: SettingsPage },
  NotificationsPage: { screen: NotificationsPage },
  EditProfile: { screen: EditProfilePage },
}, {
  initialRouteName: 'SettingsPage',
  headerMode: 'none',
});

export default SettingsNavigator;
