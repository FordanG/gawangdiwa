export class GFAQItem extends HTMLElement {
  constructor() {
    super();
    this.data = {};
    this.index = 0;
  }

  connectedCallback() {
    this.data = JSON.parse(this.getAttribute("data"));
    this.index = this.getAttribute("index");
    this.removeAttribute("data");
    this.removeAttribute("index");
    this.render();
  }

  render() {
    this.innerHTML = `<div class="border-b">
              <button
                type="button"
                aria-label="Open item"
                title="Open item"
                class="flex w-full items-center justify-between p-4 focus:outline-none"
                id="faqButton-${this.index}"
              >
                <p class="text-lg font-medium text-left">
                  ${this.data.faq}
                </p>
                <!-- Add "transform rotate-180" classes on svg, if is open" -->
                <svg
                  viewBox="0 0 24 24"
                  class="w-3 text-gray-600 transition-transform duration-200"
                  id="faqIcon-${this.index}"
                >
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    points="2,7 12,17 22,7"
                    stroke-linejoin="round"
                  ></polyline>
                </svg>
              </button>
              <div id="faqAnswer-${this.index}" class="hidden p-4 pt-0">
                <p class="text-gray-700">
                  ${this.data.faqAnswer}
                </p>
              </div>
            </div>`;
  }
}

window.customElements.define("g-faq", GFAQItem);
