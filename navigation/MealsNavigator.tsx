import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import { createAppContainer } from 'react-navigation';
import { Platform } from 'react-native';
import Theme from '../constants/theme';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import FavoritesScreen from '../screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

let defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Theme.primaryColor : ''
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Theme.primaryColor
};
const MealsNavigator = createStackNavigator({
    Categories: {
        screen: CategoriesScreen,
        navigationOptions: {
            headerTitle: 'Meal Categories'
        }
    },
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
            tabBarIcon: (tabInfo: {tintColor: string}) =>
                <Ionicons
                    name='ios-restaurant'
                    size={25}
                    color={tabInfo.tintColor}
                />,
            tabBarColor: Theme.primaryColor
        }
    },
    Favorites: {
        screen: FavoritesNavigator,
        navigationOptions: {
            tabBarIcon: (tabInfo: {tintColor: string}) =>
                <Ionicons
                    name='ios-star'
                    size={25}
                    color={tabInfo.tintColor}
                />,
            tabBarColor: Theme.accentColor
        }
    }
};
const MealsTabNavigator = Platform.OS === 'android'
    ? createMaterialBottomTabNavigator(tabScreenConfig,
        {
            activeColorLight: 'white',
            shifting:true
        }
    )
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
            activeTintColor: Theme.accentColor
        }
    })

export default createAppContainer(MealsTabNavigator);
