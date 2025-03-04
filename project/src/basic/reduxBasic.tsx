/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { Text, View } from 'react-native';

const person ={
  name:"akil",
  address:{
    city:"tuty",
    country:"India"
  }
}

//person.name= "karthik"// we can change like this, but in redux case is immutable object

//here create new varibale 
const update = {
  //here using ...(shared operator)copying
//...person,name="somu"
  ...person,address:{
    ...person.address, country :"srilankan"
  } ,name:"somu"  
}
//update.address.country="srilanka" // here person address  also changed.

console.log(person)
console.log(update)

function App(){

}



export default App;