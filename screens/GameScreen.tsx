import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, Button, FlatList, ListRenderItemInfo, ScrollView, StyleSheet, View } from 'react-native';
import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';
import { MaterialIcons } from '@expo/vector-icons';

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

// const renderListItem = (value: number, numOfRound: number) => (
//     <View style={styles.listItem} key={value}>
//         <BodyText>#{numOfRound}</BodyText>
//         <BodyText>{value}</BodyText>
//     </View>
// );
const renderListItem = (listLength: number, itemData: ListRenderItemInfo<number>) => (
    <View style={styles.listItem}>
        <BodyText>#{listLength - itemData.index}</BodyText>
        <BodyText>{itemData.item}</BodyText>
    </View>
);

const GameScreen = ({onGameOver, userChoice}: IGameScreenProps) => {
    let initialGuess = generateRandomBetween(1, 100, userChoice);
    const [currentGuess, setCurrentGuess] = useState<number>(initialGuess);
    const [pastGuesses, setPastGuesses] = useState<number[]>([initialGuess]);
    const currentLow = useRef<number>(1);
    const currentHigh = useRef<number>(100);

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(pastGuesses.length);
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
            currentLow.current = currentGuess + 1;
        } else {
            currentHigh.current = currentGuess;
        }
        let nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setPastGuesses(curPastGuesses => [nextNumber, ...curPastGuesses]);
    };

    return (
        <View style={styles.wrapper}>
            <BodyText>Opponent's Guess</BodyText>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.btnContainer}>
                <MainButton onPress={nextGuessHandler.bind(this, -1)}>
                    <MaterialIcons
                        name='remove'
                        size={24}
                        color='white'
                    />
                </MainButton>
                <MainButton onPress={nextGuessHandler.bind(this, 1)}>
                    <MaterialIcons
                        name='add'
                        size={24}
                        color='white'
                    />
                </MainButton>
            </Card>
            <View style={styles.listContainer}>
                {/*<ScrollView contentContainerStyle={styles.list}>*/}
                {/*    {pastGuesses.map((guess: number, i: number) => (*/}
                {/*        renderListItem(guess, pastGuesses.length - i)*/}
                {/*    ))}*/}
                {/*</ScrollView>*/}
                <FlatList
                    keyExtractor={(item: number) => `${item}`}
                    data={pastGuesses} renderItem={renderListItem.bind(this, pastGuesses.length)}
                    contentContainerStyle={styles.list}
                />
            </View>
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
        width: 400,
        maxWidth: '90%'
    },
    listItem: {
        borderColor: '#ccc',
        borderWidth: 1,
        padding: 15,
        marginVertical: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%'
    },
    listContainer: {
        flex: 1,
        width: '60%'
    },
    list: {
        // alignItems: 'center',
        justifyContent: 'flex-end',
        flexGrow: 1
    },
});

GameScreen.propTypes = {
    userChoice: PropTypes.number.isRequired,
    onGameOver: PropTypes.func.isRequired
};

export default GameScreen;
