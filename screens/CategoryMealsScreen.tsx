import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

interface ICategoryMealsScreenProps {

}

const CategoryMealsScreen = (props: ICategoryMealsScreenProps) => {
    return (
        <View style={styles.wrapper}>
            <Text>The Category Meal Screen</Text>
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

};

export default CategoryMealsScreen;
