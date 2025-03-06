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
import Buttons from './src/component/Button';
import Touchables from './src/component/Touchables';
import PostsList from './src/appFeatures/posts/PostsList';

const App =() =>{
  return(
  //  <Provider store={store}>
  //  <Counter />
  //  </Provider>
  // <Animated/>
  // <Apps/>
  // <Buttons/>
  // <Touchables/>
  
  <Provider store={store}>
    <PostsList/>
  </Provider>
  )
}


export default App;