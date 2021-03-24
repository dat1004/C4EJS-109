// //Examine the Document Object//

// // console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = "Hello";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

//Selector - getElementById
// console.log(document.getElementById("header-title"));
// let headerTitle = document.getElementById("header-title");
// console.log(headerTitle);
// // headerTitle.textContent = "Hello";
// // headerTitle.innerText = "Goodbye";
// // headerTitle.innerHTML = "<h3>Hello</h3>";
// headerTitle.style.borderBottom = "solid 3px #000";

//getElementsByClassName//
// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }

//getElementsBtTagName//
// let li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }

//QUERYSELECTOR//
// let header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #cccc";

// let input = document.querySelector("input");
// input.value = "Hello World";

// let submit = document.querySelector('input[type="submit"]');
// submit.value = "Send";

// let item = document.querySelector(".list-group-item");
// item.style.color = "red";

// let secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "pink";

// let lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

//QUERYSELECTORALL//
let titles = document.querySelectorAll(".title");
titles[0].textContent = "Hello";

let odd = document.querySelectorAll("li:nth-child(odd)");
let even = document.querySelectorAll("li:nth-child(even)");

for (let i = 0; i < odd.length; i++) {
  odd[i].style.backgroudColor = "#f4f4f4";
  even[i].style.backgroudColor = "#ccc";
}
