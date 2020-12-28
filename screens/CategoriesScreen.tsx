import React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import PropTypes from 'prop-types';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';

interface ICategoriesScreenProps {
    navigation: NavigationStackProp;
}

const CategoriesScreen = (props: ICategoriesScreenProps) => {

    const renderGridItem = (itemData: ListRenderItemInfo<Category>) => {
        return (
            <TouchableOpacity
                style={styles.gridItem}
                onPress={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals', params: {
                            categoryId: itemData.item.id
                        }
                    })
                }}
            >
                <View>
                    <Text>{itemData.item.title}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    return (
        <FlatList
            numColumns={2}
            data={CATEGORIES}
            renderItem={renderGridItem}
        />
    );
};

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150
    }
});

CategoriesScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default CategoriesScreen;
