import Product from '../../models/Product';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart';
import CartItem from '../../models/CartItem';
import { ADD_ORDER } from '../actions/order';

export interface CartState {
    items: { [id: string]: CartItem };
    totalAmount: number;
}

export interface CartAction {
    type: string;
    product?: Product;
    productId?: string;
}

const initState = {
    items: {},
    totalAmount: 0
};

const cartReducer = (state: CartState = initState, action: CartAction) => {
    switch (action.type) {
        case ADD_TO_CART:
            const addedProduct = action.product!;
            const prodPrice = addedProduct.price;
            const prodTitle = addedProduct.title;

            let cartQuantity: number = 1;
            let cartSum: number = prodPrice;

            if (state.items[addedProduct.id]) {
                const {sum, quantity} = state.items[addedProduct.id];
                cartQuantity = quantity + 1;
                cartSum = sum + prodPrice;
            }
            return {
                ...state,
                items: {
                    ...state.items,
                    [addedProduct.id]: new CartItem(cartQuantity, prodPrice, prodTitle, cartSum)
                },
                totalAmount: state.totalAmount + prodPrice
            };
        case REMOVE_FROM_CART:
            let item = state.items[action.productId!];
            const currentQty = item.quantity;
            let updatedCartItems;
            if (currentQty > 1) {
                const updatedCartItem = new CartItem(item.quantity - 1, item.productPrice, item.productTitle, item.sum - item.productPrice);
                updatedCartItems = {...state.items, [action.productId!]: updatedCartItem};
            } else {
                updatedCartItems = {...state.items};
                delete updatedCartItems[action.productId!];
            }
            let totalAmount = state.totalAmount - item.productPrice;
            return {
                ...state,
                items: updatedCartItems,
                totalAmount: totalAmount > 0 ? totalAmount : 0
            };
        case ADD_ORDER:
            return initState;
        default:
            return state;
    }
};

export default cartReducer;
