import React from 'react';
import { StyleSheet, View, Text, FlatList, ListRenderItemInfo } from 'react-native';
import { useSelector } from 'react-redux';
import { ProductState } from '../../store/reducers/products';
import Product from '../../models/Product';
import ProductList from '../../components/ProductList/ProductList';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';

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

ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

const styles = StyleSheet.create({
    wrapper: {}
});

export default ProductsOverviewScreen;
