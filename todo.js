const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function loadTodos() {
  const loadToDos = localStorage.getItem(TODOS_LS);
  if (loadToDos !== null) {
    const parsedToDos = JSON.parse(loadToDos);
    // for (let i = 0; i < parsedToDos.length; i++) {
    //   const text = parsedToDos[i]["text"];
    //   paintTodo(text);
    parsedToDos.forEach(function (toDo) {
      paintTodo(toDo.text);
    });
  }
}

const toDos = [];
function saveToDos() {
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  //JSON.stringify -> 자바스크립트 Object를 string으로 바꿔줌
}

function paintTodo(text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  delBtn.innerText = "❌";
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);
  const ToDoObj = {
    id: newId,
    text: text,
  };
  toDos.push(ToDoObj);
  saveToDos();
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintTodo(currentValue);
  toDoInput.value = "";
}
function init() {
  loadTodos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
