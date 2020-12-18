import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

interface IStartGameScreenProps {

}

const StartGameScreen = (props: IStartGameScreenProps) => {
    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Start New Game</Text>
            <View style={styles.card}>
                <Text>Select a Number</Text>
                <TextInput/>
                <View style={styles.actions}>
                    <Button
                        title='Reset'
                        onPress={() => {
                        }}
                    />
                    <Button
                        title='Confirm'
                        onPress={() => {
                        }}
                    />
                </View>
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
    title: {
        fontSize: 20,
        marginVertical: 10
    },
    card: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',

    },
    actions: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
});

StartGameScreen.propTypes = {};

export default StartGameScreen;
