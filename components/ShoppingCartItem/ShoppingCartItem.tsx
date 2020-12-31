import React from 'react';
import { Platform, StyleSheet, Text, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Theme from '../../constants/Theme';

interface IShoppingCartItemProps {
    onRemove: () => void;
    product: IShoppingCartItem;
}

export interface IShoppingCartItem {
    productId: string;
    productTitle: string;
    productPrice: number;
    quantity: number;
    sum: number;
}

const ShoppingCartItem = (props: IShoppingCartItemProps) => {
    const Touchable: any = Platform.OS === 'android' && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;
    const {sum, productTitle, quantity} = props.product;
    return (
        <View style={styles.wrapper}>
            <View style={styles.itemData}>
                <Text style={styles.quantity}>{quantity} </Text><Text style={styles.mainText}>{productTitle}</Text>
            </View>
            <View style={styles.itemData}>
                <Text style={[styles.mainText, styles.sumText]}>${sum}</Text>
                <Touchable onPress={props.onRemove}>
                    <Ionicons
                        name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
                        size={23}
                        color='red'
                    />
                </Touchable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        backgroundColor: 'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    itemData: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    quantity: {
        fontFamily: 'open-sans',
        color: Theme.lightText,
        fontSize: 16
    },
    mainText: {
        fontFamily: 'open-sans-bold',
        fontSize: 16,
    },
    sumText: {
        marginRight: 20
    }
});

export default ShoppingCartItem;
