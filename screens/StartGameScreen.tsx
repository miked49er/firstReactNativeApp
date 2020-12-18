import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

interface IStartGameScreenProps {

}

const StartGameScreen = (props: IStartGameScreenProps) => {
    return (
        <View style={styles.wrapper}>
            <Text>The Game Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }
});

StartGameScreen.propTypes = {

};

export default StartGameScreen;
