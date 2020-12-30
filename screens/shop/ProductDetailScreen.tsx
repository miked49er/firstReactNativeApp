import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, Button } from 'react-native';
import { StackNavigationProp } from 'react-navigation-stack/lib/typescript/src/vendor/types';
import Product from '../../models/Product';
import { useSelector } from 'react-redux';
import { ProductState } from '../../store/reducers/products';
import Theme from '../../constants/Theme';

interface IProductDetailScreenProps {
    navigation: StackNavigationProp;
}

const ProductDetailScreen = (props: IProductDetailScreenProps) => {
    const productId: string = props.navigation.getParam('productId');
    const product: Product = useSelector((state: { products: ProductState }) => state.products.availableProducts.find(product => product.id === productId))!;
    return (
        <ScrollView>
            <Image
                style={styles.image}
                source={{uri: product.imageUrl}}
            />
            <View style={styles.actions}>
                <Button
                    color={Theme.primary}
                    title='Add to Cart'
                    onPress={() => {
                    }}
                />
            </View>
            <Text style={styles.price}>${product.price.toFixed(2)}</Text>
            <Text style={styles.description}>{product.description}</Text>
        </ScrollView>
    );
};

ProductDetailScreen.navigationOptions = (navData: { navigation: StackNavigationProp }) => {
    const productTitle = navData.navigation.getParam('productTitle');
    return {
        headerTitle: productTitle
    }
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 300
    },
    actions: {
       marginVertical: 10,
       alignItems: 'center'
    },
    price: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: Theme.lightText,
        textAlign: 'center',
        marginVertical: 20
    },
    description: {
        fontFamily: 'open-sans',
        fontSize: 14,
        textAlign: 'center',
        marginHorizontal: 20
    }
});

export default ProductDetailScreen;
