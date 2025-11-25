class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(percent) {
        const amount = (this.price * percent) / 100;
        this.price = this.price - amount;
    }

    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}

let products = [
    new Product(1, "Phone", 15000, "Electronics"),
    new Product(2, "Pen", 50, "Stationery"),
    new Product(3, "Shoes", 2200, "Fashion"),
    new Product(4, "Bag", 900, "Fashion"),
    new Product(5, "Headphones", 1200, "Electronics")
];

products[0].applyDiscount(10);
products[2].applyDiscount(5);

products.forEach(p => console.log(p.getDetails()));

let expensive = products.filter(p => p.price > 1000);
console.log("Products > 1000:");
expensive.forEach(p => console.log(p.getDetails()));
