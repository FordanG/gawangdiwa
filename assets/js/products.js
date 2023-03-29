// Importing Components./components.js
import * as components from "./components/components.js";
// Importing active navigation links
import * as activeNav from "./utils/activeNav.js";
// import { auth } from "./utils/auth.js";

// Initialize variables for DOM manipulation
const productList = document.querySelector("#productList");

// Initialize variables from LocalStorage
const data = JSON.parse(localStorage.getItem("products"));
// const users = JSON.parse(localStorage.getItem("users"));
// const currentUser = localStorage.getItem("currentUser")
//   ? JSON.parse(localStorage.getItem("currentUser"))
//   : "";

data.forEach((product, i) => {
  // For each product in the array, create a new component of G-Product
  const newProduct = document.createElement("g-product");

  // Pass Product Data to the component
  newProduct.setAttribute("data", JSON.stringify(product));
  // Append component to the parent element
  productList.appendChild(newProduct);

  // Initialize cartButton
  const cartButton = document.querySelector(`#cartButton-${product.id}`);

  // Add Click event to the cartButton
  // cartButton.addEventListener("click", (e) => {
  //   e.preventDefault();

  //   //   If user is logged in, add to cart will be allowed
  //   //   else they will be redirected to login first
  //   if (auth) {
  //     addToCartPrompt(product);

  //     //   Checks if product is already in the user's cart
  //     const productFound = currentUser.cartProducts.find((cartProduct) => {
  //       return cartProduct.id == product.id;
  //     });

  //     //   get the user index from the list of users
  //     const userIndex = users.findIndex(
  //       (user) => user.email === currentUser.email
  //     );

  //     // If the product is not yet in the user's cart then the
  //     // product's details will be added to the user's cart
  //     if (!productFound) {
  //       currentUser.cartProducts.push(product);
  //       users[userIndex].cartProducts = currentUser.cartProducts;

  //       // Update the database with these changes
  //       localStorage.setItem("currentUser", JSON.stringify(currentUser));
  //       localStorage.setItem("users", JSON.stringify(users));
  //     }
  //     // Else if product is in the cart already,
  //     // then just add to the quantity of the product in cart
  //     else {
  //       // Get the product's index in the cart
  //       const productIndex = currentUser.cartProducts.findIndex(
  //         (cartProduct) => cartProduct.id === product.id
  //       );

  //       currentUser.cartProducts[productIndex].quantity += 1;
  //       users[userIndex].cartProducts = currentUser.cartProducts;
  //       // Update the database with these changes
  //       localStorage.setItem("currentUser", JSON.stringify(currentUser));
  //       localStorage.setItem("users", JSON.stringify(users));
  //     }
  //   } else {
  //     // Calls for the user to login first before adding to cart
  //     loginPrompt();
  //   }
  // });
});

// Shows success in adding to cart
const addToCartPrompt = (product) => {
  Swal.fire({
    icon: "success",
    title: `${product.name} has been added to the cart`,
    showConfirmButton: false,
    timer: 1500,
  });
};

// Calls for the user to login first before adding to cart
const loginPrompt = () => {
  Swal.fire({
    title: `Login First to add to your Cart`,
    confirmButtonColor: "#5C6451",
    confirmButtonText: "Continue",
  }).then(function () {
    window.location = "./login.html";
  });
};
