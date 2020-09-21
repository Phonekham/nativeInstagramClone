import React from 'react';
import {Image, View} from 'react-native';

import styles from './style';

const Index = ({uri}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri,
        }}></Image>
    </View>
  );
};

export default Index;
