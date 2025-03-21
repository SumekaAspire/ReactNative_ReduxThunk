import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import UseEffect from './UseEffect';
import UseState from './UseState';
import UseCallback from './UseCallback';
import UseMemo from './UseMemo';
import ItemFilter from './UseMemo';
import FibanocciSeries from './UseMemo';
import ThemeProvider from './ThemeProvider';
import UseContext from './UseContext';



const HooksConcepts =()=>{
    return(
        <View>
            {/* <UseState/> */}
            {/* <UseEffect/> */}
            {/* <UseCallback/> */}
     {/* UseMemo: */}
           {/* <UseMemo/>             */}
           {/* <ItemFilter/> */}
           {/* <FibanocciSeries/> */}
           {/* <UseContext/> */}
           <ThemeProvider>
            <UseContext/>

           </ThemeProvider>
          
        </View>
    )
}

export default HooksConcepts;