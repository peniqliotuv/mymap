import { StackNavigator, NavigationActions } from 'react-navigation';

import TimelineNavigator from './timeline/TimelineNavigator';
import LoginNavigator from './login/LoginNavigator';
import SplashNavigator from './splash/SplashNavigator';

const AppNavigator = StackNavigator(
  {
    Splash: { screen: SplashNavigator },
    Login: { screen: LoginNavigator },
    Timeline: { screen: TimelineNavigator },
  },
  {
    initialRouteName: 'Splash',
    headerMode: 'none',
  }
);

/* This code is necessary to prevent double rendering of screens. */
const navigateOnce = (getStateForAction) => (action, state) => {
  const { type, routeName } = action;
  return state &&
    type === NavigationActions.NAVIGATE &&
    routeName === state.routes[state.routes.length - 1].routeName
    ? null
    : getStateForAction(action, state);
};

AppNavigator.router.getStateForAction = navigateOnce(AppNavigator.router.getStateForAction);

export default AppNavigator;
