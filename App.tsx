import React from 'react';
import {SafeAreaView} from 'react-native'
import { NavigationContainer, useNavigationState, useRoute } from '@react-navigation/native'

import Router from './src/router/router'

function App(): React.JSX.Element {

  return (
      <SafeAreaView style={{flex: 1}}>
        <NavigationContainer>
          <Router/>
        </NavigationContainer>
      </SafeAreaView>
  );
}

export default App;
