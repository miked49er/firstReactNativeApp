import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';

interface IGameOverScreenProps {

}

const GameOverScreen = (props: IGameOverScreenProps) => {
    return (
        <View style={styles.wrapper}>
            <Text>The Game is Over</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

GameOverScreen.propTypes = {

};

export default GameOverScreen;
