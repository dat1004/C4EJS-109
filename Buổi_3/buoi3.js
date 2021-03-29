let inventory = {
    gold : 500,
    pouch : ["flint", "twine", "gemstone"],
    backpack : ["xylophone", "dagger", "bedroll", "bread loaf"]
}

console.log(inventory);

inventory.pocket = ["seashell", "strange berry", "lint"];

inventory.backpack.splice(1, 1);
inventory.gold += 50;
delete inventory.pouch;

console.log(inventory);


// Function
function myFunction() {
    console.log("Hello World");
    console.log("My name is Jeff");
    console.log("I'm 28 years old");
}

myFunction();
myFunction();


function add(a, b) {
    c = a + b;
    return c;
}
let result = add(20, 40);
console.log(result);
