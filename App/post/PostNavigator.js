import { StackNavigator } from 'react-navigation';

import PostList from './scenes/PostList';
import PostInformation from './scenes/PostInformation';

const PostNavigator = StackNavigator({
  PostList: { screen: PostList },
  PostInformation: { screen: PostInformation },
}, {
  initialRouteName: 'PostList',
  headerMode: 'screen',
});

export default PostNavigator;
