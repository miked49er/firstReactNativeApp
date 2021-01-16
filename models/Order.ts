import { IShoppingCartItem } from '../components/ShoppingCartItem/ShoppingCartItem';

export class Order {
    private _id: string;
    private _items: IShoppingCartItem[];
    private _totalAmount: number;
    private _date: Date;

    constructor(id: string, items: IShoppingCartItem[], totalAmount: number, date: Date) {
        this._id = id;
        this._items = items;
        this._totalAmount = totalAmount;
        this._date = date;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get items(): IShoppingCartItem[] {
        return this._items;
    }

    set items(value: IShoppingCartItem[]) {
        this._items = value;
    }

    get totalAmount(): number {
        return this._totalAmount;
    }

    set totalAmount(value: number) {
        this._totalAmount = value;
    }

    get date(): Date {
        return this._date;
    }

    set date(value: Date) {
        this._date = value;
    }
}
