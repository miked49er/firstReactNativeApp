import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

interface IGoal {
    id: string;
    value: string;
}

export default function App() {
    const [courseGoals, setCourseGoals] = useState<IGoal[]>([]);

    const addGoalHandler = (input: string) => {
        setCourseGoals(courseGoals => [...courseGoals, {
            id: Math.random().toString(),
            value: input
        }]);
    };

    const removeGoalHandler = (goalId: string) => {
        setCourseGoals(courseGoals => courseGoals.filter(goal => goal.id !== goalId));
    }

    return (
        <View style={styles.screen}>
            <GoalInput
                addGoalHandler={addGoalHandler}
            />
            <FlatList
                data={courseGoals}
                renderItem={itemData => (
                    <GoalItem
                        id={itemData.item.id}
                        title={itemData.item.value}
                        onDelete={removeGoalHandler}
                    />
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
