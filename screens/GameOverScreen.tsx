import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import HeaderText from '../components/HeaderText';

interface IGameOverScreenProps {
    roundsNum: number;
    userNumber: number;
    onRestart: () => void;
}

const GameOverScreen = ({roundsNum, userNumber, onRestart}: IGameOverScreenProps) => {
    return (
        <View style={styles.wrapper}>
            <HeaderText>The Game is Over</HeaderText>
            <View style={styles.imageContainer}>
                <Image
                    source={require('../assets/success.png')}
                    style={styles.image}
                />
            </View>
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
    },
    imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        margin: 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
});

GameOverScreen.propTypes = {
    roundsNum: PropTypes.number.isRequired,
    userNumber: PropTypes.number.isRequired,
    onRestart: PropTypes.func.isRequired
};

export default GameOverScreen;
