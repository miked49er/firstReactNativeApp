import React from 'react';
import { StyleSheet, View, Text, FlatList, ListRenderItemInfo } from 'react-native';
import Product from '../../models/Product';
import ProductItem from '../ProductItem/ProductItem';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';

interface IProductListProps {
    navigation: StackNavigationProp;
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
                        props.navigation.navigate({
                            routeName: 'ProductDetail', params: {
                                productId: itemData.item.id,
                                productTitle: itemData.item.title
                            }
                        });
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
