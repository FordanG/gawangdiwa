import * as components from "./components/components.js";
import * as activeNav from "./utils/activeNav.js";
import * as auth from "./utils/auth.js";

// Make the admin page page accesible for logged in users only
if (!auth.auth) {
  (() => {
    Swal.fire({
      title: "User Not Logged In",
      text: "Please login first before accessing the admin page",
      icon: "error",
      confirmButtonColor: "#5C6451",
      confirmButtonText: "Continue",
    }).then(function () {
      window.location = "./login.html";
    });
  })();
} else {
  if (window.location.pathname == "/admin.html") {
    // Initialize variables for DOM manipulation
    const profileSection = document.querySelector("#profile");
    const profileButton = document.querySelector("#profileButton");
    const profileList = document.querySelector("#profileList");

    const membersSection = document.querySelector("#members");
    const membersButton = document.querySelector("#membersButton");
    const membersList = document.querySelector("#membersList");

    const inquiriesSection = document.querySelector("#inquiries");
    const inquiriesButton = document.querySelector("#inquiriesButton");
    const inquiriesList = document.querySelector("#inquiriesList");

    const adminSubtitle = document.querySelector("#adminSubtitle");

    // Initialize variables from localstorage database
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    let users = JSON.parse(localStorage.getItem("users"));
    const inquiries = JSON.parse(localStorage.getItem("inquiries"));

    //   Update subtitle to the user's name
    (() => {
      adminSubtitle.textContent = `Hello, ${currentUser.first_name} ${currentUser.last_name}. Welcome to the Admin Page!`;
    })();

    // Initialize active and inactive button states
    const inactiveButton =
      "px-5 py-2 rounded-md text-gray-700 font-bold hover:text-secondary transition duration-200 ease-in-out";

    const activeButton =
      "px-5 py-2 border-secondary border-2 rounded-md text-gray-700 font-bold hover:text-secondary transition duration-200 ease-in-out";

    // Group page navigation buttons in an array
    const navButtons = [profileButton, membersButton, inquiriesButton];

    // Group admin sections in an array
    const adminSections = [profileSection, membersSection, inquiriesSection];

    // For each of the nav buttons, add a click event funtionality
    navButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // For each button click, make all the nav buttons inactive
        navButtons.forEach((button) => (button.classList = inactiveButton));

        // Hide all admin sections
        adminSections.forEach((section) => {
          section.classList.add("hidden");
        });

        //   Make the button clicked active
        button.classList = activeButton;

        //   For different ids of the button show a different section
        switch (button.id) {
          // Show Profile Section
          case "profileButton":
            profileSection.classList.remove("hidden");
            break;
          // Show Members Section
          case "membersButton":
            membersSection.classList.remove("hidden");
            break;
          // Show Inquiries Section
          case "inquiriesButton":
            inquiriesSection.classList.remove("hidden");
            break;
        }
      });
    });

    // Generate the list for all the sections
    generateList(currentUser, "profile");
    generateList(users, "members");
    generateList(inquiries, "inquiries");
  }
}

