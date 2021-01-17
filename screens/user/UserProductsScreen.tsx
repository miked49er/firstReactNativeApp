import React from 'react';
import { Button, FlatList, Platform, StyleSheet } from 'react-native';
import { ProductState } from '../../store/reducers/products';
import { useDispatch, useSelector } from 'react-redux';
import ProductItem from '../../components/ProductItem/ProductItem';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ShopHeaderButton from '../../components/ShopHeaderButton/ShopHeaderButton';
import Theme from '../../constants/Theme';
import { deleteProduct } from '../../store/actions/products';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';

interface IUserProductsScreenProps {
    navigation: StackNavigationProp;
}

const UserProductsScreen = (props: IUserProductsScreenProps) => {
    const userProducts = useSelector(({products}: { products: ProductState }) => products.userProducts);
    const dispatch = useDispatch();

    const editProductHandler = (id: string) => {
        props.navigation.navigate('EditProduct', {productId: id});
    };

    return (
        <FlatList
            data={userProducts}
            renderItem={itemData => (
                <ProductItem
                    product={itemData.item}
                    onSelect={editProductHandler.bind(this, itemData.item.id)}
                >
                    <Button
                        title='Edit'
                        color={Theme.primary}
                        onPress={editProductHandler.bind(this, itemData.item.id)}
                    />
                    <Button
                        title='Delete'
                        color={Theme.primary}
                        onPress={() => {
                            dispatch(deleteProduct(itemData.item.id));
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
        ),
        headerRight: () => (
            <HeaderButtons HeaderButtonComponent={ShopHeaderButton}>
                <Item
                    title='Add'
                    iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                    onPress={() => {
                        navData.navigation.navigate('EditProduct');
                    }}
                />
            </HeaderButtons>
        ),
    }
}

const styles = StyleSheet.create({
    wrapper: {}
});

export default UserProductsScreen;
