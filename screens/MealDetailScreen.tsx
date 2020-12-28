import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Button } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';

interface IMealDetailScreenProps {
    navigation: NavigationStackProp;
}

const MealDetailScreen = (props: IMealDetailScreenProps) => {
    return (
        <View style={styles.wrapper}>
            <Text>The Meal Detail Screen</Text>
            <Button
                title='Go back to Categories'
                onPress={() => {
                    props.navigation.popToTop();
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

MealDetailScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default MealDetailScreen;
