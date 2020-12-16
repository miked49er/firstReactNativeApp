import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

interface IGoal {
    key: string;
    value: string;
}

export default function App() {
    const [courseGoals, setCourseGoals] = useState<IGoal[]>([]);

    const addGoalHandler = (input: string) => {
        setCourseGoals(courseGoals => [...courseGoals, {
            key: Math.random().toString(),
            value: input
        }]);
    };

    return (
        <View style={styles.screen}>
            <GoalInput
                addGoalHandler={addGoalHandler}
            />
            <FlatList
                data={courseGoals}
                renderItem={itemData => (
                    <GoalItem title={itemData.item.value}/>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    }
});
