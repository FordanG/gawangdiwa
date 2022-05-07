export class GNavbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<nav class="sticky top-0 z-50 flex justify-center bg-white p-5 shadow">
      <div class="container flex items-center justify-between">
        <div>
          <a href="index.html"
            ><img
              src="./assets/img/logo.png"
              height="60"
              width="60"
              alt="Gawang Diwa Logo"
          /></a>
        </div>
        <div>
          <ul class="navLinks space-x-8">
            <li class="inline">
              <a
                class="text-lg font-bold tracking-wide uppercase text-primary  hover:text-secondary"
                href="./index.html"
                >Home</a
              >
            </li>
            <li class="inline">
              <a
                class="text-lg font-bold tracking-wide uppercase text-primary hover:text-secondary"
                href="./products.html"
                >Products</a
              >
            </li>
            <li class="inline">
              <a
                class="text-lg font-bold tracking-wide uppercase text-primary hover:text-secondary"
                href="./contact.html"
                >Contact Us</a
              >
            </li>

            
            <li class="inline">
              <a
                 id="cta"  href="./login.html" class="max-w-full font-semibold text-lg rounded-lg border border-[#5C6451] bg-gradient-to-r from-[#5C6451] to-[#889476] px-8 py-2 text-center text-sm text-white transition duration-300 hover:shadow-md hover:shadow-[#5c6451]/50"
              >
                Login/Register
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
  }
}

window.customElements.define("g-nav", GNavbar);
