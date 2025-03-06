import React from "react";
import { View,Alert,StyleSheet, Button } from "react-native";



const Buttons= ()=>{

    const pressed =()=>{
        Alert.alert('Button is pressed');
    }
   

    return(
        <View style={styles.container}>
          <View style={styles.buttonContainer}> 
          <Button onPress={pressed} title='Click here' color='red'/>
          </View>
          <View style={styles.layoutButtonContainer}> 
          <Button onPress={pressed} title='Back'/>
          <Button onPress={pressed} title='Next'/>

          </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
          flex:1,
          justifyContent:'center',

    },
    buttonContainer:{
        margin:50,
    },
    layoutButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
})

export default Buttons;