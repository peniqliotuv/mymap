import React from 'react';
import {
  View,
  Text,
  Button,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

import colors from '~/App/styles/colors';
import s from './styles';

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
      <View style={s.post}>
        <View style={s.voteContainer}>
          <Button
            title="^"
            color={colors.upvoteOrange}
            onPress={upvotePost}
          />
          <Text>{votes}</Text>
          <Button
            title="v"
            color={colors.downvoteBlue}
            onPress={downvotePost}
          />
        </View>
        <View>
          <Text>{title}</Text>
          <Text>by {user}</Text>
        </View>
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
