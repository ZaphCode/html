const theme = localStorage.getItem("theme");
let todos = [];
const html = String.raw; // Esto es pa una extensión de VSCode jeje
const themeButton = document.getElementById("theme-btn");
const todoContainer = document.getElementById("todo-container");
const addBtn = document.getElementById("add-btn");
const newInput = document.getElementById("new-input");

// * Funciones

function addTodo() {
  if (!newInput.value) return;
  todos = [...todos, { done: false, todo: newInput.value }];
  newInput.value = "";
  newInput.focus();
  displayTodos();
}

function removeTodo(index) {
  todos = todos.filter((_, i) => i !== index);
  displayTodos();
}

function clearTodos() {
  todos = [];
  displayTodos();
}

function changeTodoStatus(index) {
  todos = todos.map((todo, i) =>
    i === index ? { ...todo, done: !todo.done } : todo
  );
  displayTodos();
}

function displayTodos() {
  if (todos.length === 0) {
    todoContainer.innerHTML = html`<p class="text-center">No todos yet</p>`;
    saveTodos();
    return;
  }

  let todoListStr = "";

  todos.forEach((todo, index) => {
    todoListStr += html`
      <div class="flex items-center gap-x-1 my-2">
        <input
          onchange="changeTodoStatus(${index})"
          type="checkbox"
          ${todo.done && "checked"}
          class="min-w-6 min-h-6 appearance-none border cursor-pointer border-gray-300 rounded-md mr-2 hover:border-yellow-400  checked:bg-no-repeat checked:bg-center checked:border-yellow-400 checked:bg-yellow-200"
        />
        <span class="text-lg ${todo.done && "line-through"}">${todo.todo}</span>
        <button
          onclick="removeTodo(${index})"
          class="ml-auto text-sm text-gray-400"
        >
          <svg
            class="h-5 w-5 text-red-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        </button>
      </div>
    `;
  });

  todoListStr += html`
    <div class="flex justify-center">
      <button
        onclick="clearTodos()"
        class="my-2 text-gray-500 hover:underline  hover:text-yellow-500"
      >
        clear all
      </button>
    </div>
  `;

  todoContainer.innerHTML = todoListStr;
  saveTodos();
}

function getTodos() {
  const todosStr = localStorage.getItem("todos");
  if (todosStr) {
    todos = JSON.parse(todosStr);
    displayTodos();
  }
}

function saveTodos() {
  localStorage.setItem("todos", JSON.stringify(todos));
}

// * Eventos

addBtn.addEventListener("click", addTodo);

document.addEventListener("keydown", (e) => {
  if (e.key === "Enter") addTodo();
});

themeButton.addEventListener("click", () => {
  document.documentElement.classList.toggle("dark");
  localStorage.setItem(
    "theme",
    document.documentElement.classList.contains("dark") ? "dark" : "light"
  );
});

// * Configuración de TailwindCSS

tailwind.config = {
  darkMode: "class",
};

// * Init

getTodos();

displayTodos();

if (theme === "dark") {
  document.documentElement.classList.add("dark");
}
