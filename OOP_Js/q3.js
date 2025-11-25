function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.applyDiscount = function (percent) {
    const discountAmount = (this.price * percent) / 100;
    return this.price - discountAmount;
};

const p1 = new Product("Shoes", 2000);
const p2 = new Product("Watch", 5000);
const p3 = new Product("Bag", 1500);

console.log(p1.name, p1.applyDiscount(10));
console.log(p2.name, p2.applyDiscount(20));
console.log(p3.name, p3.applyDiscount(15));


