import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { OpenSans_400Regular, OpenSans_700Bold, useFonts } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
    const [userNumber, setUserNumber] = useState<number>();
    const [guessRounds, setGuessRounds] = useState<number>(0);
    let [loaded, error] = useFonts({
        OpenSans_400Regular,
        OpenSans_700Bold
    });

    if (!loaded) {
        return <AppLoading/>;
    }
    if (error) {
        console.error(error);
    }

    const startGameHandler = (selectedNumber: number) => {
        setUserNumber(selectedNumber);
        setGuessRounds(0);
    };

    const gameOverHandler = (numOfRounds: number) => {
        setGuessRounds(numOfRounds);
    };

    const configureNewGameHandler = () => {
        setGuessRounds(0);
        setUserNumber(undefined);
    };

    let content = <StartGameScreen onStartGame={startGameHandler}/>;

    if (userNumber && guessRounds <= 0) {
        content = <GameScreen
            userChoice={userNumber}
            onGameOver={gameOverHandler}
        />;
    } else if (userNumber && guessRounds > 0) {
        content = <GameOverScreen
            roundsNum={guessRounds}
            userNumber={userNumber}
            onRestart={configureNewGameHandler}
        />;
    }

    return (
        <SafeAreaView style={styles.screen}>
            <Header title="Guess a Number"/>
            {content}
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});
