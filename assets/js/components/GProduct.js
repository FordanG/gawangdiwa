export class GProduct extends HTMLElement {
  constructor() {
    super();
    this.data = "";
  }

  connectedCallback() {
    this.data = JSON.parse(this.getAttribute("data"));
    this.removeAttribute("data");
    this.render();
  }

  render() {
    this.innerHTML = `<div class="rounded-xl bg-white shadow-lg">
            <div class="flex flex-col items-center gap-y-4">
              <img
  src="${this.data.imgSrc}"
  class="w-full h-auto md:w-[354px] md:h-[354px] rounded-tr-xl rounded-tl-xl object-cover"
  alt="${this.data.name}"
/>
<div class="flex flex-col items-center">
  <p class="text-sm md:text-lg font-bold">${this.data.name}</p>
  <p class="text-xs md:text-base pb-4">PHP ${this.data.price}</p>
</div>
              <!-- <button
              id="cartButton-${this.data.id}"
                class="w-full rounded-br-xl rounded-bl-xl bg-zinc-50 py-4 shadow-lg transition duration-100 ease-in-out hover:bg-primary hover:font-bold hover:text-white"
              >
                Add to Cart
              </button> -->
            </div>
          </div>`;
  }
}

window.customElements.define("g-product", GProduct);
