import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Button, Image } from 'react-native';
import BodyText from '../components/BodyText';
import HeaderText from '../components/HeaderText';
import Theme from '../constants/theme';

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
                    // source={{uri: 'https://cdn.pixabay.com/photo/2016/11/08/05/20/adventure-1807524_960_720.jpg'}}
                    style={styles.image}
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>Your phone needed <Text style={styles.highlight}>{roundsNum}</Text> rounds to guess the
                    number <Text style={styles.highlight}>{userNumber}</Text>.</BodyText>
            </View>
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
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 15
    },
    highlight: {
        color: Theme.primary,
        fontFamily: 'OpenSans',
        fontWeight: '700',
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
});

GameOverScreen.propTypes = {
    roundsNum: PropTypes.number.isRequired,
    userNumber: PropTypes.number.isRequired,
    onRestart: PropTypes.func.isRequired
};

export default GameOverScreen;
