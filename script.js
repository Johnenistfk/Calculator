// Função para inserir conteudo na tela de display
function insertToDisplay(data) {
  document.querySelector("#display").value += data;
}
//Função para limpar totalmente a tela
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

document.addEventListener("keydown", function (event) {
  const display = document.querySelector("#display");
  const key = event.key;

  // Mapeando teclas numéricas e operadores para a calculadora
  if (key >= "0" && key <= "9") {
    insertToDisplay(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    insertToDisplay(key);
  } else if (key === "Enter") {
    result();
  } else if (key === "Backspace") {
    display.value = display.value.slice(0, -1); // Apaga o último caractere
  } else if (key === "c" || key === "C") {
    clean();
  }
});
