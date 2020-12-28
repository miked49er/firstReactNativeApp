import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { OpenSans_400Regular, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';

export default function App() {
    const [fontsLoaded, error] = useFonts({
        OpenSans_400Regular,
        OpenSans_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    return (
        <MealsNavigator/>
    );
}

const styles = StyleSheet.create({});
