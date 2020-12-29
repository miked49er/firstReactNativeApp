import React from 'react';
import PropTypes from 'prop-types';
import { Button, FlatList, ListRenderItemInfo, StyleSheet, Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import Category from '../models/category';
import Meal from '../models/meal';
import MealItem from '../components/MealItem/MealItem';
import MealList from '../components/MealList';

interface ICategoryMealsScreenProps {
    navigation: NavigationStackProp;
}

const CategoryMealsScreen = (props: ICategoryMealsScreenProps) => {
    const catId: string = props.navigation.getParam('categoryId');

    const displayMeals = MEALS.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    return (
        <MealList
            listData={displayMeals}
            navigation={props.navigation}
        />
    );
};

CategoryMealsScreen.navigationOptions = (navigationData: { navigation: NavigationStackProp }) => {
    const catId: string = navigationData.navigation.getParam('categoryId');
    const selectedCategory: Category = CATEGORIES.find(cat => cat.id === catId) || new Category('undefined', 'Category Not Found', '#ccc');

    return {
        headerTitle: selectedCategory.title,
    }
};

const styles = StyleSheet.create({
    wrapper: {}
});

CategoryMealsScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default CategoryMealsScreen;
