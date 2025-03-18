import React from "react";
import {View, Text, TouchableOpacity} from 'react-native'
import ApiContainers from "./ApiContainers";
import HandlingAsync from "./HandlingAsync";


const Networking = ()=>{
    return(
       <View>
        <Text>API REQUEST & RESPONSE</Text>
        <Text>Using Fetch: synchronous</Text>
        <TouchableOpacity/>
        <Text>Using Fetch: Asynchronous</Text>
        <TouchableOpacity/>

        <Text>Using axios:</Text>
        <TouchableOpacity/>

        <Text>Using axios:</Text>
        <TouchableOpacity/>

       
       {/* <ApiContainers/> */}
       <HandlingAsync/>

       </View> 
    )
}

export default Networking;