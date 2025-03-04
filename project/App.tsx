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


const App =() =>{
  return(
   <Provider store={store}>
   <Counter />
   </Provider> 
  )
}


export default App;