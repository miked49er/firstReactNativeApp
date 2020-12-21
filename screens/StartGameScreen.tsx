import React, { useState } from 'react';
import { Button, Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';
import Card from '../components/Card';
import Theme from '../constants/theme';
import Input from '../components/Input';

interface IStartGameScreenProps {

}

const StartGameScreen = (props: IStartGameScreenProps) => {
    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = (input: string) => {
        setEnteredValue(input.replace(/[^0-9]/g, ''));
    }

    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Start New Game</Text>
                <Card style={styles.card}>
                    <Text>Select a Number</Text>
                    <Input
                        style={styles.input}
                        blurOnSubmit
                        autoCapitalize='none'
                        keyboardType='number-pad'
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                    />
                    <View style={styles.actions}>
                        <View style={styles.button}>
                            <Button
                                color={Theme.accent}
                                title='Reset'
                                onPress={() => {
                                }}
                            />
                        </View>
                        <View style={styles.button}>
                            <Button
                                color={Theme.primary}
                                title='Confirm'
                                onPress={() => {
                                }}
                            />
                        </View>
                    </View>
                </Card>
            </View>
        </TouchableWithoutFeedback>
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
    button: {
        width: 100
    },
    input: {
        width: 50,
        textAlign: 'center'
    }
});

StartGameScreen.propTypes = {};

export default StartGameScreen;
