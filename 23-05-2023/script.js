import { GET, POST, DELETE } from "./utils/http.js";
import { cE, productGen } from "./utils/fn.js";

// GET().then((data) => console.log(data));

// POST("/products/add", {
//   title: "Ciao",
// });

// DELETE("/products/1");

const bodyEl = document.querySelector("body");
const wrapperEl = cE("div", "", { name: "class", value: "cartList" });
const userId = 3;

bodyEl.append(wrapperEl);
GET(`/carts/${userId}`).then((data) =>
  data.products.forEach((product) => wrapperEl.append(productGen(product)))
);
