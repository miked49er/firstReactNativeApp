import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Button } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';

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
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.btnContainer}>
                <Button
                    title='LOWER'
                    onPress={() => {}}
                />
                <Button
                    title='Higher'
                    onPress={() => {}}
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
    userChoice: PropTypes.number.isRequired
};

export default GameScreen;
