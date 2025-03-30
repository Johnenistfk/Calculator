// Função para inserir conteudo na tela de display
function insertToDisplay(data) {
  document.querySelector("#display").value += data;
}
// Função para limpar totalmente a tela
function clean() {
  document.querySelector("#display").value = "";
}
// Função do Botão de Limpar um unico numero
function back() {
  const display = document.querySelector("#display");
  display.value = display.value.slice(0, -1);
}
// Função logica de Calculo
function result() {
  const display = document.querySelector("#display");
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "ERROR";
  }
}
