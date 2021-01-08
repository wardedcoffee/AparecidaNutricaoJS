let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

    let pacientes = document.querySelectorAll(".paciente"); // aqui está selecionando o Array de pacientes pela classe CSS
// let paciente = document.querySelector("#primeiro-paciente");  aqui estava pegando a id do primeiro-paciente

    for (let i = 0; i < pacientes.length; i++) {

        let paciente = pacientes[i];
        
        let tdAltura = paciente.querySelector(".info-altura");
        let tdPeso = paciente.querySelector(".info-peso");
        let tdImc = paciente.querySelector(".info-imc");
        
        let altura = tdAltura.textContent;
        let peso = tdPeso.textContent;
        
        let alturaEhValida = true;
        let pesoEhValido = true;
        
        if (peso <= 0 || peso >= 1000) {
          console.log("Peso inválido");
          pesoEhValido = false;
          tdImc.textContent = "Peso inválido!";
          paciente.classList.add("paciente-invalido");
        }
        
        if (altura <= 0 || altura >= 3.0) {
          console.log("Altura inválida!");
          alturaEhValida = false;
          tdImc.textContent = "Altura inválida!";
          paciente.classList.add("paciente-invalido");
        }
        
        if (alturaEhValida && pesoEhValido) {
          let imc = calculaImc(peso, altura);
          tdImc.textContent = imc;
        }
    }

    function calculaImc(peso, altura) {
      let imc = 0;

      imc = peso / (altura * altura);
      
      return imc.toFixed(2);
    }
   