import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, FlatList, ListRenderItemInfo } from 'react-native';
import Meal from '../models/meal';
import MealItem from './MealItem/MealItem';
import { NavigationStackProp } from 'react-navigation-stack';
import { useSelector } from 'react-redux';
import { MealsState } from '../store/reducers/meals';

interface IMealListProps {
    listData: Meal[];
    navigation: NavigationStackProp;
}

const MealList = (props: IMealListProps) => {
    const favoriteMeals = useSelector((state: {meals: MealsState}) => state.meals.favoriteMeals);
    const renderMealItem = (itemData: ListRenderItemInfo<Meal>) => {
        return (
            <MealItem
                meal={itemData.item}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'MealDetail', params: {
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title,
                            isFav: favoriteMeals.some(meal => meal.id === itemData.item.id)
                        }
                    });
                }}
            />
        );
    };

    return (
        <FlatList
            data={props.listData}
            renderItem={renderMealItem}
            style={styles.wrapper}
        />
    );
};

const styles = StyleSheet.create({
    wrapper: {
        width: '100%',
        padding: 10
    }
});

MealList.propTypes = {
    listData: PropTypes.arrayOf(PropTypes.object).isRequired,
    navigation: PropTypes.object.isRequired
};

export default MealList;
