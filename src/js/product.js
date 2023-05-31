import { setLocalStorage, getParam} from "./utils.mjs";
import { findProductById } from "./productData.mjs";
import { productDetails } from "./productDetails.mjs"

const productId = getParam("product");
console.log(findProductById(productId));
productDetails(productId)

function addProductToCart(product) {
  setLocalStorage("so-cart", product);
}

