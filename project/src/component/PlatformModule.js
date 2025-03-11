import React from 'react';
import {StyleSheet, Text, View, Platform} from 'react-native';


if (Platform.Version === 25) {
    console.log('Running on Nougat!');
  }else{
    console.log('Running on another version!');

  }
const PlatformModule = () => {
  return (
    <View>
      <View style={Styles.container}>
        <Text style={Styles.text}>Example for Platform Module.</Text>
      </View>
      <View style={Styles.containers}>
        <Text style={Styles.text}>Example for Platform Module.</Text>
      </View>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    height: Platform.OS === 'ios' ? 200 : 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightblue',
  },
  text: {
    fontSize: 20,
    color: 'darkblue',
  },
  //here import Platform from 'react-native
  containers: {
    flex: 1,
    ...Platform.select({
      ios: {
        backgroundColor: 'lightblue',
      },
      android: {
        backgroundColor: 'teal',
      },
      default: {
        backgroundColor: 'red',
      },
    }),
  },
});
export default PlatformModule;
