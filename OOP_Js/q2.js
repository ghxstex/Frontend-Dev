const menu = {
    pizza: 250,
    burger: 120,
    fries: 80,
    coke: 40
};

function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(item => {
            if (!menu[item]) throw new Error("Invalid item: " + item);
            return menu[item];
        });

        const total = prices.reduce((sum, price) => sum + price, 0);
        console.log("Bill Amount:", total);
    } catch (e) {
        console.log("Order Error:", e.message);
    }
}

calculateBill(["pizza", "coke"]);
calculateBill(["fries", "pasta"]); // error case
