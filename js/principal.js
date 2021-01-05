var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

const paciente = document.querySelector("#primeiro-paciente");

const tdAltura = paciente.querySelector(".info-altura");
const tdPeso = paciente.querySelector(".info-peso");
const tdImc = paciente.querySelector(".info-imc");

const altura = tdAltura.textContent;
const peso = tdPeso.textContent;

let alturaEhValida = true;
let pesoEhValido = true;

if (peso <= 0 || peso >= 1000) {
  console.log("Peso inválido");
  pesoEhValido = false;
  tdImc.textContent = "Peso inválido!";
}

if (altura <= 0 || altura >= 3.0) {
  console.log("Altura inválida!");
  alturaEhValida = false;
  tdImc.textContent = "Altura inválida!";
}

if (alturaEhValida && pesoEhValido) {
  const imc = peso / (altura * altura);
  tdImc.textContent = imc;
} else {
  tdImc.textContent = "Altura e/ou peso inválidos!"
}
