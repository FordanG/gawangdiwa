import * as components from "./components/components.js";
import * as activeNav from "./utils/activeNav.js";
import {
  isValidEmail,
  isValidFirstName,
  isValidLastName,
} from "./utils/formValidation.js";

// Initialize variables for DOM manipulation
const contactForm = document.forms.namedItem("contact");

// Initialize variables from localstorage database
let users = JSON.parse(localStorage.getItem("users"));
let inquiries = JSON.parse(localStorage.getItem("inquiries"));

// Submit Form Function
const submitForm = (data) => {
  // Checks for form validation
  if (isValidFirstName(data.firstName, 1, 20))
    if (isValidLastName(data.lastName, 1, 20))
      if (isValidEmail(data.email)) {
        // Stores the inquiry data as object
        let inquiry = {
          first_name: data.firstName.value,
          last_name: data.lastName.value,
          email: data.email.value,
          inquiryType: data.inquiry.value,
          message: data.message.value,
        };

        // Add the new inquiry to the list of inquiries
        inquiries.push(inquiry);

        // Update the local database
        localStorage.setItem("inquiries", JSON.stringify(inquiries));

        // Confirmation message for the user in submitting an inquiry
        Swal.fire({
          title: "Confirmation",
          text: "Message Sent!",
          icon: "success",
          confirmButtonColor: "#5C6451",
          confirmButtonText: "Continue",
        }).then(function () {
          // Reset the contact form
          contactForm.reset();
        });
      }
};

// Add a submit event listener to the form
contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Collect data from the form
  const data = {};
  const elements = e.target.elements;
  for (let i = 0; i < elements.length; i++) {
    data[elements[i].name] = elements[i];
  }
  // Submit the form data for validation and saving
  submitForm(data);
});
