//1
let dresser = ["socks", "shirts", "pants"];
console.log(dresser[2]);


//2
let odds = [1, 3, 5, 7, 9];
let sum = 0;
for (let i = 0; i < odds.length; i++) {
    sum += odds[i];
}
console.log(sum);


//3
let firstName = "Neil";
let middleName = "deGrasse";
let lastName = "Tyson";
let Scientist = [firstName, middleName, lastName];
console.log(Scientist.join(" "));


//4
let people = ["Teddy", "Cathy", "Bobby"];
console.log(people);

people.splice(1, 1, "Peter"); // thay Cathy = Peter
console.log(people);

people.push("Barry"); // them Barry cuoi
console.log(people);

people.unshift("Alice"); // them Alice dau
console.log(people);

people.splice(3, 0, "John", "James"); //them John & James sau Peter
console.log(people);

people.splice(4, 1, "James, 27");
console.log(people);

people.splice(2, 1);
console.log(people);

people.splice(3, 1);
console.log(people);

//10
let number = Math.floor(Math.random() * 5);
console.log(people[number])


//11
let myString = "https://mindx.edu.vn/course/code-for-everyone"
let myOtherString = "code-for-everyone"
let n = myString.indexOf(myOtherString)
