//Penguin

let myPenguin = {
    name : "Frobisher",
    origin : "Doctor Who",
    creator : ["Steve Parkhouse", "John Ridgway"]
} //1

console.log(`Hello, I'm a penguin and my name is ${myPenguin.name}`); //2

myPenguin.canFly = false //3
console.log(myPenguin);

myPenguin.chirp = function () {
    console.log ("CHIRP CHIRP! Is this what penguins sound like?" )
}
myPenguin.chirp() //4

myPenguin.sayHello = function () {
    return console.log(`Hello, I'm a penguin and my name is ${this.name}`);
}//5
myPenguin.sayHello() //6

myPenguin.name = "Jeff" //7

myPenguin.sayHello()

myPenguin.fly = function () {
    if (this.canFly) {
        console.log("I can fly");
    
    } else {
        console.log("I can't fly")
    }
}

myPenguin.fly()
myPenguin.canFly = true;
myPenguin.fly() //8

for (property in myPenguin) {
    console.log(property);
}