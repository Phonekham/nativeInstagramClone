import React from 'react';
import {View} from 'react-native';

import Header from './Header/Index';
import Body from './Body/Index';
import Footer from './Footer/Index';

const Post = ({post}) => {
  return (
    <View>
      <Header imageUri={post.user.imageUri} name={post.user.name}></Header>
      <Body imageUri={post.imageUri}></Body>
      <Footer
        likesCount={post.likesCount}
        caption={post.caption}
        postedAt={post.postedAt}></Footer>
    </View>
  );
};

export default Post;
