export const createEl = (type, content, ...attrs) => {
  const element = document.createElement(type);

  element.textContent = content;
  attrs.forEach((attr) => element.setAttribute(attr?.name, attr?.value));
  return element;
};

export const listItemGen = (todoData) => {
  const listItemEl = cEl("li");

  listItemEl.id = todoData.id;
  listItemEl.textContent = todoData.todo;
  listItemEl.className = "listItem";

  if (todoData.completed) listItemEl.classList.add("listCompleted");

  return listItemEl;
};
