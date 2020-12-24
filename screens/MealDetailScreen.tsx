import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

interface IMealDetailScreenProps {

}

const MealDetailScreen = (props: IMealDetailScreenProps) => {
    return (
        <View style={styles.wrapper}>
            <Text>The Meal Detail Screen</Text>
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

};

export default MealDetailScreen;
