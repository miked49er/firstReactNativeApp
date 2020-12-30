import React, { useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { MEALS } from '../data/dummy-data';
import Meal from '../models/meal';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton/CustomHeaderButton';
import DefaultText from '../components/DefaultText';
import { useDispatch, useSelector } from 'react-redux';
import { MealsState } from '../store/reducers/meals';
import { toggleFavorite } from '../store/actions/meals';

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
    const {
        favoriteMeals,
        meals: availableMeals
    }: MealsState = useSelector(({meals}: { meals: MealsState }) => meals);
    const isFavorite = favoriteMeals.some(meal => meal.id === mealId);
    const selectedMeal = availableMeals.find(meal => meal.id === mealId) || new Meal('404', [], 'Meal Not Found', '', '', '', 0, [], [], false, false, false, false);

    const dispatch = useDispatch();
    const toggleFavorteHandler = useCallback(() => {
        dispatch(toggleFavorite(mealId))
    }, [dispatch, mealId]);

    useEffect(() => {
        props.navigation.setParams({toggleFav: toggleFavorteHandler});
    }, [toggleFavorteHandler]);

    useEffect(() => {
        props.navigation.setParams({isFav: isFavorite});
    }, [isFavorite]);

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
    const mealTitle = navigationData.navigation.getParam('mealTitle');
    const toggleFavorite = navigationData.navigation.getParam('toggleFav');
    const isFav = navigationData.navigation.getParam('isFav');
    return {
        headerTitle: mealTitle || 'Meal Not Found',
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Favorite'
                    iconName={isFav ? 'ios-star' : 'ios-star-outline'}
                    onPress={toggleFavorite}
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
