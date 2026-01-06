export class Backpack {
    type: string;
    price: number;
    purchases: number;
    name: string;
    img: string;
    color: string;

    constructor(type: string, price: number, purchases: number, name: string, img: string, color: string) {
        this.type = type;
        this.price = price;
        this.purchases = purchases;
        this.name = name;
        this.img = img;
        this.color = color;

    }
}