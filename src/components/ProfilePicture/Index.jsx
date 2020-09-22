import React from 'react';
import {Image, View} from 'react-native';

import styles from './style';

const Index = ({uri, size = 70}) => {
  return (
    <View style={[styles.container, {width: size + 6, height: size + 6}]}>
      <Image
        style={[styles.image, {width: size, height: size}]}
        source={{
          uri,
        }}></Image>
    </View>
  );
};

export default Index;
