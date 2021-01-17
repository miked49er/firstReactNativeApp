import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface IEditProductScreenProps {

}

const EditProductScreen = (props: IEditProductScreenProps) => {
    return (
        <View style={styles.wrapper}>
            <Text>The Edit Screen</Text>
        </View>
    );
};

EditProductScreen.navigationOptions = (navData: {navigation: any}) => {
    return {
        headerTitle: `Edit `
    };
};

const styles = StyleSheet.create({
    wrapper: {}
});

export default EditProductScreen;
