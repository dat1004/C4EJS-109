let cafes = [
  {
    name: "Cafe Cyber",
    city: "Night City",
  },
  {
    name: "Cafe Haha",
    city: "Day City",
  },
  {
    name: "Cafe Very Nice",
    city: "Very nice City",
  },
  {
    name: "Starbuck",
    city: "Hanoi",
  },
  {
    name: "Highland",
    city: "Vung Tau",
  },
];

function renderItem(doc) {
  let myForm = document.getElementById("cafe-list");
  let li = document.createElement("li");
  let name = document.createElement("span");
  let city = document.createElement("span");
  let cross = document.createElement("div");

  name.textContent = doc.name;
  city.textContent = doc.city;
  cross.textContent = "x";

  li.appendChild(name);
  li.appendChild(city);
  li.appendChild(cross);
  myForm.appendChild(li);
  console.log(li);

  cross.addEventListener("click", () => {
    myForm.removeChild(li);
    cafes = cafes.filter((item) => item !== doc);
    console.log(cafes);

    // let itemIndex = cafes.indexOf(doc);
    // cafes.splice(itemIndex, 1);
    //   console.log(cafes);
  });
}

// cafes.forEach(doc => renderItem(doc)); //Pro method

for (let i = 0; i < cafes.length; i++) {
  renderItem(cafes[i]);
}

let inputForm = document.getElementById("add-cafe-form");
inputForm.addEventListener("submit", (event) => {
  event.preventDefault(); //Prevent (event) = Reloading Webpage
  let inputName = inputForm.name.value;
  let inputCity = inputForm.city.value;
  let myObj = {
    name: inputName,
    city: inputCity,
  };
  cafes.push(myObj); //push input into a new Object
  renderItem(myObj);

  inputForm.name.value = "";
  inputForm.city.value = ""; //Clear input value after adding cafe
});

localStorage.setItem("myKey", "myValue");
console.log(localStorage.getItem("myKey"));
