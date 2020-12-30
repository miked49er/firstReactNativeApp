import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView } from 'react-native';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import Product from '../../models/Product';
import { useSelector } from 'react-redux';
import { ProductState } from '../../store/reducers/products';

interface IProductDetailScreenProps {
    navigation: StackNavigationProp;
}

const ProductDetailScreen = (props: IProductDetailScreenProps) => {
    const productId: string = props.navigation.getParam('productId');
    const product: Product = useSelector((state : { products: ProductState }) => state.products.availableProducts.find(product => product.id === productId))!;
    return (
        <ScrollView style={styles.wrapper}>
            <View>
                <Text>{product.title}</Text>
            </View>
        </ScrollView>
    );
};

ProductDetailScreen.navigationOptions = (navData: {navigation: StackNavigationProp}) => {
    const productTitle = navData.navigation.getParam('productTitle');
    return {
        headerTitle: productTitle
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1
    }
});

export default ProductDetailScreen;
