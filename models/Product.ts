class Product {
    private _id: string;
    private _ownerId: string;
    private _title: string;
    private _imageUrl: string;
    private _description: string;
    private _price: number;

    constructor(id: string, ownerId: string, title: string, imageUrl: string, description: string, price: number) {
        this._id = id;
        this._ownerId = ownerId;
        this._title = title;
        this._imageUrl = imageUrl;
        this._description = description;
        this._price = price;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get ownerId(): string {
        return this._ownerId;
    }

    set ownerId(value: string) {
        this._ownerId = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get imageUrl(): string {
        return this._imageUrl;
    }

    set imageUrl(value: string) {
        this._imageUrl = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get price(): number {
        return this._price;
    }

    set price(value: number) {
        this._price = value;
    }
}

export default Product;
