import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

interface IFavoritesScreenProps {

}

const FavoritesScreen = (props: IFavoritesScreenProps) => {
    return (
        <View style={styles.wrapper}>
            <Text>The Favorites Screen</Text>
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

FavoritesScreen.propTypes = {

};

export default FavoritesScreen;
