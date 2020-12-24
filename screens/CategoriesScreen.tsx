import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

interface ICategoriesScreenProps {

}

const CategoriesScreen = (props: ICategoriesScreenProps) => {
    return (
        <View style={styles.wrapper}>
            <Text>The Categories Screen</Text>
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

};

export default CategoriesScreen;
