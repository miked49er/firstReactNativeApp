import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text, Switch, Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton/CustomHeaderButton';

import Theme from '../constants/theme';
import { NavigationStackProp } from 'react-navigation-stack';

interface IFiltersScreenProps {
    navigation: NavigationStackProp;
}

interface IFilterSwitchProps {
    state: boolean;
    onChange: (value: boolean) => void;
    label: string;
}

const FilterSwitch = (props: IFilterSwitchProps) => {
    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch
                trackColor={{
                    true: Theme.primaryColor,
                    false: ''
                }}
                thumbColor={Platform.OS === 'android' ? Theme.primaryColor : '#ccc'}
                value={props.state}
                onValueChange={props.onChange}
            />
        </View>
    );
};

export interface AppliedFilters {
    glutenFree: boolean;
    lactoseFree: boolean;
    vegan: boolean;
    vegetarian: boolean;
}

const FiltersScreen = ({navigation}: IFiltersScreenProps) => {
    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilters = useCallback(() => {
        const appliedFilters: AppliedFilters = {
            glutenFree: isGlutenFree,
            lactoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };
        console.log(appliedFilters);
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

    useEffect(() => {
        navigation.setParams({save: saveFilters});
    }, [saveFilters]);

    return (
        <View style={styles.wrapper}>
            <Text style={styles.title}>Available Filters / Restrictions</Text>
            <FilterSwitch
                label='Gluten-Free'
                state={isGlutenFree}
                onChange={(newValue: boolean) => setIsGlutenFree(newValue)}
            />
            <FilterSwitch
                label='Lactose-Free'
                state={isLactoseFree}
                onChange={(newValue: boolean) => setIsLactoseFree(newValue)}
            />
            <FilterSwitch
                label='Vegan'
                state={isVegan}
                onChange={(newValue: boolean) => setIsVegan(newValue)}
            />
            <FilterSwitch
                label='Vegetarian'
                state={isVegetarian}
                onChange={(newValue: boolean) => setIsVegetarian(newValue)}
            />
        </View>
    );
};

FiltersScreen.navigationOptions = (navData: { navigation: any }) => {
    return {
        headerTitle: 'Filter Meals',
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
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
                <Item
                    title='Menu'
                    iconName='ios-save'
                    onPress={navData.navigation.getParam('save')}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        margin: 20,
        textAlign: 'center'
    },
    filterContainer: {
        width: '80%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
});

FiltersScreen.propTypes = {
    navigation: PropTypes.object.isRequired
};

export default FiltersScreen;
