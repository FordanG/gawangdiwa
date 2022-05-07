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

  if (currentUser.role == "admin") {
    const admin = document.createElement("li");
    console.log(admin);
    admin.classList.add("inline");
    admin.innerHTML = `
                <a
                  class="text-lg font-bold tracking-wide uppercase text-primary  hover:text-secondary"
                  href="./admin.html" id="adminNav"
                  >Admin</a
                >
              `;
    navLinks.insertBefore(admin, navLinks.children[3]);
  }
}

export function logout() {
  localStorage.removeItem("isLoggedIn");
  localStorage.removeItem("currentUser");

  Swal.fire({
    title: "Confirmation",
    text: "Logout successful!",
    icon: "success",
    confirmButtonText: "Continue",
  }).then(function () {
    window.location = "./index.html";
  });
}
