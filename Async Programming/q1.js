function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.8 ? resolve("Water boiled") : reject("Kettle error");
        }, 1000);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.8 ? resolve("Coffee brewed") : reject("Brewing failed");
        }, 1200);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.8 ? resolve("Poured into cup") : reject("Cup fell");
        }, 1100);
    });
}

boilWater()
    .then(msg => { console.log(msg); return brewCoffee(); })
    .then(msg => { console.log(msg); return pourCoffee(); })
    .then(msg => { console.log(msg); console.log("Coffee ready for the team!"); })
    .catch(err => console.log("Process failed:", err));
