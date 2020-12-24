import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
    Alert,
    Button,
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
    Dimensions,
    ScrollView, KeyboardAvoidingView
} from 'react-native';
import Card from '../components/Card';
import Theme from '../constants/theme';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';
import BodyText from '../components/BodyText';
import MainButton from '../components/MainButton';

interface IStartGameScreenProps {
    onStartGame: Function;
}

const StartGameScreen = (props: IStartGameScreenProps) => {
    const [enteredValue, setEnteredValue] = useState<string>('');
    const [confirmed, setConfirmed] = useState<boolean>(false);
    const [selectedNumber, setSelectedNumber] = useState<number>();
    const [buttonWidth, setButtonWidth] = useState<number>(Dimensions.get('window').width / 4);

    useEffect(() => {
        const updateLayout = () => {
            setButtonWidth(Dimensions.get('window').width / 4);
        }

        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        }
    })

    const numberInputHandler = (input: string) => {
        setEnteredValue(input.replace(/[^0-9]/g, ''));
    };

    const resetInputHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmInputHandler = () => {
        const chosenNumber: number = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number', 'Number has to be a number between 1 and 99.', [{
                text: 'Okay',
                style: 'destructive',
                onPress: resetInputHandler
            }]);
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue('');
        Keyboard.dismiss();
    };

    let confirmedOutput: JSX.Element = <></>;

    if (confirmed) {
        confirmedOutput = (
            <Card style={styles.summaryContainer}>
                <Text>You Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <MainButton onPress={props.onStartGame.bind(this, selectedNumber)}>START GAME</MainButton>
            </Card>
        );
    }

    return (
        <ScrollView>
            <KeyboardAvoidingView
                behavior="position"
                keyboardVerticalOffset={30}
            >
                <TouchableWithoutFeedback
                    onPress={() => {
                        Keyboard.dismiss();
                    }}
                >
                    <View style={styles.wrapper}>
                        <Text style={styles.title}>Start New Game</Text>
                        <Card style={styles.card}>
                            <BodyText>Select a Number</BodyText>
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
                                <View style={{width: buttonWidth}}>
                                    <Button
                                        color={Theme.accent}
                                        title='Reset'
                                        onPress={resetInputHandler}
                                    />
                                </View>
                                <View style={{width: buttonWidth}}>
                                    <Button
                                        color={Theme.primary}
                                        title='Confirm'
                                        onPress={confirmInputHandler}
                                    />
                                </View>
                            </View>
                        </Card>
                        {confirmedOutput}
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        </ScrollView>
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
        marginVertical: 10,
        fontFamily: 'OpenSans',
        fontWeight: '700'
    },
    card: {
        width: '80%',
        minWidth: 300,
        maxWidth: '95%',
        alignItems: 'center',
    },
    actions: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    // button: {
    //     width: Dimensions.get('window').width / 4
    // },
    input: {
        width: 50,
        textAlign: 'center'
    },
    summaryContainer: {
        margin: 20,
        alignItems: 'center'
    }
});

StartGameScreen.propTypes = {
    onStartGame: PropTypes.func
};

export default StartGameScreen;
