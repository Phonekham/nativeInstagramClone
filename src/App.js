import React from 'react';
import {StatusBar, SafeAreaView} from 'react-native';

import HomeScreen from './screens/HomeScreen/Index';

const App: () => ReactNode = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen></HomeScreen>
      </SafeAreaView>
    </>
  );
};

export default App;
