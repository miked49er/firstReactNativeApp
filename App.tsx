import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { useFonts, OpenSans_400Regular, OpenSans_700Bold } from '@expo-google-fonts/open-sans';
import AppLoading from 'expo-app-loading';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {
    const [userNumber, setUserNumber] = useState<number>();
    const [guessRounds, setGuessRounds] = useState<number>(0);
    // let [loaded, error] = useFonts({
    //     'open-sans': OpenSans_400Regular,
    //     'open-sans-bold': OpenSans_700Bold
    // });
    let [loaded, error] = useFonts({
        OpenSans_400Regular,
        OpenSans_700Bold
    });

    if (!loaded) {
        return <AppLoading />;
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
        <View style={styles.screen}>
            <Header title="Guess a Number"/>
            {content}
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
});
