import React from 'react';
import PropTypes from 'prop-types';
import {
    ImageBackground,
    Platform,
    StyleSheet,
    Text,
    TouchableNativeFeedback,
    TouchableOpacity,
    View
} from 'react-native';
import Meal from '../../models/meal';

import Theme from '../../constants/theme';

interface IMealItemProps {
    meal: Meal;
    onSelect: () => void;
}

const MealItem = ({meal, onSelect}: IMealItemProps) => {
    let Touchable: any = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        Touchable = TouchableNativeFeedback;
    }
    return (
        <View style={styles.mealItem}>
            <Touchable
                style={styles.touchable}
                onPress={onSelect}
            >
                <View>
                    <View style={[styles.mealRow, styles.mealHeader]}>
                        <ImageBackground
                            source={{uri: meal.imageUrl}}
                            style={styles.bgImage}
                        >
                            <View style={styles.titleContainer}>
                                <Text
                                    style={styles.title}
                                    numberOfLines={1}
                                >{meal.title}</Text>
                            </View>
                        </ImageBackground>
                    </View>
                    <View style={[styles.mealRow, styles.mealDetail]}>
                        <Text>{meal.duration}m</Text>
                        <Text>{meal.complexity.toUpperCase()}</Text>
                        <Text>{meal.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </Touchable>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: Theme.accentColor,
        borderRadius: 10,
        overflow: 'hidden'
    },
    touchable: {},
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%'
    },
    mealDetail: {
        height: '15%',
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    titleContainer: {
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'OpenSans',
        fontWeight: '700',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }
});

MealItem.propTypes = {
    meal: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired
};

export default MealItem;
