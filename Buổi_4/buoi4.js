//1 Array
let colors = ["red", "white", "blue", "green", "yellow"];
console.log(colors[0]);

console.log(colors[2]);

colors.splice(4, 1, "ultraviolet");

let fourthColor = colors[4];

console.log(fourthColor);

colors.push("black");

colors.unshift("pink");

colors.pop();
console.log(colors.length);

for (let i = colors.length; i <= colors.length ; i++) {
    console.log(colors[i]);
}

for (let i = 0; i < colors.length; i++) {
    console.log((i) + ": " + colors[i]);
}

let lastColor = (colors.length);
console.log(colors);
console.log(lastColor);


//2 Object
const Person = {
    firstName: "Dat",
    lastName: "Nguyen",
    age: 27,
    address: "Le Van Luong",
}

//Say Hello
console.log(`Hello, My name is ${Person.firstName} ${Person.lastName}`);


//Assign IQ between [120:200]
function getMyIQ(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
Person.IQ = getMyIQ(120, 200);
console.log(Person);


//Greeting function
Person.greeting = function () {
    console.log("Hello! It's nice to meet you");
}
Person.greeting();


//Say Hello function
Person.sayHello = function () {
    console.log(`Hello! It's nice to meet you, My name is ${this.firstName} ${this.lastName}`);
}
Person.sayHello();


//Change name
Person.firstName = "Bill"
Person.lastName = "Gates"
Person.sayHello();


//test IQ
Person.testIQ = function () {
    if (this.IQ > 150) {
        console.log("You are smart");
    } else {
        console.log("No, I'm not good enough");
    }
}
Person.testIQ();


//Change IQ again
Person.IQ = getMyIQ(120, 200);
console.log(Person);
Person.testIQ();


//Creat 5 more persons
function createPerson (first, last, age, address) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.address = address;
    }

let myFather = new createPerson("John", "Wick", 50, "Hoang Dao Thuy");
console.log(myFather);