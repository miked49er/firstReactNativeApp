import React from 'react';
import { StyleSheet, View, Text, FlatList, Platform } from 'react-native';
import { useSelector } from 'react-redux';
import { IOrderState } from '../../store/reducers/order';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import ShopHeaderButton from '../../components/ShopHeaderButton/ShopHeaderButton';
import OrderItem from '../../components/OrderItem/OrderItem';

interface IOrdersScreenProps {

}

const OrdersScreen = (props: IOrdersScreenProps) => {
    const orders = useSelector(({orders}: { orders: IOrderState }) => orders.orders);
    return (
        <FlatList
            data={orders}
            renderItem={itemData => (
                <OrderItem
                    order={itemData.item}
                />
            )}
        />
    );
};

OrdersScreen.navigationOptions = (navData: { navigation: any }) => {
    return {
        headerTitle: 'Your Orders',
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
        )
    }
};

const styles = StyleSheet.create({
    wrapper: {}
});

export default OrdersScreen;
