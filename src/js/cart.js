import { getLocalStorage } from "./utils.mjs";

function renderCartContents() {
  // const cartItems = getLocalStorage("so-cart");
  const cartItems = [];
  for (let i = 1, len = localStorage.length - 1; i < len; i++) {
    let storageItem = JSON.parse(localStorage.getItem("so-cart"));
    cartItems.push(storageItem);
  }
  console.log(cartItems);
  const htmlItems = cartItems.map((item) => cartItemTemplate(item));
  document.querySelector(".product-list").innerHTML = htmlItems.join("");
}
function cartItemTemplate(item) {
  const newItem = `<li class="cart-card divider">
  <a href="#" class="cart-card__image">
    <img
      src="${item.Image}"
      alt="${item.Name}"
    />
  </a>
  <a href="#">
    <h2 class="card__name">${item.Name}</h2>
  </a>
  <p class="cart-card__color">${item.Colors[0].ColorName}</p>
  <p class="cart-card__quantity">qty: 1</p>
  <p class="cart-card__price">$${item.FinalPrice}</p>
</li>`;

  console.log(newItem);
  return newItem;
}

renderCartContents();