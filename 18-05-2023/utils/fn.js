import { cartItems, cartEl } from "../script.js";

export const cE = (el) => document.createElement(el);
export const qS = (el) => document.querySelector(el);

export const qSA = (els) => document.querySelectorAll(els);

export const formatDescriptionText = (str) =>
  str.split(" ").splice(0, 3).join(" ") + " ...";

// CARD
export const createProduct = (data) => {
  //data = oggetto
  const wrapperEl = cE("div");
  const textWrapperEl = cE("div");
  const imageEl = cE("img");
  const titleEl = cE("h3");
  const descriptionEl = cE("p");
  const ratingEl = cE("p");
  const priceEl = cE("h4");
  const buttonEl = cE("button");

  wrapperEl.className = "productCard";
  wrapperEl.setAttribute("id", data.id);
  textWrapperEl.className = "productCard__text";
  imageEl.src = data.thumbnail;
  imageEl.alt = data.title;
  titleEl.textContent = data.title;
  descriptionEl.textContent = formatDescriptionText(data.description);
  ratingEl.textContent = data.rating;
  priceEl.textContent = data.price + " $";
  buttonEl.textContent = "Add to Cart";

  textWrapperEl.append(titleEl, descriptionEl, ratingEl, priceEl, buttonEl);

  wrapperEl.append(imageEl, textWrapperEl);

  return wrapperEl;
};

// MODALE
export const createProductModal = (productData, parent = null) => {
  const wrapperEl = cE("div");
  const overlayEl = cE("div");
  const galleryEl = cE("div");
  const mainImgEl = cE("img");
  // const thumbWrapperEl = cE("div"); //Contenitore di più img
  const textEl = cE("div");
  const mainTextEl = cE("div");
  const mainTextTitle = cE("h1");
  const mainTextDescEl = cE("p");
  const mainTextRateEl = cE("p");
  const buyTextEl = cE("div");
  const buyTextFirstBtnEl = cE("button");
  const buyTextSecondBtnEl = cE("button");
  const closeBtnEl = cE("button");

  wrapperEl.className = "modalProduct";
  galleryEl.className = "modalProduct__gallery";
  mainImgEl.src = productData.thumbnail;
  mainImgEl.alt = productData.title;

  textEl.className = "modalProduct__text";
  mainTextEl.className = "modalMainText";
  mainTextTitle.textContent = productData.title;
  mainTextDescEl.textContent = productData.description;
  mainTextRateEl.textContent = productData.rating;

  buyTextEl.className = "modalMainBuy";
  buyTextFirstBtnEl.textContent = "Aggiungi al carrello";
  buyTextSecondBtnEl.textContent = "Torna indietro";

  closeBtnEl.className = "closeModalBtn";
  closeBtnEl.textContent = "X";

  mainTextEl.append(mainTextTitle, mainTextDescEl, mainTextRateEl);
  buyTextEl.append(buyTextFirstBtnEl, buyTextSecondBtnEl);
  galleryEl.append(mainImgEl);
  textEl.append(mainTextEl, buyTextEl);
  wrapperEl.append(galleryEl, textEl, closeBtnEl);

  if (parent) {
    overlayEl.addEventListener("click", () => parent.removeChild(wrapperEl));
    buyTextSecondBtnEl.addEventListener("click", () =>
      parent.removeChild(wrapperEl)
    ); // Chiusura modale da button (Torna indietro)
    closeBtnEl.addEventListener("click", () => parent.removeChild(wrapperEl)); // Chiusura modale da button (X)
  }

  buyTextFirstBtnEl.addEventListener("click", () => {
    alert("Prodotto aggiunto al carrello!");
    cartItems.push(productData);
    parent.removeChild(wrapperEl);

    if (cartItems.length >= 1) {
      cartEl.classList.add("itemsInCart");
    }
  });

  return wrapperEl;
};

// CART

export const createCartModal = (cartItems, parent = null) => {
  const wrapperEl = cE("div");
  const totalItemsEl = cE("h2");
  const priceEl = cE("p");
  const removeAllBtnEl = cE("button");
  const closeBtnEl = cE("button");

  wrapperEl.className = "cartModal";
  totalItemsEl.className = "totalProductCartModal";
  totalItemsEl.textContent = `Prodotti presenti nel carrello: ${cartItems.length}`;
  removeAllBtnEl.className = "cartModal__removeBtn"; // Da completare!
  removeAllBtnEl.textContent = "Svuota carrello";
  closeBtnEl.className = "cartModal__closeBtn";
  closeBtnEl.textContent = "X";
  priceEl.textContent = `Totale: ${cartItems.reduce(
    (acc, item) => acc + item.price,
    0
  )}`;

  cartItems.forEach((item) => {
    wrapperEl.append(createProduct(item));
  });

  wrapperEl.prepend(totalItemsEl, priceEl, closeBtnEl, removeAllBtnEl);

  // cartItems.forEach((item) => {
  //   wrapperEl.append(closeBtnEl, createProduct(item), totalItemsEl, priceEl);
  // });

  closeBtnEl.addEventListener("click", () => {
    parent.removeChild(wrapperEl);
    cartEl.disabled = false;
  });

  return wrapperEl;
};
