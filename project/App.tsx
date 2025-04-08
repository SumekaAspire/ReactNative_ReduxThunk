/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import {store} from './src/store/store';
import { Provider } from 'react-redux';
import Counter from './src/features/counter/Counter';
import Animated from './src/animations/LayoutAnimations';
import Apps from './src/animations/AnimationApi';
import Buttons from './src/component/Button';
import Touchables from './src/component/Touchables';
import PostsList from './src/appFeatures/posts/PostsList';
import Profile from './src/screens/ProfileScreen';
import PlatformModule from './src/component/PlatformModule';
import AddPostForm from './src/appFeatures/posts/AddPostForm';
import Networking from './src/component/Networking/Networking';
import UseState from './src/component/Hooks/UseState';
import HooksConcepts from './src/component/Hooks/HooksConcepts';
import { fetchUsers } from './src/appFeatures/users/usersSlice';
import IconElement from './src/ReactNativeElements/IconElement';
import Icons from './src/ReactNativeElements/Icons';
import Iconn from './src/ReactNativeElements/Icon';
import ButtonExample from './src/ReactNativeElements/ButtonExample';
import Badge from './src/ReactNativeElements/Badge';


store.dispatch(fetchUsers());
const App =() =>{
  return(
  //  <Provider store={store}>
  //  <Counter />
  //  </Provider>
  // <Animated/>
  // <Apps/>
  // <Buttons/> 
  // <Touchables/>
  
  //<Profile /> //unit testing JEST
  //<PlatformModule /> //platform modules

  // <Provider store={store}>
  //   <AddPostForm/>
  //   <ScrollView>
  //   <PostsList/>
  //   </ScrollView>
    
  // </Provider>

  //<Networking />
  
//  <HooksConcepts/> 
//  <IconElement/> 
//<Icons/>
//<Iconn/>
// {/* <ButtonExample/> */}
<Badge/>
  )
}


export default App;