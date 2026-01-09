export class Backpack { 
    type: string;
    price: number;
    purchases: number;
    name: string;
    img: string;
    color: string;
    id: number;


    constructor(type: string, price: number, purchases: number, 
        name: string, img: string, color: string, id: number) {

        this.type = type;
        this.price = price;
        this.purchases = purchases;
        this.name = name;
        this.img = img;
        this.color = color;
        this.id = id;

    }
}