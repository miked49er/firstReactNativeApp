import PRODUCTS from '../../data/dummy-data';
import Product from '../../models/Product';
import { DELETE_PRODUCT } from '../actions/products';

export interface ProductState {
    availableProducts: Product[],
    userProducts: Product[],
}

const initState: ProductState = {
    availableProducts: PRODUCTS,
    userProducts: PRODUCTS.filter(prod => prod.ownerId === 'u1')
};

export interface ProductAction {
    type: string;
    productId?: string;
}

const productsReducer = (state:ProductState = initState, action: ProductAction) => {
    switch (action.type) {
        case DELETE_PRODUCT:
            return {
                ...state,
                userProducts: state.userProducts.filter(product => product.id !== action.productId!),
                availableProducts: state.availableProducts.filter(product => product.id !== action.productId!)
            };
        default:
            return state;
    }
};

export default productsReducer
