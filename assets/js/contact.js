import * as components from "./components/components.js";
import * as activeNav from "./utils/activeNav.js";

let users = JSON.parse(localStorage.getItem("users"));

// nodes selection
const contactForm = document.forms.namedItem("contact");
let inquiries = JSON.parse(localStorage.getItem("inquiries"));

const submitForm = (data) => {
  if (isValidFirstName(data.firstName, 1, 20))
    if (isValidLastName(data.lastName, 1, 20))
      if (isValidEmail(data.email)) {
        let inquiry = {
          first_name: data.firstName,
          last_name: data.lastName,
          email: data.email,
          inquiryType: data.inquiry,
          message: data.message,
        };

        inquiries.push(inquiry);

        localStorage.setItem("inquiries", JSON.stringify(inquiries));
        Swal.fire({
          title: "Confirmation",
          text: "Message Sent!",
          icon: "success",
          confirmButtonColor: "#5C6451",
          confirmButtonText: "Continue",
        }).then(function () {
          contactForm.reset();
        });
      }
};

const isValidFirstName = (firstName, minLen, maxLen) => {
  let firstNameLength = firstName.length;
  if (
    firstNameLength == 0 ||
    firstNameLength > maxLen ||
    firstNameLength < minLen
  ) {
    // || - Or operator
    alert(
      "First Name should not be empty / length must be between " +
        minLen +
        " to " +
        maxLen
    );
    firstName.focus();
    return false;
  } else if (!isAlpha(firstName)) {
    //! - Not operator
    alert("Enter alphabets only");
    firstName.focus();
    return false;
  }
  return true;
};

const isValidLastName = (lastName, minLen, maxLen) => {
  let lastNameLength = lastName.length;
  if (
    lastNameLength == 0 ||
    lastNameLength > maxLen ||
    lastNameLength < minLen
  ) {
    // || - Or operator
    alert(
      "First Name should not be empty / length must be between " +
        minLen +
        " to " +
        maxLen
    );
    lastName.focus();
    return false;
  } else if (!isAlpha(lastName)) {
    //! - Not operator
    alert("Enter alphabets only");
    lastName.focus();
    return false;
  }
  return true;
};

const isValidEmail = (email) => {
  let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (email.match(mailformat)) {
    return true;
  } else {
    alert("Enter valid email address!");
    email.focus();
    return false;
  }
};

const isAlpha = (input) => {
  let characters = /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/; // Regular Expression [ ] - Options , A-Z - A,B, C ... Z, ^ - Any
  if (input.match(characters)) {
    return true;
  }
  return false;
};

if (contactForm)
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = {};
    const elements = e.target.elements;
    for (let i = 0; i < elements.length; i++) {
      data[elements[i].name] = elements[i].value;
    }
    submitForm(data);
  });
