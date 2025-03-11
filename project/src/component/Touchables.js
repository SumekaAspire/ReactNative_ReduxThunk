import React from 'react';
import {
  View,
  Alert,
  Text,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
} from 'react-native';

const Touchables = () => {
  const onPressButton = () => {
    Alert.alert('button pressed');
  };

  const onLongPressButton = () => {
    Alert.alert('you long pressed the button');
  };

  //TouchableHighlight(underlayColor) -  it gives user immediate visual feedback, color is changed when user clicked the button.
  //TouchableOpacity - gives visual Feedback, button's opacity decreases, giving the impression that the button is being pressed. 
  //TouchableNativeFeedback - designed for android, user interactions with ripple effect(background props)
  //TouchableWithoutFeedback -  do not provide any visual feedback when user pressed, no change
  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={onPressButton} underlayColor="white" >
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableHighlight</Text>
        </View>
      </TouchableHighlight>

      <TouchableOpacity onPress={onPressButton} >
        <View style={[styles.button, styles.redButton]}>
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </View>
      </TouchableOpacity>

      <TouchableNativeFeedback
        onPress={onPressButton}
        background={
          Platform.OS === 'android'
            ? TouchableNativeFeedback.SelectableBackground()
            : undefined
        }>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            TouchableNativeFeedback{' '}
            {Platform.OS !== 'android' ? '(Android only)' : ''}
          </Text>
        </View>
      </TouchableNativeFeedback>

      <TouchableWithoutFeedback onPress={onPressButton}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
        </View>
      </TouchableWithoutFeedback>
      <TouchableHighlight onPress={onPressButton} onLongPress={onLongPressButton} underlayColor="white">
        <View style={styles.button}>
          <Text style={styles.buttonText}>Touchable with Long Press</Text>
        </View>
      </TouchableHighlight>


      <TouchableOpacity
  accessible={true}
  accessibilityLabel="Tap me!"
  onPress={onPressButton}>
  <View style={styles.button}>
    <Text style={styles.buttonText}>Press me!</Text>
  </View>
</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    marginBottom: 40,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3',
  },
  buttonText: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
  },
  redButton: {
    backgroundColor: 'red', //specific color for the TouchableOpacity button
  },
});

export default Touchables;
