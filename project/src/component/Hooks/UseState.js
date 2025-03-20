import React,{useState} from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native'

const UseState =()=>{

const[count, setCount] = useState(0)
const[name, setName]=useState('Ram')
const[age, setAge] = useState(18)

const onIncrementclicked =()=>{
    setCount(count+5)
}
const onDecrementclicked =()=>{
    setCount(count-1)
}


    return(
        <View>
           <Text style={{marginLeft:50}}>Count: {count}</Text>
           <View style ={{flexDirection:'row'}}>
           <TouchableOpacity onPress={onIncrementclicked} style ={{margin:10}}>
            <Text>Increment</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onDecrementclicked} style ={{margin:10}}>
            <Text>Decrement</Text>
            </TouchableOpacity>
           </View>

           <View>
            <TextInput 
              style={styles.textInputContainer}
              value={name}
              onChangeText={text =>(setName(text))}/>
            <TouchableOpacity onPress={()=> setAge(age+1)}>
                <Text>Increment AGE</Text>
            </TouchableOpacity>
            <Text>Hello,{name}.Age:{age}</Text>
           </View>
          
        </View>
    )
}


const styles = StyleSheet.create({
    textInputContainer:{
        borderRadius:40,
        borderWidth:2.5,
        borderColor:'teal'
    }
})
export default UseState;