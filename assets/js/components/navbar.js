export class Navbar extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<nav class="sticky top-0 z-50 flex justify-center bg-secondary p-5">
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
                class="text-lg font-semibold uppercase text-white  hover:text-secondary"
                href="./index.html"
                >Home</a
              >
            </li>
            <li class="inline">
              <a
                class="text-lg font-semibold uppercase text-white hover:text-secondary"
                href="./books.html"
                >Books</a
              >
            </li>

            <li class="inline">
              <a
                class="text-lg font-semibold uppercase text-white hover:text-secondary"
                href="./events.html"
                >Events</a
              >
            </li>
            <li class="inline">
              <a
                class="text-lg font-semibold uppercase text-white hover:text-secondary"
                href="./contact.html"
                >Contact</a
              >
            </li>
            <li class="inline">
              <button
                class="transform rounded-sm bg-secondary px-5 py-2 font-semibold text-white transition duration-200 ease-in-out hover:scale-102 hover:brightness-110"
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
