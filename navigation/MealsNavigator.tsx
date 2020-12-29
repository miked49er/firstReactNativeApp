import React from 'react';
import { Platform, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { createAppContainer } from 'react-navigation';
import Theme from '../constants/theme';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer';
import FiltersScreen from '../screens/FiltersScreen';

let defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Theme.primaryColor : ''
    },
    headerTitleStyle: {
        fontFamily: 'open-sans-bold'
    },
    headerBackTitleStyle: {
        fontFamily: 'open-sans'
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Theme.primaryColor
};
const MealsNavigator = createStackNavigator({
    Categories: CategoriesScreen,
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
}, {
    defaultNavigationOptions: defaultNavigationOptions
});

const FavoritesNavigator = createStackNavigator({
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
}, {
    defaultNavigationOptions: defaultNavigationOptions
});

let tabScreenConfig = {
    Meals: {
        screen: MealsNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo: { tintColor: string }) =>
                <Ionicons
                    name='ios-restaurant'
                    size={25}
                    color={tabInfo.tintColor}
                />,
            tabBarColor: Theme.primaryColor,
            tabBarLabel: Platform.OS === 'android'
                ? <Text style={{fontFamily: 'open-sans'}}>Meals</Text>
                : 'Meals'
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo: { tintColor: string }) =>
                <Ionicons
                    name='ios-star'
                    size={25}
                    color={tabInfo.tintColor}
                />,
            tabBarColor: Theme.accentColor,
            tabBarLabel: Platform.OS === 'android'
                ? <Text style={{fontFamily: 'open-sans'}}>Favorites</Text>
                : 'Favorites'
        }
    }
};
const MealsTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig,
        {
            activeColorLight: 'white',
            shifting: true
        }
    )
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Theme.accentColor,
            labelStyle: {
                fontFamily: 'open-sans'
            }
        }
    });

const FilterStackNavigator = createStackNavigator({
    Filters: FiltersScreen
}, {
    defaultNavigationOptions: defaultNavigationOptions
});

const MainNavigator = createDrawerNavigator({
    Tabs: {
        screen: MealsTabNavigator,
        navigationOptions: {
            drawerLabel: 'Meals'
        }
    },
    Filters: FilterStackNavigator
}, {
    contentOptions: {
        activeTintColor: Theme.accentColor,
        labelStyle: {
            fontFamily: 'open-sans-bold'
        }
    }
});

export default createAppContainer(MainNavigator);
