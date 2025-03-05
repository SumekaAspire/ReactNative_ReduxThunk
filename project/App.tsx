/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, View } from 'react-native';
import {store} from './src/store/store';
import { Provider } from 'react-redux';
import Counter from './src/features/counter/Counter';
import Animated from './src/animations/LayoutAnimations';
import Apps from './src/animations/AnimationApi';

const App =() =>{
  return(
  //  <Provider store={store}>
  //  <Counter />
  //  </Provider>
  // <Animated/>
  // <Apps/>
  
  <Provider store={store}>

  </Provider>
  )
}


export default App;