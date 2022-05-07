import * as components from "./components/components.js";
import * as activeNav from "./utils/activeNav.js";
import * as auth from "./utils/auth.js";
import { generateList } from "./admin.js";

// Make the profile page accesible for logged in users only
if (!auth.auth) {
  (() => {
    Swal.fire({
      title: "User Not Logged In",
      text: "Please login first before accessing the profile page",
      icon: "error",
      confirmButtonColor: "#5C6451",
      confirmButtonText: "Continue",
    }).then(function () {
      window.location = "./login.html";
    });
  })();
} else {
  // Initialize variables for DOM manipulation
  const profileSection = document.querySelector("#profile");
  const profileButton = document.querySelector("#profileButton");
  const profileList = document.querySelector("#profileList");

  const adminSubtitle = document.querySelector("#adminSubtitle");

  // Initialize variables from localstorage database
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let users = JSON.parse(localStorage.getItem("users"));

  //   Update subtitle to the user's name
  (() => {
    adminSubtitle.textContent = `Hello, ${currentUser.first_name} ${currentUser.last_name}. Welcome to the Profile Page!`;
  })();

  // Generates the profile page dynamic content and adds functionality to buttons
  generateList(currentUser, "profile");
}
