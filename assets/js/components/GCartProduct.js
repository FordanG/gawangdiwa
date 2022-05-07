export class GCartProduct extends HTMLElement {
  constructor() {
    super();
    this.data = "";
  }

  connectedCallback() {
    this.data = JSON.parse(this.getAttribute("data"));
    this.removeAttribute("data");
    console.log(this.data);
    this.render();
  }

  render() {
    this.innerHTML = `<div class="-mx-8 flex items-center px-6 py-5 hover:bg-gray-100">
  <div class="flex w-2/6">
    <div class="w-32">
      <img
        width="120"
        height="120"
        src="${this.data.imgSrc}"
        alt="${this.data.name}"
      />
    </div>
    <div class="ml-4 flex flex-grow flex-col justify-center">
      <span class="text-xl font-bold">${this.data.name}</span>
      
    </div>
  </div>
  <div class="flex w-1/6 justify-center">
    <svg id="decreaseQuantity-${
      this.data.id
    }" class="w-3 fill-current text-gray-600 ${
      this.data.quantity <= 1 ? "invisible" : ""
    }" viewBox="0 0 448 512">
      <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
    </svg>

    <input id="quantity-${
      this.data.id
    }" class="mx-2 w-8 border text-center" type="text" value="${
      this.data.quantity
    }" disabled />

    <svg id="addQuantity-${
      this.data.id
    }" class="w-3 fill-current text-gray-600" viewBox="0 0 448 512">
      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
    </svg>
  </div>
  <span class="w-1/6 text-center text-sm font-semibold">PHP ${
    this.data.price
  }</span>
  <span class="w-1/6 text-center text-sm font-semibold" id="finalPrice-${
    this.data.id
  }">PHP ${this.data.price * this.data.quantity}</span>
  <div class="flex w-1/6 justify-center">
    <button
        href="#"
        class="text-xs font-semibold text-gray-500 hover:text-red-500 text-left"
        id="removeButton-${this.data.id}"
      >
        Remove
      </button>
  </div>
</div>`;
  }
}

window.customElements.define("g-cartproduct", GCartProduct);
