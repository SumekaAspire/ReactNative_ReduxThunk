import React from 'react'
import {View, Text} from 'react-native'
import { Icon } from 'react-native-elements';

const Icons = () => {
  return (
   <View>
   <Text>Icons</Text>
   <Text>Welcome to My App</Text>
      <Icon
        name="home"
        type="material"  // You can specify other icon libraries like 'ionicon', 'font-awesome', etc.
        color="blue"     // This can be customized based on the theme or individual use
      />
   </View>
  )
}

export default Icons
