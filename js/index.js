const tarefas = document.querySelector("#tarefas");
const adicionar = document.querySelector("#adicionar");
const listaTarefas = document.querySelector(".listaTarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

tarefas.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    if (!tarefas.value) return;
    e.preventDefault();
    criaTarefa(tarefas.value);
  }
});

function limpaInput() {
  tarefas.value = "";
  tarefas.focus();
}

function criaBotaoApagar(li) {
  li.innerText += " ";
  const BotaoApagar = document.createElement("button");
  BotaoApagar.setAttribute("class", "fa-solid fa-trash-can");
  BotaoApagar.setAttribute("title", "Apagar esta tarefa");
  li.appendChild(BotaoApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  listaTarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
}

adicionar.addEventListener("click", function (e) {
  if (!tarefas.value) return;
  criaTarefa(tarefas.value);
});

document.addEventListener("click", function (e) {
  const el = e.target;

  if (el.classList.contains("fa-solid")) {
    el.parentElement.remove();
  }
});
