import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import MealList from '../components/MealList';
import { useSelector } from 'react-redux';
import Meal from '../models/meal';
import { MealsState } from '../store/reducers/meals';
import DefaultText from '../components/DefaultText';

interface ICategoryMealsScreenProps {
    navigation: NavigationStackProp;
}

const CategoryMealsScreen = (props: ICategoryMealsScreenProps) => {
    const catId: string = props.navigation.getParam('categoryId');

    const availableMeals: Meal[] = useSelector((state: { meals: MealsState }) => state.meals.filteredMeals);
    const displayMeals = availableMeals.filter(meal => meal.categoryIds.indexOf(catId) >= 0);

    if (displayMeals.length === 0) {
        return (
            <View style={styles.wrapper}>
                <DefaultText>No meals fit your currently set filters.</DefaultText>
            </View>
        );
    }

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
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

CategoryMealsScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default CategoryMealsScreen;
