import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import ProfilePicture from '../../../ProfilePicture/Index';

const Header = ({imageUri, name}) => {
  return (
    <View style={styles.container}>
      <ProfilePicture uri={imageUri} size={40}></ProfilePicture>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Header;
