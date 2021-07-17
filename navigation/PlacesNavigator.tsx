import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PlacesListScreen from '../screens/PlacesListScreen';
import PlaceDetailScreen from '../screens/PlaceDetailScreen';
import NewPlaceScreen from '../screens/NewPlaceScreen';
import MapScreen from '../screens/MapScreen';
import { Platform } from 'react-native';
import { Colors } from '../constants/Colors';
import HeaderButton from '../components/HeaderButton';

interface PlacesNavigation extends Record<string, Record<string, unknown> | undefined> {
    Places: undefined,
    PlaceDetails: {
        placeTitle: string,
        placeId: string
    },
    NewPlace: undefined,
    Map: undefined
}

const PlacesStack = createStackNavigator<PlacesNavigation>();

export const PlacesNavigator = () => (
    <PlacesStack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
            },
            headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
        }}
    >
        <PlacesStack.Screen
            name={'Places'}
            component={PlacesListScreen}
            options={({navigation}) => ({
                headerTitle: 'All Places',
                headerRight: () => (
                    <HeaderButton
                        action={() => {
                            navigation.navigate('NewPlace')
                        }}
                        icon={`${Platform.OS === 'android' ? 'md' : 'ios'}-add`}
                    />)
            })}
        />
        <PlacesStack.Screen
            name={'PlaceDetails'}
            component={PlaceDetailScreen}
            options={({route}) => ({
                headerTitle: route?.params?.placeTitle,
            })}
        />
        <PlacesStack.Screen
            name={'NewPlace'}
            component={NewPlaceScreen}
            options={{
                headerTitle: 'Add Place'
            }}
        />
        <PlacesStack.Screen
            name={'Map'}
            component={MapScreen}
        />
    </PlacesStack.Navigator>
);
