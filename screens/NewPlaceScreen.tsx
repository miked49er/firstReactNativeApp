import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, ScrollView, Button } from 'react-native';
import { Colors } from '../constants/Colors';
import { useDispatch } from 'react-redux';
import { addPlace } from '../store/places-reducers';
import { useNavigation } from '@react-navigation/native';

interface INewPlaceScreenProps {

}

const NewPlaceScreen = (props: INewPlaceScreenProps) => {
    const [titleValue, setTitleValue] = useState('');
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const titleChangeHandler = (text: string) => setTitleValue(text);

    const savePlaceHandler = () => {
        dispatch(addPlace({place: {title: titleValue}}));
        navigation.navigate('Places')
    };

    return (
        <ScrollView>
            <View style={styles.form}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.textInput}
                    onChangeText={titleChangeHandler}
                    value={titleValue}
                />
                <Button
                    color={Colors.primary}
                    title='Save Place'
                    onPress={savePlaceHandler}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    form: {margin: 30},
    label: {
        fontSize: 18,
        marginBottom: 15
    },
    textInput: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        marginBottom: 15,
        paddingVertical: 4,
        paddingHorizontal: 2
    }
});

export default NewPlaceScreen;
