import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Button } from 'react-native';

interface IGameOverScreenProps {
    roundsNum: number;
    userNumber: number;
    onRestart: () => void;
}

const GameOverScreen = ({roundsNum, userNumber, onRestart}: IGameOverScreenProps) => {
    return (
        <View style={styles.wrapper}>
            <Text>The Game is Over</Text>
            <Text>Number of rounds: {roundsNum}</Text>
            <Text>Number was: {userNumber}</Text>
            <Button
                title='NEW GAME'
                onPress={onRestart}
            />
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
    roundsNum: PropTypes.number.isRequired,
    userNumber: PropTypes.number.isRequired,
    onRestart: PropTypes.func.isRequired
};

export default GameOverScreen;
