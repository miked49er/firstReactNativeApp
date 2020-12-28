class Category {
    private _id: string;
    private _title: string;
    private _color: string;

    constructor(id: string, title: string, color: string) {
        this._id = id;
        this._title = title;
        this._color = color;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get color(): string {
        return this._color;
    }

    set color(value: string) {
        this._color = value;
    }
}

export default Category;
