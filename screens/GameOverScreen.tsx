import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Button } from 'react-native';
import BodyText from '../components/BodyText';

interface IGameOverScreenProps {
    roundsNum: number;
    userNumber: number;
    onRestart: () => void;
}

const GameOverScreen = ({roundsNum, userNumber, onRestart}: IGameOverScreenProps) => {
    return (
        <View style={styles.wrapper}>
            <BodyText>The Game is Over</BodyText>
            <BodyText>Number of rounds: {roundsNum}</BodyText>
            <BodyText>Number was: {userNumber}</BodyText>
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
