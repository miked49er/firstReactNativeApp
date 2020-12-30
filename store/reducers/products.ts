import PRODUCTS from '../../data/dummy-data';

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
}

const productsReducer = (state:ProductState = initState, action: ProductAction) => {
    return state;
};

export default productsReducer
