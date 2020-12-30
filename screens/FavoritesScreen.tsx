import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import MealList from '../components/MealList';
import { NavigationStackProp } from 'react-navigation-stack';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton/CustomHeaderButton';
import { useSelector } from 'react-redux';
import { MealsState } from '../store/reducers/meals';
import DefaultText from '../components/DefaultText';

interface IFavoritesScreenProps {
    navigation: NavigationStackProp;
}

const FavoritesScreen = (props: IFavoritesScreenProps) => {
    let favMeals = useSelector((state: { meals: MealsState }) => state.meals.favoriteMeals);

    if (favMeals.length === 0 || !favMeals) {
        return (
            <View style={styles.wrapper}>
                <DefaultText>No favorite meals found. Start adding some!</DefaultText>
            </View>
        );
    }

    return (
        <MealList
            listData={favMeals}
            navigation={props.navigation}
        />
    );
};

FavoritesScreen.navigationOptions = (navData: { navigation: any }) => {
    return {
        headerTitle: 'Your Favorites',
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
    }
});

FavoritesScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default FavoritesScreen;
