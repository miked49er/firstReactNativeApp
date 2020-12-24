import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Alert, Dimensions, FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
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
    const [availableDeviceWidth, setAvailableDeviceWidth] = useState<number>(Dimensions.get('window').width);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState<number>(Dimensions.get('window').height);
    const currentLow = useRef<number>(1);
    const currentHigh = useRef<number>(100);

    useEffect(() => {
        const updateLayout = () => {
            setAvailableDeviceWidth(Dimensions.get('window').width);
            setAvailableDeviceHeight(Dimensions.get('window').height);
        };

        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        }
    });

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

    let listContainerStyle = styles.listContainer;

    if (availableDeviceWidth <= 350) {
        listContainerStyle = styles.listContainerBig;
    }

    if (availableDeviceHeight < 500) {
        return (
            <View style={styles.wrapper}>
                <BodyText>Opponent's Guess</BodyText>
                <View style={styles.controls}>
                    <MainButton onPress={nextGuessHandler.bind(this, -1)}>
                        <MaterialIcons
                            name='remove'
                            size={24}
                            color='white'
                        />
                    </MainButton>
                    <NumberContainer>{currentGuess}</NumberContainer>
                    <MainButton onPress={nextGuessHandler.bind(this, 1)}>
                        <MaterialIcons
                            name='add'
                            size={24}
                            color='white'
                        />
                    </MainButton>
                </View>
                <View style={listContainerStyle}>
                    <FlatList
                        keyExtractor={(item: number) => `${item}`}
                        data={pastGuesses} renderItem={renderListItem.bind(this, pastGuesses.length)}
                        contentContainerStyle={styles.list}
                    />
                </View>
            </View>
        );
    }

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
            <View style={listContainerStyle}>
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
        marginTop: Dimensions.get('window').height > 600 ? 20 : 5,
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
    listContainerBig: {
        flex: 1,
        width: '80%'
    },
    list: {
        // alignItems: 'center',
        justifyContent: 'flex-end',
        flexGrow: 1
    },
    controls: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '80%'
    }
});

GameScreen.propTypes = {
    userChoice: PropTypes.number.isRequired,
    onGameOver: PropTypes.func.isRequired
};

export default GameScreen;
