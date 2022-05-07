import * as components from "./components/components.js";
import * as activeNav from "./utils/activeNav.js";
import * as auth from "./utils/auth.js";

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
  let currentUser = JSON.parse(localStorage.getItem("currentUser"));
  let users = JSON.parse(localStorage.getItem("users"));
  const inquiries = JSON.parse(localStorage.getItem("inquiries"));

  const adminSubtitle = document.querySelector("#adminSubtitle");
  const adminMain = document.querySelector("#adminMain");

  (() => {
    adminSubtitle.textContent = `Hello, ${currentUser.first_name} ${currentUser.last_name}. Welcome to the Profile Page!`;
  })();

  const profileSection = document.querySelector("#profile");
  const profileButton = document.querySelector("#profileButton");
  const profileList = document.querySelector("#profileList");

  function generateList(database, databaseType) {
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

    let editStatus = false;
    const editProfile = document.forms.namedItem("editProfile");
    const editButton = document.querySelector("#editButton");
    editProfile.addEventListener("submit", (e) => {
      e.preventDefault();
      if (e.submitter.id == "editButton") {
        if (editStatus) {
          const data = {};
          const elements = e.target.elements;
          for (let i = 0; i < elements.length; i++) {
            data[elements[i].name] = elements[i].value;
          }

          const newUserDetails = {
            id: currentUser.id,
            first_name: data.firstName,
            last_name: data.lastName,
            email: data.email,
            password: currentUser.password,
            cartProducts: currentUser.cartProducts,
            role: currentUser.role,
          };
          const userIndex = users.findIndex(
            (user) => user.email === currentUser.email
          );
          currentUser = newUserDetails;
          users[userIndex] = currentUser;
          localStorage.setItem("currentUser", JSON.stringify(currentUser));
          localStorage.setItem("users", JSON.stringify(users));

          editStatus = false;
          Swal.fire({
            title: "Your account has been updated!",
            icon: "success",
            confirmButtonColor: "#5C6451",
            confirmButtonText: "Continue",
          }).then(function () {
            window.location = "./admin.html";
          });
        } else {
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
            if (result.isConfirmed) {
              editButton.innerText = "Save";
              const elements = e.target.elements;
              for (let i = 0; i < 3; i++) {
                elements[i].disabled = false;
              }
              elements[0].focus();
              editStatus = true;
            }
          });
        }
      } else {
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
          if (result.isConfirmed) {
            users = users.filter((user) => user.email != currentUser.email);
            localStorage.setItem("users", JSON.stringify(users));
            Swal.fire({
              title: "Your account has been deleted",
              text: "Create a new account to buy from Gawang Diwa!",
              icon: "success",
              confirmButtonColor: "#5C6451",
              confirmButtonText: "Continue",
            }).then(function () {
              auth.logout();
            });
          }
        });
      }
    });
  }

  generateList(currentUser, "profile");
}
