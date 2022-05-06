export class GFooter extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `<footer
        class="mt-10 mx-auto px-4 pt-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8"
      >
        <div class="row-gap-6 mb-4 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div class="sm:col-span-2">
            <a
              href="./index.html"
              aria-label="Go home"
              title="Gawang Diwa"
              class="inline-flex items-center"
            >
              <img
                src="./assets/img/logo.png"
                height="60"
                width="60"
                alt="Gawang Diwa Logo"
              />
              <span
                class="ml-4 text-xl font-bold uppercase tracking-widest text-gray-800"
                >Gawang Diwa</span
              >
            </a>
            <div class="mt-2 lg:max-w-sm">
              <p class="text-sm text-gray-800">
                Gawang Diwa provides unique hand-made products and visual art
                commissions combined with fine artistry, quality service, and
                soulful expression.
              </p>
            </div>
          </div>
          <div class="space-y-2 text-sm">
            <p class="text-base font-bold tracking-wide text-gray-900">
              Contacts
            </p>
            <div class="flex">
              <p class="mr-1 text-gray-800">Phone:</p>
              <a
                href="tel:639661338972"
                aria-label="Our phone"
                title="Our phone"
                class="transition-colors duration-300 hover:text-primary"
                >+63 966 133 8972</a
              >
            </div>
            <div class="flex">
              <p class="mr-1 text-gray-800">Email:</p>
              <a
                href="mailto:gawangdiwa@gmail.com"
                aria-label="Our email"
                title="Our email"
                class="transition-colors duration-300 hover:text-primary"
                >gawangdiwa@gmail.com</a
              >
            </div>
          </div>
          <div>
            <span class="text-base font-bold tracking-wide text-gray-900"
              >Social Media</span
            >
            <div class="mt-1 flex items-center space-x-3">
              <a
                href="https://www.facebook.com/gawangdiwa"
                class="text-gray-500 transition-colors duration-300 hover:text-tertiary"
              >
                <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                  <circle cx="15" cy="15" r="4"></circle>
                  <path
                    d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"
                  ></path>
                </svg>
              </a>
              <a
                href="https://www.instagram.com/gawangdiwa/"
                class="text-gray-500 transition-colors duration-300 hover:text-tertiary"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
                  <path
                    d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div
          class="flex flex-col-reverse justify-between border-t py-5 lg:flex-row"
        >
          <p class="text-sm text-gray-600">
            © Copyright 2022 Gawang Diwa All rights reserved.<span class="invisible "></span>
          </p>
          <ul
            class="mb-3 flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-5 lg:mb-0"
          >
            <li>
              <a
                href="./privacy-policy.html"
                class="text-sm text-gray-600 transition-colors duration-300 hover:text-tertiary"
                >Privacy Policy</a
              >
            </li>
          </ul>
        </div>
      </footer>`;
  }
}

window.customElements.define("g-footer", GFooter);
