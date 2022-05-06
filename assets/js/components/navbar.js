export class Navbar extends HTMLElement {
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
              height="50"
              width="50"
              alt="Gawang Diwa Logo"
          /></a>
        </div>
        <div>
          <ul class="navLinks space-x-4">
            <li class="inline">
              <a
                class="text-lg font-semibold uppercase text-primary  hover:text-secondary"
                href="./index.html"
                >Home</a
              >
            </li>
            <li class="inline">
              <a
                class="text-lg font-semibold uppercase text-primary hover:text-secondary"
                href="./products.html"
                >Products</a
              >
            </li>

            <li class="inline">
              <a
                class="text-lg font-semibold uppercase text-primary hover:text-secondary"
                href="./cart.html"
                >Cart</a
              >
            </li>
            <li class="inline">
              <button
                class="transform rounded-sm bg-secondary px-5 py-2 font-semibold text-primary transition duration-200 ease-in-out hover:scale-102 hover:brightness-110"
              >
                <a id="cta" href="./login.html">Login/Register</a>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>`;
  }
}

window.customElements.define("nav-bar", Navbar);
