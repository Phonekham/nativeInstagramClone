import React from 'react';
import {FlatList} from 'react-native';

import Stories from '../Stories/Index';
import Post from '../Post/components/Index';

const data = [
  {
    likesCount: 3,
    caption: 'caption',
    postedAt: '12-11-2020',
    user: {
      imageUri:
        'https://avatars3.githubusercontent.com/u/30440409?s=460&u=7cd7f66276347b794a68c320bd280185757d5fb1&v=4',
      name: 'phonekham',
    },
    imageUri:
      'https://avatars3.githubusercontent.com/u/30440409?s=460&u=7cd7f66276347b794a68c320bd280185757d5fb1&v=4',
  },
  {
    likesCount: 3,
    caption: 'caption',
    postedAt: '12-11-2020',
    user: {
      imageUri:
        'https://avatars3.githubusercontent.com/u/30440409?s=460&u=7cd7f66276347b794a68c320bd280185757d5fb1&v=4',
      name: 'phonssekham',
    },
    imageUri:
      'https://avatars3.githubusercontent.com/u/30440409?s=460&u=7cd7f66276347b794a68c320bd280185757d5fb1&v=4',
  },
];

const Feed = () => (
  <FlatList
    data={data}
    renderItem={({item}) => <Post post={item}></Post>}
    ListHeaderComponent={Stories}></FlatList>
);

export default Feed;
