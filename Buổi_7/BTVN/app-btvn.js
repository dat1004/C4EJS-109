// let cafes = [
//   {
//     name: "Cafe Cyber",
//     city: "Night City",
//   },
//   {
//     name: "Cafe Haha",
//     city: "Day City",
//   },
//   {
//     name: "Cafe Very Nice",
//     city: "Very nice City",
//   },
//   {
//     name: "Starbuck",
//     city: "Hanoi",
//   },
//   {
//     name: "Highland",
//     city: "Vung Tau",
//   },
// ];

// function renderItem(doc) {
//   let myForm = document.getElementById("cafe-list");
//   let li = document.createElement("li");
//   let name = document.createElement("span");
//   let city = document.createElement("span");
//   let cross = document.createElement("div");

//   name.textContent = doc.name;
//   city.textContent = doc.city;
//   cross.textContent = "x";

//   li.appendChild(name);
//   li.appendChild(city);
//   li.appendChild(cross);
//   myForm.appendChild(li);
//   console.log(li);

//   cross.addEventListener("click", () => {
//     myForm.removeChild(li);
//     cafes = cafes.filter((item) => item !== doc);
//     console.log(cafes);

//     // let itemIndex = cafes.indexOf(doc);
//     // cafes.splice(itemIndex, 1);
//     //   console.log(cafes);
//   });
// }

// // cafes.forEach(doc => renderItem(doc)); //Pro method

// for (let i = 0; i < cafes.length; i++) {
//   renderItem(cafes[i]);
// }

// let inputForm = document.getElementById("add-cafe-form");
// inputForm.addEventListener("submit", (event) => {
//   event.preventDefault(); //Prevent (event) = Reloading Webpage
//   let inputName = inputForm.name.value;
//   let inputCity = inputForm.city.value;
//   let myObj = {
//     name: inputName,
//     city: inputCity,
//   };
//   cafes.push(myObj); //push input into a new Object
//   renderItem(myObj);

//   inputForm.name.value = "";
//   inputForm.city.value = ""; //Clear input value after adding cafe
// });

// localStorage.setItem("myKey", "myValue");
// console.log(localStorage.getItem("myKey"));

//Cafe Class: Represent Cafe
class Cafe {
  constructor(name, city) {
    this.name = name;
    this.city = city;
  }
}

//UI Class: Handle UI Task
class UI {
  static displayCafes() {
    let StoredCafes = [
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
    const cafes = StoredCafes;

    cafes.forEach((cafe) => UI.addCafeToList(cafe));
  }
  static addCafeToList(cafe) {
    const list = document.querySelector("#cafe-list");

    const row = document.createElement("li");
    row.innerHTML = `
    <span>${cafe.name}</span>
    <span>${cafe.city}</span>
    <div class="delete">x</div>
    `;

    list.appendChild(row);
  }
  static deleteCafe(el) {
    if (el.classList.contains("delete")) {
      el.parentElement.remove();
    }
  }

  static clearField() {
    document.querySelector("#name").value = "";
    document.querySelector("#city").value = "";
  }
}

//Store Class: Handle Storage
class Store {
  static getCafes() {
    let cafes;
    if (localStorage.getItem("cafes") === null) {
      cafes = [];
    } else {
      cafes = JSON.parse(localStorage.getItem("cafes"));
    }

    return cafes;
  }

  static addCafe(cafe) {
    const cafes = Store.getCafes();
    cafes.push(cafe);
    localStorage.setItem("cafes", JSON.stringify(cafes));
  }

  static removeCafe() {
    const cafes = Store.getCafes();
    cafes.splice(index, 1);
    localStorage.setItem("cafes", JSON.stringify(cafes));
  }
}

//Event: Display Cafe
document.addEventListener("DOMContentLoaded", UI.displayCafes);

//Event: Add a cafe
document.querySelector("#add-cafe-form").addEventListener("submit", (e) => {
  //prevent submit
  e.preventDefault();

  //get form value
  let name = document.querySelector("#name").value;
  let city = document.querySelector("#city").value;

  //instatiate cafe
  const cafe = new Cafe(name, city);

  //add cafe to UI
  UI.addCafeToList(cafe);

  //clear field
  UI.clearField();
});

//Event: Remove a cafe
document.querySelector("#cafe-list").addEventListener("click", (e) => {
  UI.deleteCafe(e.target);
});
