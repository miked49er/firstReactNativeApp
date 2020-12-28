import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import PropTypes from 'prop-types';

interface ICategoriesScreenProps {
    navigation: NavigationStackProp;
}

const CategoriesScreen = (props: ICategoriesScreenProps) => {
    return (
        <View style={styles.wrapper}>
            <Text>The Categories Screen</Text>
            <Button
                title='Go to Meal!'
                onPress={() => {
                    props.navigation.navigate({routeName: 'CategoryMeals'})
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

CategoriesScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default CategoriesScreen;
