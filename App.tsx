import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';

interface IGoal {
    key: string;
    value: string;
}

export default function App() {
    const [enteredGoal, setEnteredGoal] = useState<string>('');
    const [courseGoals, setCourseGoals] = useState<IGoal[]>([]);

    const goalInputHander = (enteredText: string) => {
        setEnteredGoal(enteredText);
    };

    const addGoalHandler = () => {
        setCourseGoals(courseGoals => [...courseGoals, {
            key: Math.random().toString(),
            value: enteredGoal
        }]);
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
            <FlatList
                data={courseGoals}
                renderItem={itemData => (
                    <View style={styles.listItem}>
                        <Text>{itemData.item.value}</Text>
                    </View>
                )}
            />
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
