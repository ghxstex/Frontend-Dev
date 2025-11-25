const user = {
    name: "Parth",
    showName: () => {
        console.log(this.name);
    }
};

user.showName(); 

const user2 = {
    name: "Parth",
    showName: function() {
        console.log(this.name);
    }
};

user2.showName(); 
