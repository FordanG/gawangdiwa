// Exporting Components in A Folder

import { Navbar } from "./navbar.js";
// import { NavbarPrimary } from "./navbar-primary.js";
import { CartProduct } from "./cartProduct.js";
import { FAQItem } from "./faqItem.js";

const components = [Navbar, CartProduct, FAQItem];
export default components;