// Generates the admin page dynamic content and adds functionality to buttons
export function generateList(database, databaseType) {
  // Initialize variables from localstorage database
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let users = JSON.parse(localStorage.getItem("users"));

  //   If the database type is profile, generate profile page
  if (databaseType == "profile") {
    // Generates a new table row for the profile details
    const newRow = document.createElement("tr");
    newRow.classList.add("text-gray-700");
    newRow.innerHTML = `
              <td class="border-b-2 p-4 dark:border-dark-5"><input class="focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" name="firstName" value="${database.first_name}"  disabled/></td>
              <td class="border-b-2 p-4 dark:border-dark-5">
                <input class="focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="text" name="lastName" value="${database.last_name}" disabled /> 
              </td>
              <td class="border-b-2 p-4 dark:border-dark-5"><input class="w-72 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="email" name="email" value="${database.email}" disabled /> </td>
              <td class="border-b-2 p-4 dark:border-dark-5"><button
            class="bg-primary rounded-lg px-8 py-2 transform text-white font-bold hover:scale-102 transition duration-200 ease-in-out hover:brightness-110" id="editButton" type="submit"
          >
            Edit
          </button></td>
              <td class="border-b-2 p-4 dark:border-dark-5"><button
            class="bg-red-800 rounded-lg px-8 py-2 transform text-white font-bold hover:scale-102 transition duration-200 ease-in-out hover:brightness-110"
            id="deleteButton"
          >
            Delete
          </button></td>
            `;
    profileList.appendChild(newRow);

    // initialize new buttons for DOM manipulation
    let editStatus = false;
    const editProfile = document.forms.namedItem("editProfile");
    const editButton = document.querySelector("#editButton");

    // Add a click event listener for the form buttons in profile
    editProfile.addEventListener("submit", (e) => {
      e.preventDefault();

      // if the button is edit
      if (e.submitter.id == "editButton") {
        // If the button is pressed the first time, it will allow changes in the profile
        // For the second time, it will save the details from the form
        if (editStatus) {
          //   Get the data from the form
          const data = {};
          const elements = e.target.elements;
          for (let i = 0; i < elements.length; i++) {
            data[elements[i].name] = elements[i].value;
          }

          // Store input data as New User Details
          const newUserDetails = {
            id: currentUser.id,
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            password: currentUser.password,
            cartProducts: currentUser.cartProducts,
            role: currentUser.role,
          };

          //   Get the user index
          const userIndex = users.findIndex(
            (user) => user.email === currentUser.email
          );

          //   Update the current user with the new details
          currentUser = newUserDetails;
          users[userIndex] = currentUser;

          //   Update the database
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
          localStorage.setItem("users", JSON.stringify(users));

          editStatus = false;

          //   Show the user a success message for updating the account
          Swal.fire({
            title: "Your account has been updated!",
            icon: "success",
            confirmButtonColor: "#5C6451",
            confirmButtonText: "Continue",
          }).then(function () {
            window.location = "./admin.html";
          });
        } else {
          //   After the user presses the edit button, a confirmation message will show up
          Swal.fire({
            customClass: {
              title: "text-primary text-2xl",
            },
            title: `Are you sure you want to edit this account?`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#5C6451",
            cancelButtonColor: "#991B1E",
            confirmButtonText: "Edit Account",
          }).then((result) => {
            // If the user confirms that they want to edit, the form will be enabled for input
            // The button text will also be changed from edit to save
            if (result.isConfirmed) {
              editButton.innerText = "Save";
              const elements = e.target.elements;
              for (let i = 0; i < 3; i++) {
                elements[i].disabled = false;
                elements[i].classList =
                  "block w-full appearance-none rounded border border-gray-200 bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:border-gray-500 focus:bg-white focus:outline-none";
              }
              elements[0].focus();
              editStatus = true;
            }
          });
        }
      } else {
        // If the user presses the delete Button
        // A confirmation message to delete account
        Swal.fire({
          customClass: {
            title: "text-primary text-2xl",
          },
          title: `Do you want to delete this account?`,
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#5C6451",
          cancelButtonColor: "#991B1E",
          confirmButtonText: "Delete Account",
        }).then((result) => {
          //   If user confirms they want to delete their account
          if (result.isConfirmed) {
            //   Remove the current user from the list of users
            users = users.filter((user) => user.email != currentUser.email);

            //   Update the database with the changes
            localStorage.setItem("users", JSON.stringify(users));

            //   Show a confirmation message for account deletion
            Swal.fire({
              title: "Your account has been deleted",
              text: "Create a new account to buy from Gawang Diwa!",
              icon: "success",
              confirmButtonColor: "#5C6451",
              confirmButtonText: "Continue",
            }).then(function () {
              //   logs out the user from the site and removes the current user from the database
              auth.logout();
            });
          }
        });
      }
    });
  } else {
    //   Else a different method will applied
    database.forEach((data, index) => {
      // Generates a new table row for the section details
      const newRow = document.createElement("tr");
      newRow.classList.add("text-gray-700");

      // For each database type, generate different table rows
      switch (databaseType) {
        //   If the database type is members
        case "members":
          newRow.innerHTML = `
              <td class="border-b-2 p-4 dark:border-dark-5">${index + 1}</td>
              <td class="border-b-2 p-4 dark:border-dark-5">
                ${data.first_name + " " + data.last_name} 
              </td>
              <td class="border-b-2 p-4 dark:border-dark-5">${data.email}</td>
            `;
          membersList.appendChild(newRow);
          break;

        //   If the database type is inquiries
        case "inquiries":
          newRow.innerHTML = `
              <td class="border-b-2 p-4 dark:border-dark-5">${index + 1}</td>
              <td class="border-b-2 p-4 dark:border-dark-5">
                ${data.first_name + " " + data.last_name} 
              </td>
              <td class="border-b-2 p-4 dark:border-dark-5">${data.email}</td>
              <td class="border-b-2 p-4 dark:border-dark-5">${
                data.inquiryType
              }</td>
              <td class="border-b-2 p-4 dark:border-dark-5">${data.message}</td>
            `;
          inquiriesList.appendChild(newRow);
          break;
        default:
        // code block
      }
    });
  }
}
