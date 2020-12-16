import React, { useState } from 'react';
import { StyleSheet, Button, TextInput, View, Text, ScrollView } from 'react-native';

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState<string>('');
    const [courseGoals, setCourseGoals] = useState<string[]>([]);

    const goalInputHander = (enteredText: string) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        setCourseGoals(courseGoals => [...courseGoals, enteredGoal]);
    };

    return (
        <View style={styles.screen}>
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder='Course Goal'
                    style={styles.input}
                    onChangeText={goalInputHander}
                    value={enteredGoal}
                />
                <Button
                    title='ADD'
                    onPress={addGoalHandler}
                />
            </View>
            <ScrollView>
                {courseGoals.map(goal => (
                    <View key={goal} style={styles.listItem}>
                        <Text>{goal}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    },
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
    },
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});
