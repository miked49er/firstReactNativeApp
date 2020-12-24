import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { OpenSans_400Regular, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';

export default function App() {
    const [fontsLoaded, error] = useFonts({
        OpenSans_400Regular,
        OpenSans_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    return (
        <View style={styles.container}>
            <Text>Open up App.tsx to start working on your app!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
