import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, TouchableOpacity, Platform, TouchableNativeFeedback } from 'react-native';
import { OpenSans_700Bold } from '@expo-google-fonts/open-sans';

interface ICategoryGridTitleProps {
    title: string;
    onSelect: () => void;
    color: string;
}

const CategoryGridTile = ({onSelect, title, color}: ICategoryGridTitleProps) => {
    let Touchable: any = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        Touchable = TouchableNativeFeedback;
    }
    return (
        <View style={styles.gridItem}>
            <Touchable
                style={styles.touchable}
                onPress={onSelect}
            >
                <View style={[styles.container, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Touchable>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        elevation: 5,
        overflow: Platform.OS === 'android' && Platform.Version >= 21 ? 'hidden' : 'visible'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 10,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        textAlign: 'right'
    },
    touchable: {
        flex: 1
    }
});

CategoryGridTile.propTypes = {
    title: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    color: PropTypes.string.isRequired
};

export default CategoryGridTile;
