import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { PlacesNavigator } from './navigation/PlacesNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import { store } from './store';

export default function App() {
    return (
        <NavigationContainer>
            <Provider store={store}>
                <PlacesNavigator/>
            </Provider>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});
