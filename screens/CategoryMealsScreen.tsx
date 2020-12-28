import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Button, Platform } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import { NavigationParams, NavigationScreenProp, NavigationState } from 'react-navigation';
import Theme from '../constants/theme';

interface ICategoryMealsScreenProps {
    navigation: NavigationStackProp;
}

const CategoryMealsScreen = (props: ICategoryMealsScreenProps) => {
    const catId: string = props.navigation.getParam('categoryId');

    const selectedCategory: Category = CATEGORIES.find(cat => cat.id === catId) || new Category('undefined', 'Category Not Found', '#ccc');

    return (
        <View style={styles.wrapper}>
            <Text>The Category Meal Screen</Text>
            <Text>{selectedCategory.title}</Text>
            <Button
                title='Go to Details'
                onPress={() => {
                    props.navigation.navigate({routeName: 'MealDetail'});
                }}
            />
            <Button
                title='Go Back'
                onPress={() => {
                    props.navigation.pop();
                }}
            />
        </View>
    );
};

CategoryMealsScreen.navigationOptions = (navigationData: {navigation: NavigationStackProp}) => {
    const catId: string = navigationData.navigation.getParam('categoryId');
    const selectedCategory: Category = CATEGORIES.find(cat => cat.id === catId) || new Category('undefined', 'Category Not Found', '#ccc');

    return {
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Theme.primaryColor : ''
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Theme.primaryColor
    }
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

CategoryMealsScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default CategoryMealsScreen;
