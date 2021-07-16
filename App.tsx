import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PlacesNavigator } from './navigation/PlacesNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
      <NavigationContainer>
        <PlacesNavigator/>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
});
