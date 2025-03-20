import React,{useState, useEffect} from 'react';
import {View, Text} from 'react-native';

// it runs after every render
//eg:fetching data, subscribing to external events, or interacting with the DOM.
const UseEffect =()=>{
 const[count, setCount]= useState(0)


 useEffect(()=>{
    const intervalId = setInterval(()=>{
         setCount(count+1)
          //For useEffect , [] empty dependency array- the effect runs only once, incre every sec but not updated due to effect runs only once.
        //setCount(prevCount =>prevCount+1)// use this for increment value from the latest state

    }, 1000)
    return()=> clearInterval(intervalId);
 },[count]) // here it is not a empty dependency,  the effect will run every time the count changes.

    return(
        <View>
            <Text>UseEffect, Count:{count}</Text>
        </View>
    )
}

export default UseEffect;
