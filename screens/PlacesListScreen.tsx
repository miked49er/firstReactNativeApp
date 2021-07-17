import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import { selectPlaceList } from '../store/places-selectors';
import PlaceItem from '../components/PlaceItem';
import { useNavigation } from '@react-navigation/native';

interface IPlacesListScreenProps {

}

const PlacesListScreen = (props: IPlacesListScreenProps) => {
    const places = useSelector(selectPlaceList);
    const navigation = useNavigation();

    return (
        <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={itemData => (
                <PlaceItem
                    onSelect={() => {
                        navigation.navigate('PlaceDetails', {placeTitle: itemData.item.title, placeId: itemData.item.id});
                    }}
                    title={itemData.item.title}
                    address={''}
                    image={''}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    wrapper: {}
});

export default PlacesListScreen;
