import React from 'react';
import { StyleSheet, View, Text, FlatList, ListRenderItemInfo, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { ProductState } from '../../store/reducers/products';
import Product from '../../models/Product';
import ProductList from '../../components/ProductList/ProductList';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ShopHeaderButton from '../../components/ShopHeaderButton/ShopHeaderButton';

interface IProductsOverviewScreenProps {
    navigation: StackNavigationProp;
}

const ProductsOverviewScreen = (props: IProductsOverviewScreenProps) => {
    const productList = useSelector((state: { products: ProductState }) => state.products.availableProducts);
    return (
        <ProductList
            productList={productList}
            navigation={props.navigation}
        />
    );
};

ProductsOverviewScreen.navigationOptions = (navData: { navigation: any }) => {
    return {
        headerTitle: 'All Products',
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
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={ShopHeaderButton}>
                <Item
                    title='Cart'
                    iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                    onPress={() => {
                        navData.navigation.navigate('Cart');
                    }}
                />
            </HeaderButtons>
        )
    };
}

const styles = StyleSheet.create({
    wrapper: {}
});

export default ProductsOverviewScreen;
