import Product from '../../models/Product';
import { ADD_TO_CART } from '../actions/cart';
import CartItem from '../../models/CartItem';

export interface CartState {
    items: { [id: string]: CartItem };
    totalAmount: number;
}

export interface CartAction {
    type: string;
    product?: Product;
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
        default:
            return state;
    }
};

export default cartReducer;
