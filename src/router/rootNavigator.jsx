import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { CART, TAB } from '../utils/routes';
import CartScreen from '../screens/cart';
import TabNavigator from './tabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack=createNativeStackNavigator()

const RootNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerBackTitleVisible:false,headerTintColor:"black"}}>
      <Stack.Screen name={TAB} options={{headerShown:false}} component={TabNavigator}/>
      <Stack.Screen name={CART} component={CartScreen}/>
    </Stack.Navigator>
  )
}

export default RootNavigator

const styles = StyleSheet.create({})