import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Button, Alert } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

interface IGameScreenProps {
    userChoice: number;
    onGameOver: (numOfRounds: number) => void;
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

const GameScreen = ({onGameOver, userChoice}: IGameScreenProps) => {
    const [currentGuess, setCurrentGuess] = useState<number>(generateRandomBetween(1, 100, userChoice));
    const [rounds, setRounds] = useState<number>(0);
    const currentLow = useRef<number>(1);
    const currentHigh = useRef<number>(100);

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = (direction: number) => {
        if (
            (direction > 0 && userChoice < currentGuess) ||
            (direction < 0 && userChoice > currentGuess)
        ) {
            Alert.alert('Don\'t lie!', 'You know this is wrong...', [
                {text: 'Sorry!', style: 'cancel'}
            ]);
            return;
        }
        if (direction > 0) {
            currentLow.current = currentGuess;
        } else {
            currentHigh.current = currentGuess;
        }
        setCurrentGuess(generateRandomBetween(currentLow.current, currentHigh.current, currentGuess));
        setRounds(curRounds => curRounds += 1);
    };

    return (
        <View style={styles.wrapper}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.btnContainer}>
                <Button
                    title='LOWER'
                    onPress={nextGuessHandler.bind(this, -1)}
                />
                <Button
                    title='Higher'
                    onPress={nextGuessHandler.bind(this, 1)}
                />
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        width: 300,
        maxWidth: '80%'
    }
});

GameScreen.propTypes = {
    userChoice: PropTypes.number.isRequired,
    onGameOver: PropTypes.func.isRequired
};

export default GameScreen;
