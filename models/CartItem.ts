class CartItem {
    private _quantity: number;
    private _productPrice: number;
    private _productTitle: string;
    private _sum: number;

    constructor(quantity: number, productPrice: number, productTitle: string, sum: number) {
        this._quantity = quantity;
        this._productPrice = productPrice;
        this._productTitle = productTitle;
        this._sum = sum;
    }

    get quantity(): number {
        return this._quantity;
    }

    set quantity(value: number) {
        this._quantity = value;
    }

    get productPrice(): number {
        return this._productPrice;
    }

    set productPrice(value: number) {
        this._productPrice = value;
    }

    get productTitle(): string {
        return this._productTitle;
    }

    set productTitle(value: string) {
        this._productTitle = value;
    }

    get sum(): number {
        return this._sum;
    }

    set sum(value: number) {
        this._sum = value;
    }
}

export default CartItem;
