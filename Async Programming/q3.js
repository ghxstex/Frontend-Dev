function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let failed = Math.random() < 0.3;
            if (failed) reject("API failure");
            else resolve(["UI glitch", "API timeout", "Login failure"]);
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.table(bugs);
    })
    .catch(err => {
        console.log("Error:", err);
    });
