const tarefas = [];

document.getElementById('novaTarefa').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
      adicionarTarefa();
    }
  });
  
function adicionarTarefa() {
  const input = document.getElementById('novaTarefa');
  const descricao = input.value.trim();

  if (descricao) {
    const novaTarefa = { descricao, status: false };
    tarefas.push(novaTarefa);
    input.value = '';
    atualizarLista();
  }
}

function atualizarLista() {
  const ul = document.getElementById('listaTarefas');
  ul.innerHTML = '';

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = tarefa.status;
    checkbox.onchange = () => {
      tarefa.status = checkbox.checked;
      atualizarLista();
    };

    const span = document.createElement('span');
    span.textContent = tarefa.descricao;
    span.className = tarefa.status ? 'concluida' : '';

    li.appendChild(checkbox);
    li.appendChild(span);
    ul.appendChild(li);
  });
}