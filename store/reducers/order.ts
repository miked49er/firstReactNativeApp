import { ADD_ORDER } from '../actions/order';
import { Order } from '../../models/Order';
import { IShoppingCartItem } from '../../components/ShoppingCartItem/ShoppingCartItem';

interface IOrderState {
    orders: Order[];
}

interface IOrderActions {
    orderData: { items: IShoppingCartItem[]; total: number };
    type: string;
}

const initState = {
    orders: []
};

const ordersReducer = (state: IOrderState = initState, action: IOrderActions) => {
    switch (action.type) {
        case ADD_ORDER:
            const newOrder = new Order(new Date().toString(), action.orderData!.items, action.orderData!.total, new Date());
            return {
                ...state,
                orders: state.orders.concat(newOrder)
            };
        default:
            return state;
    }
};

export default ordersReducer;
