import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Product from '../../models/Product';
import Theme from '../../constants/Theme';

interface IProductItemProps {
    onAddToCart: () => void;
    onViewDetail: () => void;
    product: Product;
}

const ProductItem = (props: IProductItemProps) => {
    const {price, imageUrl, title} = props.product;
    return (
        <View style={styles.wrapper}>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.image}
                    source={{uri: imageUrl}}
                />
            </View>
            <View style={styles.details}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.price}>${price.toFixed(2)}</Text>
            </View>
            <View style={styles.btnContainer}>
                <Button
                    title='View Details'
                    color={Theme.primary}
                    onPress={props.onViewDetail}
                />
                <Button
                    title='To Cart'
                    color={Theme.primary}
                    onPress={props.onAddToCart}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 8,
        elevation: 5,
        borderRadius: 10,
        backgroundColor: 'white',
        height: 300,
        margin: 20
    },
    imgContainer: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        overflow: 'hidden'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    title: {
        fontSize: 18,
        marginVertical: 4
    },
    price: {
        fontSize: 14,
        color: '#888'
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '25%',
        paddingHorizontal: 20
    },
    details: {
        alignItems: 'center',
        height: '15%',
        padding: 10
    }
});

export default ProductItem;
