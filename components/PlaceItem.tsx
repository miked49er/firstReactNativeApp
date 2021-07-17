import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import { Colors } from '../constants/Colors';

interface IPlaceItemProps {
    address: string;
    title: string;
    image: string;
    onSelect: () => void;
}

const PlaceItem = ({address, image, onSelect, title}: IPlaceItemProps) => {
    return (
        <TouchableOpacity onPress={onSelect} style={styles.placeItem}>
            <Image style={styles.image} source={{uri: image !== '' ? image : undefined}}/>
            <View style={styles.infoContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.address}>{address}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    placeItem: {
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingVertical: 15,
        paddingHorizontal: 30,
        flexDirection: 'row',
        alignItems: 'center'
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: 'blue',
        borderColor: Colors.primary,
        borderWidth: 1
    },
    infoContainer: {
        marginLeft: 25,
        width: 250,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    title: {
        color: 'black',
        fontSize: 18,
        marginBottom: 5
    },
    address: {
        color: '#666',
        fontSize: 16
    },
});

export default PlaceItem;
