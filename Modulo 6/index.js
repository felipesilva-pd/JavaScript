const nomesCurtiram = [];
const botao = document.getElementById("botao-curtir");
const mensagem = document.getElementById("mensagem");

botao.addEventListener("click", () => {
  const nomeInput = document.getElementById("nome");
  const nome = nomeInput.value.trim();

  if (nome === "" || nomesCurtiram.includes(nome)) {
    alert(`"${nome}" já curtiu!`);
    nomeInput.value = "";
    return;
  }

  nomesCurtiram.push(nome);
  atualizarMensagem();
  nomeInput.value = "";
});

function atualizarMensagem() {
  const total = nomesCurtiram.length;

  if (total === 0) {
    mensagem.textContent = "Ninguém curtiu";
  } else if (total === 1) {
    mensagem.textContent = `${nomesCurtiram[0]} curtiu`;
  } else if (total === 2) {
    mensagem.textContent = `${nomesCurtiram[0]} e ${nomesCurtiram[1]} curtiram`;
  } else {
    mensagem.textContent = `${nomesCurtiram[0]}, ${nomesCurtiram[1]} e mais ${total - 2} pessoas curtiram`;
  }
}