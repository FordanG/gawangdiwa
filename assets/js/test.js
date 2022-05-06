// Importing Components./components.js

import * as components from "./components/components.js";
import * as activeNav from "./utils/activeNav.js";
console.log("3 Navbars");
const productList = document.querySelector("#productList");

const data = [
  {
    imgSrc: "https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z",
    name: "Iphone 6S",
    price: 400,
  },
  {
    imgSrc: "https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z",
    name: "Iphone 5S",
    price: 400,
  },
  {
    imgSrc: "https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z",
    name: "Iphone 3S",
    price: 400,
  },
];
console.log(JSON.stringify(data));
// console.log(JSON.parse(JSON.stringify(data)));

data.forEach((product) => {
  const newCartProduct = document.createElement("cart-product");
  newCartProduct.setAttribute("data", JSON.stringify(product));
  productList.appendChild(newCartProduct);
});
// for (let i = 0; i < 3; i++) {

// }
