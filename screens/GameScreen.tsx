import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

interface IGameScreenProps {
    userChoice: number;
}

const generateRandomBetween = (min: number, max: number, exclude: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = (props: IGameScreenProps) => {
    const [currentGuess, setCurrentGuess] = useState<number>(generateRandomBetween(1, 100, props.userChoice));
    return (
        <View style={styles.wrapper}>

        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {}
});

GameScreen.propTypes = {
    userChoice: PropTypes.number.isRequired
};

export default GameScreen;
