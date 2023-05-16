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
    closeBtnEl.addEventListener("click", () => parent.removeChild(wrapperEl));
  }

  return wrapperEl;
};
