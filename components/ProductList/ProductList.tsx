import React from 'react';
import { Button, FlatList, ListRenderItemInfo, StyleSheet, View } from 'react-native';
import Product from '../../models/Product';
import ProductItem from '../ProductItem/ProductItem';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/actions/cart';
import Theme from '../../constants/Theme';

interface IProductListProps {
    navigation: StackNavigationProp;
    productList: Product[];
}

const ProductList = (props: IProductListProps) => {
    const dispatch = useDispatch();

    const selectItemHandler = (id: string, title: string) => {
        props.navigation.navigate({
            routeName: 'ProductDetail', params: {
                productId: id,
                productTitle: title
            }
        });
    }
    return (
        <FlatList
            data={props.productList}
            renderItem={(itemData: ListRenderItemInfo<Product>) => (
                <ProductItem
                    product={itemData.item}
                    onSelect={selectItemHandler.bind(this, itemData.item.id, itemData.item.title)}
                >
                    <Button
                        title='View Details'
                        color={Theme.primary}
                        onPress={selectItemHandler.bind(this, itemData.item.id, itemData.item.title)}
                    />
                    <Button
                        title='To Cart'
                        color={Theme.primary}
                        onPress={() => {
                            dispatch(addToCart(itemData.item));
                        }}
                    />
                </ProductItem>
            )}
        />
    );
};

const styles = StyleSheet.create({
    wrapper: {}
});

export default ProductList;
