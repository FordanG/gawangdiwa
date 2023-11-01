export class GNavbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <nav class="sticky top-0 z-50 flex justify-center bg-white p-5 shadow">
        <div class="container flex items-center justify-between">
          <div>
            <a href="index">
              <img src="./assets/img/logo.png" height="60" width="60" alt="Gawang Diwa Logo" />
            </a>
          </div>
          <div class="hidden lg:flex">
            <ul class="navLinks space-x-8 flex-row flex">
              <!-- <li>
                <a class="text-lg font-bold tracking-wide uppercase text-primary hover:text-secondary" href="./index">Home</a>
              </li> -->
              <!-- <li>
                <a class="max-w-full font-semibold text-lg rounded-lg border border-[#5C6451] bg-gradient-to-r from-[#5C6451] to-[#889476] px-8 py-2 text-center text-sm text-white transition duration-300 hover:shadow-md hover:shadow-[#5c6451]/50" href="./products">Our Products</a>
              </li> -->
              <!-- <li>
                <a class="text-lg font-bold tracking-wide uppercase text-primary hover:text-secondary" href="./contact">Contact Us</a>
              </li>
              <li>
                <a id="cta" href="./login" class="max-w-full font-semibold text-lg rounded-lg border border-[#5C6451] bg-gradient-to-r from-[#5C6451] to-[#889476] px-8 py-2 text-center text-sm text-white transition duration-300 hover:shadow-md hover:shadow-[#5c6451]/50">
                  Login/Register
                </a>
              </li> -->
            </ul>
          </div>
          <!-- <button id="mobile-menu-button" class="lg:hidden focus:outline-none">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button> -->
        </div>
        <!-- <div id="mobile-menu" class="fixed inset-0 hidden bg-white z-40 lg:hidden">
          <div class="pt-10 pb-5 flex flex-col items-center justify-center space-y-4">
            <a class="text-2xl font-bold tracking-wide uppercase text-primary hover:text-secondary" href="./index">Home</a>
            <a class="max-w-full font-semibold text-lg rounded-lg border border-[#5C6451] bg-gradient-to-r from-[#5C6451] to-[#889476] px-8 py-2 text-center text-sm text-white transition duration-300 hover:shadow-md hover:shadow-[#5c6451]/50" href="./products">Our Products</a>
            <a class="text-2xl font-bold tracking-wide uppercase text-primary hover:text-secondary" href="./contact">Contact Us</a>
            <a id="cta-mobile" href="./login" class="max-w-full font-semibold text-lg rounded-lg border border-[#5C6451] bg-gradient-to-r from-[#5C6451] to-[#889476] px-8 py-2 text-center text-sm text-white transition duration-300 hover:shadow-md hover:shadow-[#5c6451]/50">
              Login/Register
            </a>
          </div>
        </div> -->
      </nav>
    `;

    this.setupMobileMenu();
  }

  setupMobileMenu() {
    const mobileMenuButton = this.querySelector("#mobile-menu-button");
    const mobileMenu = this.querySelector("#mobile-menu");

    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });

    // Close the mobile menu when a link is clicked
    const mobileMenuLinks = this.querySelectorAll("#mobile-menu a");
    mobileMenuLinks.forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenu.classList.add("hidden");
      });
    });
  }
}

window.customElements.define("g-nav", GNavbar);
