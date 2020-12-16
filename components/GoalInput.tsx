import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

interface IGoalInput {
    addGoalHandler: (input: string) => void;
}

const GoalInput = (props: IGoalInput) => {
    const [enteredGoal, setEnteredGoal] = useState<string>('');

    const goalInputHander = (enteredText: string) => {
        setEnteredGoal(enteredText);
    };

    return (
        <View style={styles.inputContainer}>
            <TextInput
                placeholder='Course Goal'
                style={styles.input}
                onChangeText={goalInputHander}
                value={enteredGoal}
            />
            <Button
                title='ADD'
                onPress={props.addGoalHandler.bind(this, enteredGoal)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10
    }
});

export default GoalInput;
