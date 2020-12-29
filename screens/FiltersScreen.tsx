import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, Text } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CustomHeaderButton from '../components/CustomHeaderButton/CustomHeaderButton';

interface IFiltersScreenProps {

}

const FiltersScreen = (props: IFiltersScreenProps) => {
    return (
        <View style={styles.wrapper}>
            <Text>The Filters Screen</Text>
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

FiltersScreen.propTypes = {

};

export default FiltersScreen;
