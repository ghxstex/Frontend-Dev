function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function() {
    console.log(this.brand + " " + this.model);
};

let c1 = new Car("Kia", "Seltos");
let c2 = new Car("Hyundai", "Creta");

c1.getDetails();
c2.getDetails();
