import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

interface ICategoryMealsScreenProps {
    navigation: NavigationStackProp;
}

const CategoryMealsScreen = (props: ICategoryMealsScreenProps) => {
    return (
        <View style={styles.wrapper}>
            <Text>The Category Meal Screen</Text>
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
