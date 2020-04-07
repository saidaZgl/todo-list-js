import "./style.css";

/* 
<form>
    <input type="text" />
    <button>Ajouter</button>
</form>
<ul>
    <li>
        <span class="todo done"></span>
        <p>text</p>
        <button>Editer</button>
        <button>Supprimer</button>
    </li>
</ul> */

const ul = document.querySelector("ul");

const form = document.querySelector("form");
const input = document.querySelector("form > input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = input.value;
  input.value = " ";
  addTodo(value);
  displayTodo();
});

const todos = [
  {
    text: "je suis une todo",
    done: false,
  },
  {
    text: "faire du javascript",
    done: true,
  },
];

const displayTodo = () => {
  const todosNode = todos.map((todo, index) => {
    return createTodoElement(todo, index);
  });
  ul.innerHTML = "";
  ul.append(...todosNode);
};

const createTodoElement = (todo, index) => {
  const li = document.createElement("li");
  const buttonDelete = document.createElement("button");
  buttonDelete.innerHTML = "Supprimer";
  buttonDelete.addEventListener("click", (e) => {
    deleteTodo(index);
  });

  li.innerHTML = `
    <span class="todo ${todo.done ? "done" : ""}"></span>
    <p>${todo.text}</p>
  `;
  li.appendChild(buttonDelete);
  return li;
};

const addTodo = (text) => {
  todos.push({
    text,
    done: false,
  });
};

const deleteTodo = (index) => {
  todos.splice(index, 1);
  displayTodo();
};

displayTodo();
