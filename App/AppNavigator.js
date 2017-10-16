import { StackNavigator } from 'react-navigation';

import PostNavigator from '~/post/PostNavigator';

const AppNavigator = StackNavigator({
  Post: { screen: PostNavigator },
}, {
  headerMode: 'none',
});

export default AppNavigator;
