import React from 'react';
import PropTypes from 'prop-types';
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import BodyText from '../components/BodyText';
import HeaderText from '../components/HeaderText';
import Theme from '../constants/theme';
import MainButton from '../components/MainButton/MainButton';

interface IGameOverScreenProps {
    roundsNum: number;
    userNumber: number;
    onRestart: () => void;
}

const GameOverScreen = ({roundsNum, userNumber, onRestart}: IGameOverScreenProps) => {
    return (
        <ScrollView>
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
                    <BodyText style={styles.resultText}>Your phone needed
                        <Text style={styles.highlight}>{roundsNum}</Text> rounds to guess the
                        number <Text style={styles.highlight}>{userNumber}</Text>.</BodyText>
                </View>
                <MainButton onPress={onRestart}>NEW GAME</MainButton>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10
    },
    imageContainer: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        margin: Dimensions.get('window').height / 30
    },
    image: {
        width: '100%',
        height: '100%'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').height / 60
    },
    highlight: {
        color: Theme.primary,
        fontFamily: 'OpenSans',
        fontWeight: '700',
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    }
});

GameOverScreen.propTypes = {
    roundsNum: PropTypes.number.isRequired,
    userNumber: PropTypes.number.isRequired,
    onRestart: PropTypes.func.isRequired
};

export default GameOverScreen;
