import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { MEALS } from '../data/dummy-data';
import Meal from '../models/meal';

interface IMealDetailScreenProps {
    navigation: NavigationStackProp;
}

const MealDetailScreen = (props: IMealDetailScreenProps) => {
    const mealId = props.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId) || new Meal("404", [], "Meal Not Found", "", "", "", 0, [], [], false, false, false, false);
    return (
        <View style={styles.wrapper}>
            <Text>{selectedMeal.title}</Text>
            <Button
                title='Go back to Categories'
                onPress={() => {
                    props.navigation.popToTop();
                }}
            />
        </View>
    );
};

MealDetailScreen.navigationOptions = (navigationData: { navigation: NavigationStackProp }) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal ? selectedMeal.title : 'Meal Not Found'
    };
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

MealDetailScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default MealDetailScreen;
