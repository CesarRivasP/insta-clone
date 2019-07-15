import React, { Component } from 'react';
import { FlatList } from 'react-native';
import { Post } from '../presentation';


class PostFeed extends Component {

  _renderPost({item}){
    return <Post />;
  }

  _keyExtractor = (item, index) => {

  }

  render () {
    return (
      <FlatList
        data={[1,2,3,4,5,6,7,8,9,10]}
        renderItem={this._renderPost}
        keyExtractor={this._keyExtractor}
      />
    );
  }
}

export default PostFeed;
