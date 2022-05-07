import * as components from "./components/components.js";
import * as activeNav from "./utils/activeNav.js";
import {
  isValidFirstName,
  isValidLastName,
  isValidEmail,
  isValidPassword,
} from "./utils/formValidation.js";

// Initialize variables
const registrationForm = document.forms.namedItem("registration");
let users = JSON.parse(localStorage.getItem("users"));

// Adding Submit Event for the Registration Form
registrationForm.addEventListener("submit", (e) => {
  e.preventDefault();
  registerUser();
});

const registerUser = () => {
  // Get the HTML elements
  let firstName = registrationForm.firstName;
  let lastName = registrationForm.lastName;
  let email = registrationForm.email;
  let password = registrationForm.password;

  // Performs Form Validation Tasks
  if (isValidFirstName(firstName, 1, 20))
    if (isValidLastName(lastName, 1, 20))
      if (isValidEmail(email))
        if (!checkUser(email))
          if (isValidPassword(password, 6)) {
            //   Initialize a new user if it passes all the validation tasks
            let user = {
              id: users.length + 1,
              first_name: firstName.value,
              last_name: lastName.value,
              email: email.value,
              password: password.value,
              cartProducts: [],
              role: "user",
            };

            // Add new user to pool of users
            users.push(user);
            // Update localstorage database with the new changes
            localStorage.setItem("users", JSON.stringify(users));
            // Show a Success Modal for the Registration of the User
            Swal.fire({
              title: "Confirmation",
              text: "Registration successful!",
              icon: "success",
              confirmButtonColor: "#5C6451",
              confirmButtonText: "Continue",
            }).then(function () {
              // Brings the user to the login page if registration is succesful
              window.location = "./login.html";
            });
          }
};

// Matches the users email against the database of users
// If found then return the user details, if not, then return false
const checkUser = (email) => {
  const userFound = users.find((user) => user.email == email.value);

  // if new user email was found in the pool of user emails, inform that account exists already
  if (userFound) {
    Swal.fire({
      title: "User Found",
      text: "This email has been associated with an account already",
      icon: "error",
      confirmButtonColor: "#5C6451",
      confirmButtonText: "Continue",
    });
  }
  return userFound ? userFound : false;
};
