import * as init from "./init.js";

export const auth = JSON.parse(localStorage.getItem("isLoggedIn"));
export const currentUser = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser"))
  : "";
const navLinks = document.querySelector(".navLinks");
const cta = document.querySelector("#cta");

if (auth) {
  cta.text = "Logout";
  cta.href = "#";
  cta.addEventListener("click", (e) => {
    logout();
  });

  const cart = document.createElement("li");
  cart.classList.add("inline");
  cart.innerHTML = `
                <a
                class="text-lg font-bold tracking-wide uppercase text-primary hover:text-secondary px-4"
                href="./cart.html"
                ><i class="fas fa-shopping-cart"></i></a
              >
              `;
  navLinks.insertBefore(cart, navLinks.children[3]);

  if (currentUser.role == "admin") {
    const admin = document.createElement("li");
    admin.classList.add("inline");
    admin.innerHTML = `
                <a
                  class="text-lg font-bold tracking-wide uppercase text-primary  hover:text-secondary"
                  href="./admin.html" id="adminNav"
                  >Admin</a
                >
              `;
    navLinks.insertBefore(admin, navLinks.children[3]);
  } else {
    const profile = document.createElement("li");
    profile.classList.add("inline");
    profile.innerHTML = `
                <a
                  class="text-lg font-bold tracking-wide uppercase text-primary  hover:text-secondary"
                  href="./profile.html" id="profileNav"
                  >Profile</a
                >
              `;
    navLinks.insertBefore(profile, navLinks.children[3]);
  }
}

export function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");

  Swal.fire({
    title: "Confirmation",
    text: "Logout successful!",
    icon: "success",
    confirmButtonColor: "#5C6451",
    confirmButtonText: "Continue",
  }).then(function () {
    window.location = "./index.html";
  });
}
