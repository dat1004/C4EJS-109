/*
// loop i -> 7 dung cau lenh for
for (let i = 0; i < 7; i++) {
    console.log (i);
}

// Make user enter a number
console.log ('User enter a number');
let message = prompt ('Enter a number?');
for (let i = 0; i < Number(message); i++) {
    console.log (i);
}

// Sequence starting from 3 with n entered by user
console.log ('Sequence starting from 3');
let n = prompt ('Enter n');
for (let i = 3; i < Number(n); i++) {
    console.log (i);
}

// sequence starting c, ending before n; entered by user
console.log ('Sequence starting from c, ending before n');
let c = prompt ('Enter c');
for (let i = c; i < Number(n); i++) {
    console.log (i);
}

/*
// start at c, end at n, stepping by 3
console.log ('start at c, end at n, stepping by 3');
let n = prompt ('Enter n');
let c = prompt ('Enter c');
for (let i = Number(c); i < Number(n); i +=3 ) {
    console.log (i);
}

// start at c, end at n, stepping by s
console.log ('start at c, end at n, steppbing by s');
let s = prompt ('Enter s');
for (let i = Number(c); i < Number(n); i = i+Number(s)) {
    console.log (i);
}
*/

// calculate factorial n(1*2*3*...*n)
console.log ('calculate factorial n');
let n = prompt ('Enter a number');
for (let i = n-1; i>= 1; i--) {
    n *= i;

}
alert (n);

//is user 14+
let userAge = prompt ('How old are you?');
if (userAge <=14) {
    alert ('You are not old enough to view this content')
} else {
    alert ('Enjoy!');
}