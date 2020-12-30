import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import Meal from '../models/meal';
import { MealsState } from '../store/reducers/meals';

interface ICategoryMealsScreenProps {
    navigation: NavigationStackProp;
}

const CategoryMealsScreen = (props: ICategoryMealsScreenProps) => {
    const catId: string = props.navigation.getParam('categoryId');

    const availableMeals: Meal[] = useSelector((state: { meals: MealsState }) => state.meals.filteredMeals);
    const displayMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

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
