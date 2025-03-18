import React, {useState} from 'react';
import {View, Text, Button, FlatList, TouchableOpacity,ActivityIndicator} from 'react-native';
import styles from './StylesApi';
import axios from 'axios';



const ApiContainers = () => {
  const [isLoading, setLoading] = useState(false);
  const [fromFetch, setFromFetch] = useState(false);
  const [fromAxios, setFromAxios] = useState(false);
  const [dataSource, setDataSource] = useState([]);
  const [axiosData, setAxiosData] = useState(null);

  const forFetch = () => {
    setFromFetch(true);
    setLoading(true);

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(responseJson => {
        console.log('get data from fetch', responseJson);
        setTimeout(() => {
          setLoading(false);
          setDataSource(responseJson);
        }, 2000);
      })
      .catch(error => console.log(error));
  };

  const forAxios = () => {
    setFromFetch(false);
    //setFromAxios(true)
    setLoading(true);

    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log('get from axios', response.data);
        setTimeout(() => {
          setLoading(false);
          setAxiosData(response.data);
        }, 2000);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const FlatListSeparator = () => {
    return (
      <View
        style={{
          height: 5,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
    );
  };

  const renderItem = (data) => {
    return (
      <TouchableOpacity style={styles.list}>
        <Text style={styles.lightText}>{data.item.name}</Text>
        <Text style={styles.lightText}>{data.item.email}</Text>
        <Text style={styles.lightText}>{data.item.company.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.parentContainer}>
      <View>
        <Text style={styles.textStyle}>Implement the api methods using Fetch & Axios</Text>
      </View>
      <View  style={{ margin: 18 }}>
        <Button
          title={'Using Fetch'}
          onPress={() => {forFetch()}}
          color="teal"
        />
      </View>
      <View  style={{ margin: 18 }}>
        <Button
          title={'Using Axios'}
          onPress={() => {forAxios()}}
          color="teal"
        />
      </View>

      {forFetch?
       <FlatList
       data={dataSource}
       ItemSeparatorComponent={FlatListSeparator}
       renderItem={item => renderItem(item)}
       keyExtractor={item => item.id.toString()}
     />:
     <FlatList
     data={axiosData}
     ItemSeparatorComponent={FlatListSeparator}
     renderItem={item => renderItem(item)}
     keyExtractor={item => item.id.toString()}
   />}

   

      {isLoading && 
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#0c9" />
          <Text style={{fontSize: 16, color: 'red'}}>Loading Data...</Text>
        </View>
      }
    </View>
  );
};

export default ApiContainers;
