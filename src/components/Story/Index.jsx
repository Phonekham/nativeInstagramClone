import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import ProfilePicture from '../ProfilePicture/Index';

const Index = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <ProfilePicture uri={imageUri}></ProfilePicture>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Index;
