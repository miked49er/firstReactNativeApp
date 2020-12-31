import React from 'react';
import { StyleSheet } from 'react-native';
import { combineReducers, createStore } from 'redux';
import { Provider } from 'react-redux';
import productsReducer from './store/reducers/products';
import ShopNavigator from './navigation/ShopNavigator';
import { OpenSans_400Regular, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';
import { composeWithDevTools } from 'redux-devtools-extension';
import cartReducer from './store/reducers/cart';

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
});
const store = createStore(rootReducer, composeWithDevTools());

export default function App() {
    const [fontsLoaded] = useFonts({
        'open-sans': OpenSans_400Regular,
        'open-sans-bold': OpenSans_700Bold
    });

    if (!fontsLoaded) {
        return <AppLoading/>;
    }

    return (
        <Provider store={store}>
            <ShopNavigator/>
        </Provider>
    );
}

const styles = StyleSheet.create({
    touchable: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
