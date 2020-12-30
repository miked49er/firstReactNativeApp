import React from 'react';
import { StyleSheet, View, Text, FlatList, ListRenderItemInfo } from 'react-native';
import Product from '../../models/Product';
import ProductItem from '../ProductItem/ProductItem';

interface IProductListProps {
    productList: Product[];
}

const ProductList = (props: IProductListProps) => {
    return (
        <FlatList
            data={props.productList}
            renderItem={(itemData: ListRenderItemInfo<Product>) => (
                <ProductItem
                    product={itemData.item}
                    onViewDetail={() => {
                    }}
                    onAddToCart={() => {
                    }}
                />
            )}
        />
    );
};

const styles = StyleSheet.create({
    wrapper: {}
});

export default ProductList;
