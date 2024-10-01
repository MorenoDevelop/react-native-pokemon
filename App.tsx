import React from 'react';
import {SafeAreaView} from 'react-native'
import { NavigationContainer, useNavigationState, useRoute } from '@react-navigation/native'

import Router from './src/router/router'

import colorsTheme from "./src/styles/colors";

function App(): React.JSX.Element {
    const colors = colorsTheme()

  return (
      <SafeAreaView style={{flex: 1, backgroundColor: colors.backgroundPrimary}}>
        <NavigationContainer>
          <Router/>
        </NavigationContainer>
      </SafeAreaView>
  );
}

export default App;
