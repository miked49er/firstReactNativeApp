import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Modal } from 'react-native';

interface IGoalInput {
    addGoalHandler: (input: string) => void;
    onCancel: () => void;
    visible: boolean;
}

const GoalInput = (props: IGoalInput) => {
    const [enteredGoal, setEnteredGoal] = useState<string>('');

    const goalInputHander = (enteredText: string) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        props.addGoalHandler(enteredGoal);
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Course Goal'
                    style={styles.input}
                    onChangeText={goalInputHander}
                    value={enteredGoal}
                />
                <Button
                    title='Cancel'
                    color='red'
                    onPress={props.onCancel}
                />
                <Button
                    title='ADD'
                    onPress={addGoalHandler}
                />
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        marginBottom: 10
    }
});

export default GoalInput;
