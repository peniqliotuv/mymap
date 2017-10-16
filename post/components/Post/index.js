import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

const s = {};

const propTypes = {
  title: PropTypes.string,
  user: PropTypes.string,
  votes: PropTypes.number,
  selectPost: PropTypes.func,
  upvotePost: PropTypes.func,
  downvotePost: PropTypes.func,
};

function Post({ title, user, votes, selectPost, upvotePost, downvotePost }) {
  return (
    <TouchableHighlight onPress={selectPost}>
      <View className={s.post}>
        <View className={s.voteContainer}>
          <Button
            title="⬆"
            className={s.upvote}
            onPress={upvotePost}
          />
          <Text>{votes}</Text>
          <Button
            title="⬇"
            className={s.downvote}
            onPress={downvotePost}
          />
        </View>
        <Text>{title}</Text>
        <Text>by {user}</Text>
      </View>
    </TouchableHighlight>
  );
}

/*
  Since we're making a functional stateless component, we can't actually write:
  static propTypes = {
    ...
  };

  We have to manually set it outside the function.
*/

Post.propTypes = propTypes;
export default Post;
