import React from 'react';
import PropTypes from 'prop-types';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { MEALS } from '../data/dummy-data';
import Meal from '../models/meal';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton/CustomHeaderButton';
import DefaultText from '../components/DefaultText';
import { useSelector } from 'react-redux';
import { MealsState } from '../store/reducers/meals';

interface IMealDetailScreenProps {
    navigation: NavigationStackProp;
}

interface ListItemParams {
    children?: React.ReactNode;
}

const ListItem = (props: ListItemParams) => {
    return <View style={styles.listItem}><DefaultText>{props.children}</DefaultText></View>
}

const MealDetailScreen = (props: IMealDetailScreenProps) => {
    const mealId = props.navigation.getParam('mealId');
    let availableMeals = useSelector((state: { meals: MealsState }) => state.meals.meals);
    const selectedMeal = availableMeals.find(meal => meal.id === mealId) || new Meal('404', [], 'Meal Not Found', '', '', '', 0, [], [], false, false, false, false);
    return (
        <ScrollView>
            <Image
                style={styles.image}
                source={{uri: selectedMeal.imageUrl}}
            />
            <View style={[styles.details]}>
                <DefaultText>{selectedMeal.duration}m</DefaultText>
                <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
                <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
            </View>
            <DefaultText style={styles.title}>Ingredients</DefaultText>
            {
                selectedMeal.ingredient.map(ingredient => <ListItem>{ingredient}</ListItem>)
            }
            <DefaultText style={styles.title}>Steps</DefaultText>
            {
                selectedMeal.steps.map(step => <ListItem>{step}</ListItem>)
            }
        </ScrollView>
    );
};

MealDetailScreen.navigationOptions = (navigationData: { navigation: NavigationStackProp }) => {
    const mealId = navigationData.navigation.getParam('mealId');
    const selectedMeal = MEALS.find(meal => meal.id === mealId);
    return {
        headerTitle: selectedMeal ? selectedMeal.title : 'Meal Not Found',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Favorite'
                    iconName='ios-star'
                    onPress={() => {
                    }}
                />
            </HeaderButtons>
        )
    };
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'center'
    },
    details: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: 'space-around'
    },
    image: {
        width: '100%',
        height: 200
    },
    listItem: {
        marginVertical: 10,
        marginHorizontal: 20,
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 10
    }
});

MealDetailScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default MealDetailScreen;
