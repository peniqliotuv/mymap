import { StackNavigator } from 'react-navigation';
import LoginPage from './scenes/LoginPage';

const LoginNavigator = StackNavigator(
  {
    LoginPage: { screen: LoginPage },
  },
  {
    initialRouteName: 'LoginPage',
    headerMode: 'screen',
  }
);

export default LoginNavigator;
