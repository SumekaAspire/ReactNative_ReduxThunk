import React,{useEffect, useState}from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native'


const HandlingAsync =()=>{

    const[loading, setLoading]= useState(true)
    const[data, setData]= useState([])

    const dataFromApi = async()=>{

      try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const json = await response.json();
        setData(json);  
      }catch(error){
        console.error(error);
      }
      finally{
        setLoading(false);
      }

    }
    useEffect(() => {
        dataFromApi();
      }, []);


    return(
        <View>
            <Text style={{color:'orange', fontWeight:'bold'}}>Handling Async using Fetch </Text>
            {loading?
            (<ActivityIndicator/>):
            (<FlatList
            data={data}
            key={({id})=>id.toString()}
            renderItem={({item})=>(
                <View>
                <Text>{item.name}</Text>
                <Text>{item.address.city}</Text>
                <Text>{item.address.zipcode}</Text>
                <Text>--------------------------------</Text>
                </View>
                
            )}

            />)}

        </View>
    )


}

export default HandlingAsync;