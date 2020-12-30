import React from 'react';
import { StyleSheet, View, Text, FlatList, ListRenderItemInfo } from 'react-native';
import { useSelector } from 'react-redux';
import { ProductState } from '../../store/reducers/products';
import Product from '../../models/Product';
import ProductList from '../../components/ProductList/ProductList';

interface IProductsOverviewScreenProps {

}

const ProductsOverviewScreen = (props: IProductsOverviewScreenProps) => {
    const productList = useSelector((state: { products: ProductState }) => state.products.availableProducts);
    return (
        <ProductList productList={productList}/>
    );
};

ProductsOverviewScreen.navigationOptions = {
    headerTitle: 'All Products'
}

const styles = StyleSheet.create({
    wrapper: {}
});

export default ProductsOverviewScreen;
