import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/router/tabNavigator';
import StackNavigator from './src/router/rootNavigator';
import Provider from './src/context/provider';

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({});
