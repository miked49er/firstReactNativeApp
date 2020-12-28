class Meal {
    private _id: string;
    private _categoryIds: string[];
    private _title: string;
    private _affordability: string;
    private _complexity: string;
    private _imageUrl: string;
    private _duration: number;
    private _ingredient: string[];
    private _steps: string[];
    private _isGlutenFree: boolean;
    private _isVegan: boolean;
    private _isVegetarian: boolean;
    private _isLactoseFree: boolean;

    constructor(id: string, categoryIds: string[], title: string, affordability: string, complexity: string, imageUrl: string, duration: number, ingredient: string[], steps: string[], isGlutenFree: boolean, isVegan: boolean, isVegetarian: boolean, isLactoseFree: boolean) {
        this._id = id;
        this._categoryIds = categoryIds;
        this._title = title;
        this._affordability = affordability;
        this._complexity = complexity;
        this._imageUrl = imageUrl;
        this._duration = duration;
        this._ingredient = ingredient;
        this._steps = steps;
        this._isGlutenFree = isGlutenFree;
        this._isVegan = isVegan;
        this._isVegetarian = isVegetarian;
        this._isLactoseFree = isLactoseFree;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get categoryIds(): string[] {
        return this._categoryIds;
    }

    set categoryIds(value: string[]) {
        this._categoryIds = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get affordability(): string {
        return this._affordability;
    }

    set affordability(value: string) {
        this._affordability = value;
    }

    get complexity(): string {
        return this._complexity;
    }

    set complexity(value: string) {
        this._complexity = value;
    }

    get imageUrl(): string {
        return this._imageUrl;
    }

    set imageUrl(value: string) {
        this._imageUrl = value;
    }

    get duration(): number {
        return this._duration;
    }

    set duration(value: number) {
        this._duration = value;
    }

    get ingredient(): string[] {
        return this._ingredient;
    }

    set ingredient(value: string[]) {
        this._ingredient = value;
    }

    get steps(): string[] {
        return this._steps;
    }

    set steps(value: string[]) {
        this._steps = value;
    }

    get isGlutenFree(): boolean {
        return this._isGlutenFree;
    }

    set isGlutenFree(value: boolean) {
        this._isGlutenFree = value;
    }

    get isVegan(): boolean {
        return this._isVegan;
    }

    set isVegan(value: boolean) {
        this._isVegan = value;
    }

    get isVegetarian(): boolean {
        return this._isVegetarian;
    }

    set isVegetarian(value: boolean) {
        this._isVegetarian = value;
    }

    get isLactoseFree(): boolean {
        return this._isLactoseFree;
    }

    set isLactoseFree(value: boolean) {
        this._isLactoseFree = value;
    }
}

export default Meal;
