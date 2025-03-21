import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ThemeContext from './ThemeContext';

const UseContext = () => {
    const theme = useContext(ThemeContext); // Use context to access the theme

    return (
        <View style={{ backgroundColor: theme.background}}>
            <Text style={[styles.textHeading, { color: theme.text }]}>Understand, UseContext:</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textHeading: {
        fontSize: 17,
        fontWeight: 'bold',
        margin: 30
    }
});

export default UseContext;
