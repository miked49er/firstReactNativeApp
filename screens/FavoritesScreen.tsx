import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import MealList from '../components/MealList';
import { NavigationStackProp } from 'react-navigation-stack';
import { MEALS } from '../data/dummy-data';

interface IFavoritesScreenProps {
    navigation: NavigationStackProp;
}

const FavoritesScreen = (props: IFavoritesScreenProps) => {
    const favMeals = MEALS.filter(meal => meal.id === 'm1' || meal.id === 'm2');
    return (
        <MealList
            listData={favMeals}
            navigation={props.navigation}
        />
    );
};

FavoritesScreen.navigationOptions = {
    headerTitle: 'Your Favorites'
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

FavoritesScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default FavoritesScreen;
