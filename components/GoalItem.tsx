import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface IGoalItem {
    id: string;
    title: string;
    onDelete: (goalId: string) => void;
}

const GoalItem = (props: IGoalItem) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={props.onDelete.bind(this, props.id)}
        >
            <View style={styles.listItem}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        marginVertical: 10,
        backgroundColor: '#ccc',
        borderColor: 'black',
        borderWidth: 1
    }
});

export default GoalItem;
