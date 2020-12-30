import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { enableScreens } from 'react-native-screens';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './store/reducers/products';

enableScreens();

const rootReducer = combineReducers({
    products: productsReducer
});
const store = createStore(rootReducer);

export default function App() {
    return (
        <Provider store={store}>

        </Provider>
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
