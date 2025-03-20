import React,{useState, useMemo} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';


const fibanocci =(num)=>{
    if(num <= 1) return num
    return fibanocci(num-1)+fibanocci(num-2);
}

const MemoizedFibanocci =({num})=>{
 const fibanoccis = useMemo(()=>fibanocci,[])
 const result = fibanoccis(num);
 return <Text>Count is : {num}, Fibanocci value : {result}</Text>
}
//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
//0, 1, 2, 3, 4, 5, 6, 7,   8,  9, 10, 11, 12


const FibanocciSeries=()=>{
 
    const[count, setCount]=useState(0)

    return(
        <View>
            <Text style={{margin:45, fontWeight:"bold"}}>Implementing, UseMemo concept</Text>
            <Text  style={{marginLeft:35, width:"100%"}}>Counting how many times user clicks: {count}</Text>
            <TouchableOpacity style={styles.button}  onPress={()=> setCount(count+1)}>
                 <Text>Click: To find Finanocci values</Text>
            </TouchableOpacity>
            <MemoizedFibanocci num={count}/>

        </View>
    )
}


const styles=StyleSheet.create({
    button:{
        margin:35, 
        height:30,
        width:200,
        padding:5,
        borderRadius:5,
        borderColor:'black',
        borderWidth:2,
        backgroundColor:'lightgray'
    },

})
export default FibanocciSeries;












// import React, { useState, useMemo } from 'react';
// import { View,Text,FlatList,TextInput, StyleSheet } from 'react-native';

// const ItemFilter = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [items] = useState([
//     'Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple', 'Mango', 'Blueberry', 'Peach', 'Strawberry', 'Watermelon'
//   ]);

//   // Memoize the filtered list of items based on the search term
//   const filteredItems = useMemo(() => {
//     return items.filter(item =>
//       item.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//   }, [searchTerm, items]);

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Search items"
//         value={searchTerm}
//         onChangeText={setSearchTerm}
//       />
//       <Text>Suggestions : </Text>

//       <FlatList
//         data={filteredItems}
//         keyExtractor={(item, index) => index.toString()}
//         renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
//         style={{ borderWidth: 2, borderColor: 'orange' }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 30,
//     paddingHorizontal: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 2,
//     marginBottom: 10,
//     paddingHorizontal: 10,
//   },
//   item: {
//     fontSize: 18,
//     marginVertical: 4,
//   },
// });
//export default ItemFilter;














// import React, { useState, useMemo } from 'react';
// import { Button, StyleSheet, Text, View } from 'react-native';

// const UseMemo = () => {
//   const [num, setNum] = useState(1);

//   const doubleNumber = useMemo(() => {
//     return num * 2;
//   }, [num]);

//   return (
//     <View>
//       <Text style={styles.text}>Double of {num} is: {doubleNumber}</Text>
//       <Button onPress={() => setNum(num + 1)} title="Increment" />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   text: {
//     paddingTop: 40,
//     textAlign: 'center',
//     fontSize: 20,
//   },
// });

// export default UseMemo;
