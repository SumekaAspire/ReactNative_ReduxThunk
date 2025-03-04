//rafce
import React, {useState} from 'react'
import { View, Text, Button, TextInput } from 'react-native';
import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement, reset, incrementByAmount as incrementByAmountAction } from './counterSlice'

const Counter = () => {

    const count =useSelector((state)=>state.counter.count)
    const dispatch = useDispatch()

    const [incrementByAmount, setIncrementByAmount] = useState('0');
    const addValue = Number(incrementByAmount)|| 0;

    const resetAll = () =>{
        setIncrementByAmount('0');
        dispatch(reset());

    }



  return (

    <View>
      <Text>Counter: {count}</Text>
      <Button title="+" onPress={()=> dispatch(increment())} />
      <Button title="-" onPress={()=> dispatch(decrement())} />
      <TextInput  style={{height: 40, padding: 5,borderColor:"black", borderWidth: 2}}
        placeholder="Type here and click add button ! Default value : 0"
        onChangeText={newText => setIncrementByAmount(newText)}
        value={incrementByAmount}
        keyboardType='numeric'/>
      <Button title="AddAmount" onPress={()=> dispatch(incrementByAmountAction(addValue))}/>
      <Button title ="Reset"onPress={resetAll}/>

    </View>
  )
}

export default Counter