// Exporting Components in A Folder
import * as init from "../utils/init.js";
import { GNavbar } from "./GNav.js";

import { GCartProduct } from "./GCartProduct.js";
import { GFAQItem } from "./GFaqItem.js";
import { GFooter } from "./GFooter.js";
import { GProduct } from "./GProduct.js";

const components = [GNavbar, GCartProduct, GFAQItem, GFooter, GProduct];
export default components;
