// Importing Components./components.js
import * as components from "./components/components.js";
// Importing active navigation links
import * as activeNav from "./utils/activeNav.js";

const productList = document.querySelector("#productList");

const data = JSON.parse(localStorage.getItem("products"));
console.log(JSON.stringify(data));
// console.log(JSON.parse(JSON.stringify(data)));

data.forEach((product, i) => {
  const newProduct = document.createElement("g-product");
  newProduct.setAttribute("data", JSON.stringify(product));
  productList.appendChild(newProduct);

  const cartButton = document.querySelector(`#cartButton-${product.id}`);

  cartButton.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(cartButton.id);
  });
});

// for (let i = 0; i < 3; i++) {

// }
