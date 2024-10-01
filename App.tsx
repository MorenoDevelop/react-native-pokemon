import React from 'react';
import {SafeAreaView,} from 'react-native'

import Pokedex from "./src/views/pokedex";

function App(): React.JSX.Element {

  return (
    <SafeAreaView style={{flex: 1}}>
      <Pokedex/>
    </SafeAreaView>
  );
}

export default App;
