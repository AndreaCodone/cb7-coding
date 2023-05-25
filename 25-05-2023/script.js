import { POST, DELETE } from "./http.js";
import { createEl } from "./utils/fn.js";

// POST("/todos/add", {
//   title: "Ciao",
// });

// DELETE("/todos/1");

POST("/todos/add/1").then((data) => console.log(data));

// const listRender = () => {
//   const listItemEls = qSA(".listItem");

//   listItemEls.forEach((element) =>
//     element.addEventListener("click", (evt) => {
//       todos.forEach((item) => {
//         if (item.id === parseInt(evt.target.id)) {
//           item.completed = !item.completed;
//           element.classList.toggle("listCompleted");
//         }
//       });
//     })
//   );
// };
// const titleEl = cE("h1");
// const todoInputEL = cE("input");
// const todoButtonEL = cE("button");
// const listEl = cE("ul");

// titleEl.className = "title";
// titleEl.textContent = "TODO LIST";
// todoInputEL.setAttribute("type", "text");
// todoInputEL.setAttribute("placeholder", "Add Item...");
// todoInputEL.className = "todoInput";
// todoButtonEL.className = "todoButton";
// todoButtonEL.textContent = "Add todo";
// listEl.className = "list";

// todos.forEach((item) => listEl.append(listItemGen(item)));

// document.body.append(titleEl, todoInputEL, todoButtonEL, listEl);

// listRender();

// let inputValueText;

// todoInputEL.addEventListener("change", (event) => {
//   inputValueText = event.target.value;
// });

// todoButtonEL.addEventListener("click", () => {
//   todos.push({
//     id: Math.floor(Math.random() * 10000),
//     todo: inputValueText,
//     completed: false,
//   });
//   listEl.textContent = "";
//   todos.forEach((item) => listEl.append(listItemGen(item)));
//   listRender();
// });
