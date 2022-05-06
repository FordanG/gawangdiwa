import * as components from "./components/components.js";
import * as activeNav from "./utils/activeNav.js";
import { isValidEmail } from "./utils/formValidation.js";

// Initialize variables
const loginForm = document.forms.namedItem("login");
let users = JSON.parse(localStorage.getItem("users"));

// Adding Submit Event for the Login Form
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  loginUser();
});

const loginUser = () => {
  // Get the HTML elements
  let email = loginForm.email;
  let password = loginForm.password;

  // Checks if email is valid
  if (isValidEmail(email)) {
    // Matches the users email against the database of users
    const user = checkUser(email);

    // If user email exists, checks the user input if the password is correct
    if (user && user.password === password.value) {
      // Shows a modal for confirmation of Login Success
      Swal.fire({
        title: "Confirmation",
        text: "Login successful!",
        icon: "success",
        confirmButtonText: "Continue",
      }).then(function () {
        // Brings the user to the products page
        window.location = "./products.html";
      });

      // Sets the local database with the users login state and user details
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("currentUser", JSON.stringify(user));
    }
    //   If user email does not exist or password is incorrect
    else {
      // Shows a modal for a login failure
      Swal.fire({
        title: "Login Failed",
        text: "Please check your email and password",
        icon: "error",
        confirmButtonText: "Continue",
      });
    }
  }
};

// Matches the users email against the database of users
// If found then return the user details, if not, then return false
const checkUser = (email) => {
  const userFound = users.find((user) => user.email == email.value);
  return userFound ? userFound : false;
};
