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

let myMother = new createPerson("Agelina", "Jolie", 45, "Earth");
console.log(myMother);

let myFriend = new createPerson("Brad", "Pitt", 50, "Mars");
console.log(myFriend);

let myFoe = new createPerson("Thor", "Wick", 40, "Asgadian");
console.log(myFoe);

let myGirl = new createPerson("Scarlet", "Witch", 30, "Earth");
console.log(myGirl);



//Function to check if it's array
let is_array = function(input) {
    if (toString.call(input) === "[object Array]")
    return true;
    return false;   
    };
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));


//Function to clone an array
let array_Clone = function(arra1) {
    return arra1.slice(0);
    };
console.log(array_Clone([1, 2, 4, 0]));
console.log(array_Clone([1, 2, [4, 0]]));


//function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array
let first = function (array, n) {
    if (array == null)
        return void 0;
    if (n == null)
        return array[0];
    if (n < 0)
        return [];
    return array.slice(0, n);
};
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));


//function to get the last element of an array
let last = function (array, n) {
    if (array == null)
        return void 0;
    if (n == null)
        return array[array.length - 1];
    return array.slice(Math.max(array.length - n, 0));
};
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2], 3));
console.log(last([7, 9, 0, -2], 6));


//join all elements of array
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));


//Insert dashes (-) between each two even digits
let userInput = prompt("Insert String");
let userString = userInput.toString();
let result = [userString[0]];

for (let i = 1; i < userString.length; i++) {
    if (userString[i - 1] % 2 === 0 && userString[i] % 2 === 0) {
        result.push('-', userString[i]);
    } else {
        result.push(userString[i]);
    }
}
console.log(result.join(''));


//swap the case of each character
let string1 = prompt("Insert another String");
const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';
const result1 = [];

for (let i = 0; i < string1.length; i++) {
    if (UPPER.includes(string1[i])) {
        result1.push(string1[i].toLowerCase());
    } else if (LOWER.includes(string1[i])) {
        result1.push(string1[i].toUpperCase());
    } else {
        result1.push(string1[i]);
    }
}
console.log(result1.join(''));


//compute the sum and product of an array of integers
let userArray = [1, 2, 3, 4, 5, 6],
    userSum = 0,
    userProduct = 1;

for (let i = 0; i < userArray.length; i++) {
    userSum += userArray[i];
    userProduct *= userArray[i];
}

console.log(`Sum : ${userSum} and Product: ${userProduct}`);


//list the properties of a JavaScript object
let student = {
    name: "David Rayy",
    sclass: "VI",
    rollno: 12
};
console.log(Object.keys(student));

//delete last property
delete student.rollno;
console.log(student);


//log object Length
objectLength = Object.keys(student).length;
console.log(objectLength);


//display reading status
let library = [
    {
        author: "Bill Gates",
        title: "The Road Ahead",
        readingStatus: true,
    },
    {
        author: "Steve Jobs",
        title: "Walter Issacson",
        readingStatus: true,
    },
    {
        author: "Suzanne Collins",
        title: "Mockingjay: The Final Book of The Hunger Games",
        readingStatus: false,
    }
];

for (let i = 0; i < library.length; i++) {
    if (library[i].readingStatus == true) {
        console.log(`Already read ${library[i].title} by ${library[i].author}`);
    } else {
        console.log(`Haven't read ${library[i].title} by ${library[i].author}`);
    }
}


//display the time every sec
function myClock() {
    this.currentDate = new Date();
    this.hours = this.currentDate.getMinutes();
    this.seconds = this.currentDate.getSeconds();
}
myClock.prototype.run = function () {
    setInterval(this.update.bind(this), 1000);
}