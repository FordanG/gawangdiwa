import * as components from "./components/components.js";
import * as activeNav from "./utils/activeNav.js";
import * as auth from "./utils/auth.js";

// Make the cart page accesible for logged in users only
if (!auth.auth) {
  (() => {
    Swal.fire({
      title: "User Not Logged In",
      text: "Please login first before accessing the cart page",
      icon: "error",
      confirmButtonColor: "#5C6451",
      confirmButtonText: "Continue",
    }).then(function () {
      window.location = "./login.html";
    });
  })();
} else {
  // Initialize variables for DOM Manipulation
  const productList = document.querySelector("#productList");
  const totalQuantity = document.querySelector("#totalQuantity");
  const totalPrice = document.querySelector("#totalPrice");
  const cartTitle = document.querySelector("#cartTitle");
  const checkoutButton = document.querySelector("#checkoutButton");

  // Initialize variables from localstorage
  let currentUser = localStorage.getItem("currentUser")
    ? JSON.parse(localStorage.getItem("currentUser"))
    : "";
  const users = JSON.parse(localStorage.getItem("users"));
  const userIndex = users.findIndex((user) => user.email === currentUser.email);

  // Initialize variables for updating cart value
  let totalQuantityValue = 0;
  let totalPriceValue = 0;

  // For each cart product, generate a component called g-cartproduct and pass the data
  const generateCart = (data) => {
    data.forEach((product, i) => {
      // update total cart values
      totalQuantityValue += product.quantity;
      totalPriceValue += product.quantity * product.price;

      // create new cart product and set attributes
      const newCartProduct = document.createElement("g-cartproduct");
      newCartProduct.setAttribute("data", JSON.stringify(product));
      productList.appendChild(newCartProduct);

      // Initialize variables for DOM Manipulation
      const quantity = document.querySelector(`#quantity-${product.id}`);
      const finalPrice = document.querySelector(`#finalPrice-${product.id}`);
      const removeButton = document.querySelector(
        `#removeButton-${product.id}`
      );
      const addQuantity = document.querySelector(`#addQuantity-${product.id}`);
      const decreaseQuantity = document.querySelector(
        `#decreaseQuantity-${product.id}`
      );

      // Initialize array buttons for adding click events
      const buttons = [removeButton, addQuantity, decreaseQuantity];

      // For each button, add a click event listener
      buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
          e.preventDefault();
          let finalPriceValue;

          // Different functions for each button type
          switch (button.id) {
            // Button Add Quantity
            case `addQuantity-${product.id}`:
              // Add Product Quantity and Update DOM Values
              product.quantity += 1;
              quantity.value = product.quantity;

              finalPriceValue = product.price * product.quantity;
              finalPrice.textContent = `PHP ${finalPriceValue}`;

              break;

            // Button decrease Quantity
            case `decreaseQuantity-${product.id}`:
              // decrease Product Quantity and Update DOM Values
              product.quantity -= 1;
              quantity.value = product.quantity;

              finalPriceValue = product.price * product.quantity;
              finalPrice.textContent = `PHP ${finalPriceValue}`;
              break;

            // Remove Button
            case `removeButton-${product.id}`:
              Swal.fire({
                customClass: {
                  title: "text-primary text-xl",
                },
                title: `Do you want to remove this product from your cart?`,
                imageUrl: `${product.imgSrc}`,
                imageHeight: 200,
                imageAlt: `${product.name}`,
                html: `<b>${product.name}</b>`,
                showCancelButton: true,
                confirmButtonColor: "#5C6451",
                cancelButtonColor: "#C6ADA8",
                confirmButtonText: "Remove Product",
              }).then((result) => {
                if (result.isConfirmed) {
                  currentUser.cartProducts = currentUser.cartProducts.filter(
                    (cartProduct) => cartProduct.id != product.id
                  );

                  totalQuantityValue = 0;
                  totalPriceValue = 0;
                  currentUser.cartProducts.forEach((product) => {
                    totalQuantityValue += product.quantity;
                    totalPriceValue += product.quantity * product.price;
                  });
                  totalQuantity.textContent = `Total Items: ${totalQuantityValue}`;
                  totalPrice.textContent = `PHP ${totalPriceValue}`;

                  Swal.fire(
                    `${product.name} removed`,
                    "Have fun shopping!",
                    "success"
                  );
                  updateDatabase();
                  productList.innerHTML = "";
                  generateCart(currentUser.cartProducts);
                }
              });
              break;
          }

          totalQuantityValue = 0;
          totalPriceValue = 0;
          currentUser.cartProducts.forEach((product) => {
            totalQuantityValue += product.quantity;
            totalPriceValue += product.quantity * product.price;
          });
          totalQuantity.textContent = `Total Items: ${totalQuantityValue}`;
          totalPrice.textContent = `PHP ${totalPriceValue}`;
          // Update Database with new values
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
          users[userIndex].cartProducts = currentUser.cartProducts;
          localStorage.setItem("users", JSON.stringify(users));

          // Toggle "-"" if product quantity is greater than 1 to prevent negative or zero quantity
          if (product.quantity > 1) {
            decreaseQuantity.classList.remove("invisible");
          } else {
            decreaseQuantity.classList.add("invisible");
          }
        });
      });
    });
  };

  if (currentUser) {
    // Update Cart Title with name
    cartTitle.textContent = `Hello ${currentUser.first_name}, Here's your cart `;
    // Generate Cart
    generateCart(currentUser.cartProducts);

    checkoutButton.addEventListener("click", (e) => {
      e.preventDefault();
      totalQuantityValue = 0;
      totalPriceValue = 0;
      currentUser.cartProducts.forEach((product) => {
        totalQuantityValue += product.quantity;
        totalPriceValue += product.quantity * product.price;
      });
      if (!(currentUser.cartProducts.length === 0)) {
        Swal.fire({
          customClass: {
            title: "text-primary text-xl",
          },
          title: `Thank you for buying from us!`,
          html: `You have bought a total of <em>${totalQuantityValue} items</em>, with a total cost of <b>PHP ${totalPriceValue}</b>`,
          confirmButtonColor: "#5C6451",
          confirmButtonText: "Great!",
        }).then(function () {
          currentUser.cartProducts = [];
          updateDatabase();
          productList.innerHTML = "";
          totalQuantity.textContent = `Total Items: 0`;
          totalPrice.textContent = `PHP 0`;
        });
      }
    });
  }

  const updateDatabase = () => {
    // Update Database with new values
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    users[userIndex].cartProducts = currentUser.cartProducts;
    localStorage.setItem("users", JSON.stringify(users));
  };

  totalQuantity.textContent = `Total Items: ${totalQuantityValue}`;
  totalPrice.textContent = `PHP ${totalPriceValue}`;
}
