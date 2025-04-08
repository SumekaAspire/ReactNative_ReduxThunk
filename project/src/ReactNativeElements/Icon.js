import React from 'react';
import { View } from 'react-native';
import { Icon } from '@rneui/themed';

//Hint: use reverse to make your icon look like a button

const Iconn = () => {
    return (
        <View style={{
            alignItems: 'center',
            paddingVertical: 5,
            flexGrow: 1,
        }}>

            <Icon name='rowing' />
            <Icon name='rowing' />


            <Icon
                name='g-translate'
                color='blue' />

            <Icon
                name='sc-telegram'
                type='evilicon'
                color='#517fa4'
            />

            <Icon
                color="#0CC"
                name="devices"
                onLongPress={() => console.log("device is onLongPress()")}
                onPress={() => console.log("device - onPress()")}
                size={40}
                type="material"
            />

            <Icon
                reverse
                name='american-football'
                type='ionicon'
                color='#517fa4'
            />
            

            <Icon
                raised
                name='heartbeat'
                type='font-awesome'
                color='#f50'
                onPress={() => console.log('Icon heart is pressed..')} />

            <Icon name='search' type='material' color='red'/>
            <Icon name='wifi' type='material' />

        </View>
    )
}

export default Iconn;