// Importing Components./components.js
import * as components from "./components/components.js";
import * as activeNav from "./utils/activeNav.js";

// Initialize variable for DOM manipulation
const faqList = document.querySelector("#faqList");

// Initialize Data for the FAQs Section
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

// For each object in the faqData, generate a component g-faq
faqData.forEach((faq, i) => {
  // Create an element g-faq and pass the data then append to the parent element
  const newFAQItem = document.createElement("g-faq");
  newFAQItem.setAttribute("data", JSON.stringify(faq));
  newFAQItem.setAttribute("index", JSON.stringify(i));
  faqList.appendChild(newFAQItem);

  // Initialize variables for DOM manipulation
  const faqButton = document.querySelector(`#faqButton-${i}`);
  const faqIcon = document.querySelector(`#faqIcon-${i}`);
  const faqAnswer = document.querySelector(`#faqAnswer-${i}`);

  // If the faq is closed, open the details on click and vice versa
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
