import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Theme from '../../constants/Theme';
import { Order } from '../../models/Order';
import ShoppingCartItem, { IShoppingCartItem } from '../ShoppingCartItem/ShoppingCartItem';

interface IOrderItemProps {
    order: Order;
}

const OrderItem = (props: IOrderItemProps) => {
    const [showDetails, setShowDetails] = useState(false);
    const {totalAmount, readableDate, items} = props.order;
    return (
        <View style={styles.wrapper}>
            <View style={styles.summary}>
                <Text style={styles.totalAmount}>${totalAmount.toFixed(2)}</Text>
                <Text style={styles.date}>{readableDate}</Text>
            </View>
            <Button
                title={`${!showDetails ? 'Show' : 'Hide'} Details`}
                color={Theme.primary}
                onPress={() => {
                    setShowDetails((prevState: boolean) => !prevState);
                }}
            />
            {
                showDetails &&
                <View style={styles.detailItems}>
                    {items.map((cartItem: IShoppingCartItem) => (
                        <ShoppingCartItem
                            key={cartItem.productId}
                            product={cartItem}
                        />
                    ))}
                </View>
            }
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
        margin: 20,
        padding: 10,
        alignItems: 'center'
    },
    summary: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: 15
    },
    totalAmount: {
        fontFamily: 'open-sans-bold',
        fontSize: 16
    },
    date: {
        fontFamily: 'open-sans',
        fontSize: 16,
        color: Theme.lightText
    },
    detailItems: {
        width: '100%'
    }
});

export default OrderItem;
