import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';
import { useSelector } from 'react-redux';
import { CartState } from '../../store/reducers/cart';
import Theme from '../../constants/Theme';

interface ICartScreenProps {

}

const CartScreen = (props: ICartScreenProps) => {
    const {items, totalAmount}: CartState = useSelector(({cart}: { cart: CartState }) => cart);
    const cartItems = [];
    for (const key in items) {
        cartItems.push({
            productId: key,
            productTitle: items[key].productTitle,
            productPrice: items[key].productPrice,
            quantity: items[key].quantity,
            sum: items[key].sum
        });
    }
    return (
        <View style={styles.wrapper}>
            <View style={styles.summary}>
                <Text style={styles.summaryText}>
                    Total <Text style={styles.amount}>${totalAmount.toFixed(2)}</Text>
                </Text>
                <Button
                    title='Order Now'
                    color={Theme.accent}
                    disabled={cartItems.length === 0}
                    onPress={() => {
                    }}
                />
            </View>
            <View>
                <Text>CART ITEMS</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    wrapper: {
        margin: 20
    },
    summary: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        padding: 10,
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
    },
    summaryText: {
        fontFamily: 'open-sans-bold',
        fontSize: 18
    },
    amount: {
        color: Theme.primary
    }
});

export default CartScreen;
