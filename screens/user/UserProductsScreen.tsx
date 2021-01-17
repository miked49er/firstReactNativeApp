import React from 'react';
import { StyleSheet, View, Text, FlatList, Platform, Button } from 'react-native';
import { ProductState } from '../../store/reducers/products';
import { useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem/ProductItem';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ShopHeaderButton from '../../components/ShopHeaderButton/ShopHeaderButton';
import Theme from '../../constants/Theme';
import { addToCart } from '../../store/actions/cart';

interface IUserProductsScreenProps {

}

const UserProductsScreen = (props: IUserProductsScreenProps) => {
    const userProducts = useSelector(({products}: { products: ProductState }) => products.userProducts)
    return (
        <FlatList
            data={userProducts}
            renderItem={itemData => (
                <ProductItem
                    product={itemData.item}
                    onSelect={() => {

                    }}
                >
                    <Button
                        title='Edit'
                        color={Theme.primary}
                        onPress={() => {
                        }}
                    />
                    <Button
                        title='Delete'
                        color={Theme.primary}
                        onPress={() => {
                        }}
                    />
                </ProductItem>
            )}
        />
    );
};

UserProductsScreen.navigationOptions = (navData: { navigation: any }) => {
    return {
        headerTitle: 'Your Products',
        headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={ShopHeaderButton}>
                <Item
                    title='Menu'
                    iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                    onPress={() => {
                        navData.navigation.toggleDrawer();
                    }}
                />
            </HeaderButtons>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {}
});

export default UserProductsScreen;
