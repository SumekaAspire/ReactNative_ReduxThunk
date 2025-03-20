import React,{useState,useCallback} from "react";
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';


//It memoizes the function, prevent re-creation of functions on each render, ensuring that it is only re-created when dependencies change.
const UseCallback =()=>{
    const[count, setCount]= useState(0)

    const click = useCallback(()=>{
        setCount(count+1);
      // setCount(prevCount =>prevCount+1);//[]

    },[count])//dependent array array, callback function (click) will be re-created whenever the count value changes.

    return(
        <View>
           <Text>Callback,Count the buttonclicks:{count}</Text>
           <TouchableOpacity onPress={click} style={styles.buttonContainer}>
             <Text style={styles.text}>Click</Text>
           </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer:{
      backgroundColor:'teal',
      borderColor:'black',
      borderRadius:5,
      borderWidth:2,
      width:100,
     

    },
    text:{
 textAlign:'center'
 
    }
})

export default UseCallback;