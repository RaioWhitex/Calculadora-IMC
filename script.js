const inputPeso = document.getElementById("peso");
const inputAltura = document.getElementById("altura");
const botao = document.getElementById("botao");
const frase = document.getElementById("frase");
const tabela = document.getElementById("tabela-resultado");

const rPeso = document.getElementById("r-peso");
const rAltura = document.getElementById("r-altura");
const rImc = document.getElementById("r-imc");
const rClassificacao = document.getElementById("r-classificacao");

let calculado = false;

// Retorna a classificação de acordo com o valor do IMC
function classificar(imc) {
  if (imc < 17) return "Muito abaixo do peso";
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 25) return "Peso normal";
  if (imc < 30) return "Acima do peso";
  if (imc < 35) return "Obesidade I";
  if (imc < 40) return "Obesidade II (severa)";
  return "Obesidade III (mórbida)";
}

function calcular() {
  const peso = parseFloat(inputPeso.value);
  const alturaCm = parseFloat(inputAltura.value);

  if (isNaN(peso) || peso <= 0 || isNaN(alturaCm) || alturaCm <= 0) {
    alert("Preencha peso e altura com valores válidos.");
    return;
  }

  // Altura digitada em cm; converte para metros
  const alturaM = alturaCm / 100;
  const imc = peso / (alturaM * alturaM);

  rPeso.textContent = peso;
  rAltura.textContent = alturaM.toFixed(2).replace(".", ",");
  rImc.textContent = imc.toFixed(2).replace(".", ",");
  rClassificacao.textContent = classificar(imc);

  // Mostra resultado, esconde a frase, trava os campos e troca o botão
  frase.classList.add("oculto");
  tabela.classList.remove("oculto");
  inputPeso.disabled = true;
  inputAltura.disabled = true;
  botao.textContent = "Refazer";
  calculado = true;
}

function refazer() {
  inputPeso.value = "";
  inputAltura.value = "";
  inputPeso.disabled = false;
  inputAltura.disabled = false;
  tabela.classList.add("oculto");
  frase.classList.remove("oculto");
  botao.textContent = "Calcular";
  calculado = false;
}

botao.addEventListener("click", function () {
  if (calculado) {
    refazer();
  } else {
    calcular();
  }
});
