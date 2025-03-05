import React, { useState } from 'react';
import {
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

const Animated = () => {
  const [dimensions, setDimensions] = useState({ w: 100, h: 100 });

  const _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    setDimensions(prevDimensions => ({
      w: prevDimensions.w + 15,
      h: prevDimensions.h + 15,
    }));
  };

  return (
    <View style={styles.container}>
      <View
        style={[styles.box, { width: dimensions.w, height: dimensions.h }]}
      />
      <TouchableOpacity onPress={_onPress}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Press me!</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Animated;