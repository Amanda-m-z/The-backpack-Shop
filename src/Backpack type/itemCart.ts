export class ItemCart {  //ItemCart är för när produkterna ligger i cart
    type: string;
    price: number;
    purchases: number;
    name: string;
    img: string;
    color: string;
    id: number;
    quantity: number;


    constructor(type: string, price: number, purchases: number, 
        name: string, img: string, color: string, id: number, quantity: number) {

        this.type = type;
        this.price = price;
        this.purchases = purchases;
        this.name = name;
        this.img = img;
        this.color = color;
        this.id = id;
        this.quantity = quantity;
        

    }
}
