import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { OpenSans_400Regular, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';
import { enableScreens } from 'react-native-screens';
import { combineReducers, createStore } from 'redux';
import mealsReducer from './store/reducers/meals';
import { Provider } from 'react-redux';

enableScreens();

let rootReducer = combineReducers({
    meals: mealsReducer
});
const store = createStore(rootReducer);

export default function App() {
    const [fontsLoaded, error] = useFonts({
        'open-sans': OpenSans_400Regular,
        'open-sans-bold': OpenSans_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    return (
        <Provider store={store}>
            <MealsNavigator/>
        </Provider>
    );
}

const styles = StyleSheet.create({});
