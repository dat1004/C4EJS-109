const cafeList = document.querySelector("#cafe-list");
const form = document.querySelector("#add-cafe-form");

// Create element and render cafe
function renderCafe(doc) {
  let li = document.createElement("li");
  let name = document.createElement("span");
  let city = document.createElement("span");
  let cross = document.createElement("div");
  li.setAttribute("data-id", doc.id);
  name.textContent = doc.data().name;
  city.textContent = doc.data().city;
  cross.textContent = "x";
  li.appendChild(name);
  li.appendChild(city);
  li.appendChild(cross);
  cafeList.appendChild(li);

  // set deleting
  cross.addEventListener("click", (event) => {
    event.stopPropagation(); //stop click event's effect parents node
    let id = event.target.parentElement.getAttribute("data-id"); //get Atribute dataID from x's parent node
    db.collection("cafes").doc(id).delete();
  });
}

//Getting Data
db.collection("cafes")
  .get()
  .then((snapshot) => {
    console.log(snapshot);
    console.log(snapshot.docs);
    snapshot.docs.forEach((doc) => {
      console.log(doc.data());
      renderCafe(doc);
    });
  });

//write data into db
form.addEventListener("submit", (event) => {
  event.preventDefault();
  db.collection("cafes").add({
    name: form.name.value,
    city: form.city.value,
  });
  form.city.value = "";
  form.name.value = "";
});
