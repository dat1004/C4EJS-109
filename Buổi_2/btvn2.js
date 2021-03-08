
// // loop i -> 7 dung cau lenh for
// for (let i = 0; i < 7; i++) {
//     console.log (i);
// }

// // Make user enter a number
// console.log ('User enter a number');
// let message = prompt ('Enter a number?');
// for (let i = 0; i < Number(message); i++) {
//     console.log (i);
// }

// // Sequence starting from 3 with n entered by user
// console.log ('Sequence starting from 3');
// let n = prompt ('Enter n');
// for (let i = 3; i < Number(n); i++) {
//     console.log (i);
// }

// // sequence starting c, ending before n; entered by user
// console.log ('Sequence starting from c, ending before n');
// let c = prompt ('Enter c');
// for (let i = c; i < Number(n); i++) {
//     console.log (i);
// }


// // start at c, end at n, stepping by 3
// console.log ('start at c, end at n, stepping by 3');
// let n = prompt ('Enter n');
// let c = prompt ('Enter c');
// for (let i = Number(c); i < Number(n); i +=3 ) {
//     console.log (i);
// }

// // start at c, end at n, stepping by s
// console.log ('start at c, end at n, steppbing by s');
// let s = prompt ('Enter s');
// for (let i = Number(c); i < Number(n); i = i+Number(s)) {
//     console.log (i);
// }



// // calculate factorial n(1*2*3*...*n)
// console.log ('calculate factorial n');
// let n = prompt ('Enter a number');
// for (let i = n-1; i>= 1; i--) {
//     n *= i;

// }
// alert (n);

// //is user 14+
// let userAge = prompt ('How old are you?');
// if (userAge <=14) {
//     alert ('You are not old enough to view this content')
// } else {
//     alert ('Enjoy!');
// }



// // Check if x is [0,9]
// console.log('check if x is [0,9]');
// let userNumber = prompt('Enter a number');
// for (let i = userNumber; i <= 9; i++){
//     if (userNumber < 5) {
//         alert ('Lower half of 9');
//     } else if (userNumber < 9) {
//         alert ('Higher half of 9');
//     } else {

//     }
// }



// // Check if x is in lower half of n
// let n = prompt('n =');
// let x = prompt('x =');
// for (let i = x;; i++) {
//     if (x < (n / 2)) {
//         alert (`${x} is in lower half of ${n}`)
//     } else if (x > (n / 2)) {
//         alert (`${x} is in higher half of ${n}`)
//     } else {

//     }
// }



// let x = prompt('x =');
// for (let i = x; i <= x; i++) {
//     if (i % 2 == 0) {
//         alert (`${x} is an even number`)
//     } else {
//         alert (`${x} is an odd number`)
//     }
// }



// Print H & L
// let lowVariable = ('L');
// let highVariable = ('H');

// for (let i = 0; i < 3; i++) {
//     console.log(lowVariable);
// }
// for (let i = 0; i < 3; i++) {
//     console.log(highVariable);
// }



// let lowVariable = ('L');
// let highVariable = ('H');
// let n = prompt('Enter the total number of L & H');

// for (let i = 0; i < n; i++) {
//     if (i % 2 === 0) {
//         console.log(lowVariable);
//     } else {
//     console.log(highVariable);
//     }
// }

let usserNumber = 7;
let half = Math.floor(7 / 2)
for (let i = 0; i < half; i++) {
    console.log("H");
}
for (let i = 0; i < half; i++) {
    console.log("L");
}

// for (let i = 0; i < 8; i++) {
//     if (i % 2 == 0) {
//         console.log(0);
//     } else {
//         console.log(1);
//     }
// }


// let n = prompt(`Enter the total number of 0's & 1's`);
// for (let i = 0; i < n; i++) {
//     if (i % 2 == 0) {
//         console.log(0);
//     } else {
//         console.log(1);
//     }
// }

//Calculate BMI
// let mass = prompt('Your weight in kg?');
// let height = prompt('Your height in cm');

// let BMI = mass / ((height/100)**2);
// console.log(BMI);
// alert(`Your BMI is ${BMI}`);

// if (BMI < 16) {
//     alert('You are severely underweight')
// } else if (BMI < 18.5) {
//     alert ('You are underweight')
// } else if (BMI < 25) {
//     alert ('You are normal')
// } else {
//     alert ('You are obese')
// }