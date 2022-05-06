// Importing Components./components.js

import * as components from "./components/components.js";
import * as activeNav from "./utils/activeNav.js";
console.log("3 Navbars");
const productList = document.querySelector("#productList");

const data = [
  {
    id: 1,
    imgSrc: "https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z",
    name: "Iphone 6S",
    price: 400,
    quantity: 1,
  },
  {
    id: 2,
    imgSrc: "https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z",
    name: "Iphone 5S",
    price: 400,
    quantity: 1,
  },
  {
    id: 3,
    imgSrc: "https://drive.google.com/uc?id=18KkAVkGFvaGNqPy2DIvTqmUH_nk39o3z",
    name: "Iphone 3S",
    price: 400,
    quantity: 1,
  },
];
console.log(JSON.stringify(data));
// console.log(JSON.parse(JSON.stringify(data)));

const totalQuantity = document.querySelector("#totalQuantity");
const totalPrice = document.querySelector("#totalPrice");

let totalQuantityValue = 0;
let totalPriceValue = 0;
data.forEach((product, i) => {
  totalQuantityValue += 1;
  totalPriceValue += product.price;
  const newCartProduct = document.createElement("g-cartproduct");
  newCartProduct.setAttribute("data", JSON.stringify(product));
  productList.appendChild(newCartProduct);

  const quantity = document.querySelector(`#quantity-${product.id}`);
  const finalPrice = document.querySelector(`#finalPrice-${product.id}`);
  const removeButton = document.querySelector(`#removeButton-${product.id}`);
  const addQuantity = document.querySelector(`#addQuantity-${product.id}`);
  const decreaseQuantity = document.querySelector(
    `#decreaseQuantity-${product.id}`
  );

  decreaseQuantity.classList.add("invisible");
  const buttons = [removeButton, addQuantity, decreaseQuantity];

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault();
      console.log(button.id);

      if (button.id == `addQuantity-${product.id}`) {
        quantity.value = eval(quantity.value) + 1;
        const finalPriceValue = product.price * quantity.value;
        finalPrice.textContent = `PHP ${finalPriceValue}`;

        totalQuantityValue += 1;
        totalQuantity.textContent = `Total Items: ${totalQuantityValue}`;

        totalPriceValue += product.price;
        totalPrice.textContent = `PHP ${totalPriceValue}`;
      } else if (button.id == `decreaseQuantity-${product.id}`) {
        quantity.value = eval(quantity.value) - 1;
        const finalPriceValue = product.price * quantity.value;
        finalPrice.textContent = `PHP ${finalPriceValue}`;

        totalQuantityValue -= 1;
        totalQuantity.textContent = `Total Items: ${totalQuantityValue}`;

        totalPriceValue -= product.price;
        totalPrice.textContent = `PHP ${totalPriceValue}`;
      }
      if (eval(quantity.value) > 1) {
        decreaseQuantity.classList.remove("invisible");
      } else {
        decreaseQuantity.classList.add("invisible");
      }
    });
  });
});

totalQuantity.textContent = `Total Items: ${totalQuantityValue}`;
totalPrice.textContent = `PHP ${totalPriceValue}`;
// for (let i = 0; i < 3; i++) {

// }
