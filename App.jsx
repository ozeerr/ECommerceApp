import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/router/tabNavigator';
import StackNavigator from './src/router/rootNavigator';



const App = () => {
  return (
    <NavigationContainer>
    <StackNavigator/>
   </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})