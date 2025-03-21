import React,{createContext,useState} from 'react'
import{View, Text} from 'react-native'

const ThemeContext = createContext({
    background:'white',
    text:'black'
})

export default ThemeContext;

