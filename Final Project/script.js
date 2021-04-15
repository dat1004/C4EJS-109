// Toggle menu/showcase
const menuToggle = document.querySelector(".toggle");
const showCase = document.querySelector(".showcase");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  showCase.classList.toggle("active");
});

// Toggle cart
const cartToggle = document.querySelector(".cart");
const cartOverlayToggle = document.querySelector(".cart-overlay");
const cartMenu = document.querySelector(".cart-menu");
const addToCartBtn = document.querySelector(".add-to-cart");

addToCartBtn.addEventListener("click", () => {
  cartOverlayToggle.classList.toggle("active");
  cartToggle.classList.toggle("active");
});

cartMenu.addEventListener("click", () => {
  cartOverlayToggle.classList.toggle("active");
  cartToggle.classList.toggle("active");
});

//close cart
const cartClose = document.querySelector(".close-cart");
cartClose.addEventListener("click", () => {
  cartOverlayToggle.classList.toggle("active");
  cartToggle.classList.toggle("active");
});

//variables
const cartBtn = document.querySelector(".cart-menu");
const closeCartBtn = document.querySelector;
(".close-cart");
const clearCartBtn = document.querySelector(".clear-cart");
const cartDOM = document.querySelector(".cart");
const cartOverlay = document.querySelector(".cart-overlay");
const cartItems = document.querySelector(".cart-items");
const cartTotal = document.querySelector(".cart-total");
const cartContent = document.querySelector(".cart-content");
const productDOM = document.querySelector(".product-detail");

//Cart
let cart = [];

//getting the products
class Products {
  async getProducts() {
    try {
      let result = await fetch("products.json");
      let data = await result.json();
      let products = data.items;
      products = products.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

//UI product
class UI {
  displayProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `
      <div class="porfolio">
          <div class="item">
            <img
              src="images/air_force_1_ow_aa32a4487ff5489282e70a0b28ab84eb_ba1c86f36206402faac83ba4a1ec001c_large.png"
              alt="porfolio-item1"
            />
            <div class="product">
              <div class="product-brand">Nike</div>
              <a class="product-name" href="product_01.html"
                >Nike Air Force 1 Low Off-White Black White</a
              >
              <div class="product-price">17,900,000vnd</div>
            </div>
      `;
    });
    productsDOM.innerHTML = result;
  }
}

//local Storage
class Storage {}

//event listener
document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  //Ger all products
  products.getProducts().then((products) => ui.displayProducts(products));
});
