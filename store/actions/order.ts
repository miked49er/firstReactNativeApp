import { IShoppingCartItem } from '../../components/ShoppingCartItem/ShoppingCartItem';

export const ADD_ORDER = 'ADD_ORDER';

export const addOrder = (cartItems: IShoppingCartItem[], totalAmount: number) => {
    return {type: ADD_ORDER, orderData: {items: cartItems, total: totalAmount}};
};
