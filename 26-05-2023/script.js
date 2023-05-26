const qS = (element) => document.querySelector(element);
const cE = (element) => document.createElement(element);

const wrapperEl = cE("div");
const formEl = cE("form");
const titleEl = cE("h1");
const inputEl = cE("input");
const buttonEl = cE("button");
const listEl = cE("li");

wrapperEl.className = "wrapper";
formEl.className = "form";
titleEl.className = "title";
titleEl.textContent = "TO DO LIST";
inputEl.className = "textInput";
inputEl.type = "text";
inputEl.minLength = "3";
inputEl.setAttribute("placeholder", "Inserisci qualcosa...");
buttonEl.textContent = "Invia";
listEl.className = "list";

const itemGen = (itemData) => {
  wrapper.textContent = itemData.content;

  wrapper.addEventListener("click", () => {
    todoList = todoList.filter((todo) => todo.id !== itemData.id);
    listItemRender();
  });
  return wrapper;
};

const onHandleSubmit = (e) => {
  e.preventDefault();
  todoList.push({ id: Date.now(), content: e.target[0].value });
  listItemRender();
};

const listItemRender = () => {
  inputEl.value = "";
  listEl.textContent = "";
  todoList.forEach((todo) => {
    listEl.appendChild(itemGen(todo));
  });
  sessionStorage.setItem("todoList", JSON.stringify(todoList));
};

let todoList = JSON.parse(sessionStorage.getItem("todoList")) || [];

listItemRender();

document.body.appendChild(wrapperEl);
wrapperEl.appendChild(formEl, titleEl, inputEl, buttonEl, listEl);

formEl.addEventListener("submit", onHandleSubmit);
