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
      "Stay updated and connect with us on our social media platforms: Facebook, Instagram, and TikTok. Follow our handle: @gawangdiwa.",
  },
  {
    faq: "What's the estimated delivery time for my preserved flowers?",
    faqAnswer:
      "Crafting preserved flowers requires meticulous attention to detail. Kindly allow a window of 3-4 weeks for your order to be completed. After payment, feel free to reach out for order updates.",
  },
  {
    faq: "How should I care for my preserved floral accessory?",
    faqAnswer:
      "Keep your floral accessory away from direct sunlight, moisture, and extreme temperatures. Store it in a cool, dry place to maintain its elegance and longevity.",
  },
  {
    faq: "Can I send flowers from any occasion for preservation?",
    faqAnswer:
      "Yes, flowers from any special occasion—be it weddings, anniversaries, birthdays, or even a memorable date—can be sent to us for preservation.",
  },
  {
    faq: "What if my flowers have already started to wilt?",
    faqAnswer:
      "While fresh flowers yield the best results, we can work with slightly wilted flowers. However, it's recommended to send them to us as soon as possible for optimal preservation.",
  },
  {
    faq: "Do you offer international shipping?",
    faqAnswer:
      "Currently, we focus on local deliveries. However, for special requests, please get in touch with us directly.",
  },
  {
    faq: "What payment methods do you accept?",
    faqAnswer:
      "We accept a variety of payment methods including bank transfers, credit cards, and select e-wallets. Contact us for more details.",
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
