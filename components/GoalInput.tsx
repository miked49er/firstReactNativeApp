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
                <View style={styles.actions}>
                    <View style={styles.button}>
                        <Button
                            title='Cancel'
                            color='red'
                            onPress={props.onCancel}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            title='ADD'
                            onPress={addGoalHandler}
                        />
                    </View>
                </View>
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
    },
    actions: {
        flexDirection: 'row',
        width: '60%',
        justifyContent: 'space-between'
    },
    button: {
        width: 100
    }
});

export default GoalInput;
