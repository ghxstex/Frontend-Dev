class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.fromLocation = fromLocation;
        this.toLocation = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance <= 0 || isNaN(this.distance)) {
            throw new Error("Invalid trip distance");
        }
        return this.distance * 12; 
    }
}

const driver = new Driver("Raghav", 4.7, "Swift Dzire");
const trip = new Trip("Delhi", "Gurgaon", 22);

try {
    console.log("Fare:", trip.calculateFare());
} catch (err) {
    console.log("Trip Error:", err.message);
}
