import { cE, qS, createProduct } from "./fn.js";

const rootEl = qS("#root");
const productList = cE("div");
const productListTitle = cE("h3");

productList.className = "productList";
productListTitle.textContent = "Currated picks";

fetch("https://dummyjson.com/products")
.then((res) => res.json())
.then((data) =>
data.products.forEach((product) =>
productList.append(createProduct(product))
)
);

rootEl.append(productListTitle, productList);