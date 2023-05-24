import { cartList } from "./credentials.js";
import { DELETE } from "./http.js";

export const cE = (type, content, ...attrs) => {
  const element = document.createElement(type);

  element.textContent = content;
  attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
  return element;
};

// export const loginModal = () => {
//   const wrapperEl = cE("form");
//   const usernameInputEl = cE("input");
//   const passwordInputEl = cE("input");
//   const submitBtnEl = cE("input");

//   wrapperEl.className = "login";
//   usernameInputEl.type = "text";
//   usernameInputEl.placeholder = "Username";
//   passwordInputEl.type = "password";
//   passwordInputEl.placeholder = "Password";
//   submitBtnEl.type = "submit";

//   wrapperEl.addEventListener("submit", (event) => {
//     event.preventDefault();

//     const isAuth = !!usersList.find(
//       (user) =>
//         user.username === event.srcElement[0].value &&
//         user.password === event.srcElement[1].value
//     );

//     if (isAuth) {
//       navbarEl.style.display = "flex";
//       heroEl.style.display = "flex";
//       rootEl.append(productListTitle, productList);
//       rootEl.removeChild(wrapperEl);
//     } else {
//       alert("Username e/o password non corretta");
//     }
//   });

//   wrapperEl.append(usernameInputEl, passwordInputEl, submitBtnEl);
//   return wrapperEl;
// };

export const productGen = (productData) => {
  const wrapperEl = cE("div", "", { name: "class", value: "cart" });

  const titleEl = cE("h4", productData.title, {
    name: "src",
    value: productData.title,
  });

  const priceEl = cE("p", "Price: " + productData.price, {
    name: "class",
    value: "cartItem__price",
  });

  const quantityEl = cE("p", "Quantity: " + productData.quantity, {
    name: "class",
    value: "cartItem__quantity",
  });

  wrapperEl.append(titleEl, priceEl, quantityEl);

  wrapperEl.addEventListener("click", () => {
    const isConfirmed = confirm("Confermi di voler eliminare il prodotto?");
    if (isConfirmed) DELETE("/carts/${productData.id}");
  });

  return wrapperEl;
};
