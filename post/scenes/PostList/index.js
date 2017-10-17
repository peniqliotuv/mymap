import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Post from '../../components/Post';
import { readPosts, votePostById } from '../../actions';

export class PostList extends Component {
  static propTypes = {
    posts: PropTypes.shape({
      byId: PropTypes.objectOf(PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        user: PropTypes.shape({
          username: PropTypes.string,
        }),
        votes: PropTypes.number,
      })),
      allIds: PropTypes.arrayOf(PropTypes.number),
    }),
    readPosts: PropTypes.func,
    votePostById: PropTypes.func,
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
    }),
  }

  static navigationOptions = {
    title: 'Posts',
  }

  /*
    Always make calls to retrieve initial data on this lifecycle hook.
    We want to make sure that the component exists before we even attempt to populate
    it with data
  */
  componentDidMount() {
    this.props.readPosts();
  }

  selectPost = (id) => {
    this.props.navigation.navigate('PostInformation', { id });
  }

  votePost = (id, isUpvote) => {
    this.props.votePostById(id, isUpvote);
  }

  render() {
    /*
      Object destructuring. This is equivalent to: const posts = this.props.posts;
    */
    const { posts } = this.props;
    const postList = posts.allIds.map((id) => posts.byId[id]);

    return (
      <View>
        { postList.map((p) => (
          <Post
            key={`post-${p.id}`}
            id={p.id}
            title={p.title}
            user={p.user && p.username}
            votes={p.votes}
            selectPost={() => this.selectPost(p.id)}
            upvotePost={() => this.votePost(p.id, true)}
            downvotePost={() => this.votePost(p.id, false)}
          />
        )) }
      </View>
    );
    /*
      In this render function, we're iterating over the entire array 'postList' and creating a
      'Post' component for each of them. Notice that the upvotePost and downvotePost are also being passed in
      an anonymous arrow function. We have to do this because we need to bind each function to the context of its own
      'Post' component.

      For example, if we had Post1 and Post2, we need the upvote and downvote functions to only apply to their specific posts.
      Any function of the signature () => ... automatically binds 'this' to its parent context.
    */
  }
}

/* Notice how we don't pass the second parameter ownProps here, because it's not necessary. */
function mapStateToProps(state) {
  return {
    posts: state.post,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    readPosts: () => dispatch(readPosts()),
    votePostById: (postId, isUpvote) => dispatch(votePostById(postId, isUpvote)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
