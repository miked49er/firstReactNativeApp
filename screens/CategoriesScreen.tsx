import React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import { NavigationStackProp } from 'react-navigation-stack';
import PropTypes from 'prop-types';
import { CATEGORIES } from '../data/dummy-data';
import Category from '../models/category';
import CategoryGridTile from '../components/CategoryGridTile/CategoryGridTile';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton/CustomHeaderButton';

interface ICategoriesScreenProps {
    navigation: NavigationStackProp;
}

const CategoriesScreen = (props: ICategoriesScreenProps) => {

    const renderGridItem = (itemData: ListRenderItemInfo<Category>) => {
        return (
            <CategoryGridTile
                title={itemData.item.title}
                color={itemData.item.color}
                onSelect={() => {
                    props.navigation.navigate({
                        routeName: 'CategoryMeals', params: {
                            categoryId: itemData.item.id
                        }
                    })
                }}
            />
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

CategoriesScreen.navigationOptions = (navData: { navigation: any }) => {
    return {
        headerTitle: 'Meal Categories',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Menu'
                    iconName='ios-menu'
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

CategoriesScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default CategoriesScreen;
