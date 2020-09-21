import React from 'react';
import {View, Text} from 'react-native';

import Story from '../../components/Story/Index';

const HomeScreen = () => {
  return (
    <View>
      <Text>Home......</Text>
      <Story
        imageUri={
          'https://avatars3.githubusercontent.com/u/30440409?s=460&u=7cd7f66276347b794a68c320bd280185757d5fb1&v=4'
        }></Story>
      <Story
        imageUri={
          'https://avatars3.githubusercontent.com/u/30440409?s=460&u=7cd7f66276347b794a68c320bd280185757d5fb1&v=4'
        }></Story>
    </View>
  );
};

export default HomeScreen;
