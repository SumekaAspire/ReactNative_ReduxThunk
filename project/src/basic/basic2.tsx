/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, View } from 'react-native';

function press(){
  return function(){ //anonymous function
    console.log("thanks");
  }
}


let fn = press() //here we call the function
//let message = fn // here fn belongs to anonumous function
fn()
function App(){

}




 

export default App;