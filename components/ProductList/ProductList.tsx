import React from 'react';
import { FlatList, ListRenderItemInfo, StyleSheet } from 'react-native';
import Product from '../../models/Product';
import ProductItem from '../ProductItem/ProductItem';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cart';

interface IProductListProps {
    navigation: StackNavigationProp;
    productList: Product[];
}

const ProductList = (props: IProductListProps) => {
    const dispatch = useDispatch();
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
                        dispatch(addToCart(itemData.item));
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
