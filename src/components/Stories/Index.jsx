import React from 'react';
import {FlatList} from 'react-native';

import styles from './styles';
import Story from '../Story/Index';

const data = [
  {
    imageUri:
      'https://avatars3.githubusercontent.com/u/30440409?s=460&u=7cd7f66276347b794a68c320bd280185757d5fb1&v=4',
    name: 'phonekham',
  },
  {
    imageUri:
      'https://avatars3.githubusercontent.com/u/30440409?s=460&u=7cd7f66276347b794a68c320bd280185757d5fb1&v=4',
    name: 'phone',
  },
  {
    imageUri:
      'https://avatars3.githubusercontent.com/u/30440409?s=460&u=7cd7f66276347b794a68c320bd280185757d5fb1&v=4',
    name: 'pp',
  },
  {
    imageUri:
      'https://avatars3.githubusercontent.com/u/30440409?s=460&u=7cd7f66276347b794a68c320bd280185757d5fb1&v=4',
    name: 'ppf',
  },
  {
    imageUri:
      'https://avatars3.githubusercontent.com/u/30440409?s=460&u=7cd7f66276347b794a68c320bd280185757d5fb1&v=4',
    name: 'ppfsfs',
  },
];

const Stories = () => (
  <FlatList
    style={styles.container}
    data={data}
    keyExtractor={({name}) => name}
    horizontal
    showsHorizontalScrollIndicator={false}
    renderItem={({item}) => (
      <Story imageUri={item.imageUri} name={item.name}></Story>
    )}></FlatList>
);

export default Stories;
