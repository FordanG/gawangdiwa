// Importing Components./components.js
import * as components from "./components/components.js";
import * as activeNav from "./utils/activeNav.js";

const faqList = document.querySelector("#faqList");

const faqData = [
  {
    faq: "Where can we follow you?",
    faqAnswer:
      "You can follow us on Facebook, Instagram, and TikTok: @gawangdiwa",
  },
  {
    faq: "How long can I expect my order to arrive?",
    faqAnswer:
      "Preserving flowers takes some delicate work. Please wait for atleast 1-2 weeks for your orders to be finished. Once you have paid, you can contact us for updates.",
  },
  {
    faq: "Do you make custom accessories?",
    faqAnswer:
      "It depends on the order, but we can make use of your fresh flowers to create a unique piece for you!",
  },
];

// console.log(JSON.parse(JSON.stringify(data)));

faqData.forEach((faq, i) => {
  const newFAQItem = document.createElement("faq-item");
  newFAQItem.setAttribute("data", JSON.stringify(faq));
  newFAQItem.setAttribute("index", JSON.stringify(i));
  faqList.appendChild(newFAQItem);

  const faqButton = document.querySelector(`#faqButton-${i}`);
  const faqIcon = document.querySelector(`#faqIcon-${i}`);
  const faqAnswer = document.querySelector(`#faqAnswer-${i}`);

  let isOpen = false;
  faqButton.addEventListener("click", (e) => {
    if (!isOpen) {
      faqIcon.classList += " transform rotate-180";
      faqAnswer.classList.remove("hidden");
      isOpen = true;
    } else {
      faqIcon.classList.remove("transform");
      faqAnswer.classList.add("hidden");
      faqIcon.classList.remove("rotate-180");
      isOpen = false;
    }
  });
});
