import React from 'react';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import Theme from '../constants/Theme';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';
import { createAppContainer } from 'react-navigation';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrdersScreen from '../screens/shop/OrdersScreen';

let defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Theme.primary : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Theme.primary,
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans',
    }
};
const ProductsNavigator = createStackNavigator({
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen
}, {
    defaultNavigationOptions: defaultNavigationOptions,
    navigationOptions: {
        drawerIcon: (drawerConfig: any) => (
            <Ionicons
                name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                size={23}
                color={drawerConfig.tintColor}
            />
        )
    }
});

const OrdersNavigator = createStackNavigator({
    Orders: OrdersScreen
}, {
    defaultNavigationOptions: defaultNavigationOptions,
    navigationOptions: {
        drawerIcon: (drawerConfig: any) => (
            <Ionicons
                name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                size={23}
                color={drawerConfig.tintColor}
            />
        )
    }
});

const ShopNavigator = createDrawerNavigator({
    Products: ProductsNavigator,
    Orders: OrdersNavigator
}, {
    contentOptions: {
        activeTintColor: Theme.primary
    }
});

export default createAppContainer(ShopNavigator);
