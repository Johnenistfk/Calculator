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
// Função logica de Calculo
function result() {
  let calcular = document.querySelector("#display").value;

  let numeros = calcular.split(/[\+\-\*\/]/).map(Number);
  let operator = calcular.match(/[\+\-\*\/]/g) || [];

  for (let i = 0; i < operator.length; ) {
    if (operator[i] === "*" || operator[i] === "/") {
      let resultado;

      if (operator[i] === "*") {
        resultado = numeros[i] * numeros[i + 1];
      } else {
        resultado = numeros[i] / numeros[i + 1];
      }

      numeros.splice(i, 2, resultado);
      operator.splice(i, 1);
    } else {
      i++;
    }
  }

  let resultado = numeros[0];
  for (let i = 0; i < operator.length; i++) {
    if (operator[i] === "+") {
      resultado += numeros[i + 1];
    } else if (operator[i] === "-") {
      resultado -= numeros[i + 1];
    }
  }

  document.querySelector("#display").value = resultado;
}
