const todos = [
  {
    id: 1,
    todo: "Do something nice for someone I care about",
    completed: true,
    userId: 26,
  },
  {
    id: 2,
    todo: "Memorize the fifty states and their capitals",
    completed: false,
    userId: 48,
  },
  {
    id: 3,
    todo: "Watch a classic movie",
    completed: false,
    userId: 4,
  },
];

const cE = (element) => document.createElement(element);
const qS = (element) => document.querySelector(element);
const qSA = (elements) => document.querySelectorAll(elements);

const listItemGen = (todoData) => {
  const listItemEl = cE("li");

  listItemEl.id = todoData.id;
  listItemEl.textContent = todoData.todo;
  listItemEl.className = "listItem";

  if (todoData.completed) listItemEl.classList.add("listCompleted");

  return listItemEl;
};

const listRender = () => {
  const listItemEls = qSA(".listItem");

  listItemEls.forEach((element) =>
    element.addEventListener("click", (evt) => {
      todos.forEach((item) => {
        if (item.id === parseInt(evt.target.id)) {
          item.completed = !item.completed;
          element.classList.toggle("listCompleted");
        }
      });
    })
  );
};
const titleEl = cE("h1");
const todoInputEL = cE("input");
const todoButtonEL = cE("button");
const listEl = cE("ul");

titleEl.className = "title";
titleEl.textContent = "TODO LIST";
todoInputEL.setAttribute("type", "text");
todoInputEL.setAttribute("placeholder", "Add Item...");
todoInputEL.className = "todoInput";
todoButtonEL.className = "todoButton";
todoButtonEL.textContent = "Add todo";
listEl.className = "list";

todos.forEach((item) => listEl.append(listItemGen(item)));

document.body.append(titleEl, todoInputEL, todoButtonEL, listEl);

listRender();

let inputValueText;

todoInputEL.addEventListener("change", (event) => {
  inputValueText = event.target.value;
});

todoButtonEL.addEventListener("click", () => {
  todos.push({
    id: Math.floor(Math.random() * 10000),
    todo: inputValueText,
    completed: false,
  });
  listEl.textContent = "";
  todos.forEach((item) => listEl.append(listItemGen(item)));
  listRender();
});
