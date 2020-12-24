import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

interface IFiltersScreenProps {

}

const FiltersScreen = (props: IFiltersScreenProps) => {
    return (
        <View style={styles.wrapper}>
            <Text>The Filters Screen</Text>
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

FiltersScreen.propTypes = {

};

export default FiltersScreen;
