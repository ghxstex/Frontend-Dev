class Cart {
    constructor() {
        this.items = [];
        this.discount = 0;
    }

    addItem(name, price, quantity) {
        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce((s, i) => s + i.price * i.quantity, 0);
    }

    applyCoupon(code) {
        const m = code.match(/^(SAVE|DISC)(\d{1,2})$/);
        if (!m) {
            this.discount = 0;
            console.log("Invalid coupon");
        } else {
            this.discount = parseInt(m[2]);
            console.log("Coupon applied:", this.discount + "%");
        }
    }

    getFinal() {
        const total = this.getTotal();
        return total - (total * this.discount / 100);
    }
}

let cart = new Cart();
cart.addItem("Phone", 15000, 1);
cart.addItem("Earphones", 800, 2);
cart.addItem("Cover", 300, 1);

console.log("Total:", cart.getTotal());
cart.applyCoupon("SAVE20");
console.log("Final:", cart.getFinal());
cart.applyCoupon("XYZ");
console.log("Final:", cart.getFinal());
