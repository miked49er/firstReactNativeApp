import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface IPlacesListScreenProps {

}

const PlacesListScreen = (props: IPlacesListScreenProps) => {
    return (
        <View style={styles.wrapper}>
            <Text>Places List Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {}
});

export default PlacesListScreen;
