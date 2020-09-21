import React from 'react';
import {View, Text} from 'react-native';

import ProfilePicture from '../ProfilePicture/Index';

const Index = ({imageUri, name}) => {
  return (
    <View>
      <ProfilePicture uri={imageUri}></ProfilePicture>
    </View>
  );
};

export default Index;
