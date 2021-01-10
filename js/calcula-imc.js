var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista";

    var pacientes = document.querySelectorAll(".paciente"); // aqui está selecionando o Array de pacientes pela classe CSS
// var paciente = document.querySelector("#primeiro-paciente");  aqui estava pegando a id do primeiro-paciente

    for (var i = 0; i < pacientes.length; i++) {

        var paciente = pacientes[i];
        
        var tdAltura = paciente.querySelector(".info-altura");
        var tdPeso = paciente.querySelector(".info-peso");
        var tdImc = paciente.querySelector(".info-imc");
        
        var altura = tdAltura.textContent;
        var peso = tdPeso.textContent;
        
        var alturaEhValida = validaPeso(peso); //true ou false
        var pesoEhValido = validaAltura(altura);
        
        if (!pesoEhValido) {
          console.log("Peso inválido");
          pesoEhValido = false;
          tdImc.textContent = "Peso inválido!";
          paciente.classList.add("paciente-invalido");
        }
        
        if (!alturaEhValida) {
          console.log("Altura inválida!");
          alturaEhValida = false;
          tdImc.textContent = "Altura inválida!";
          paciente.classList.add("paciente-invalido");
        }
        
        if (alturaEhValida && pesoEhValido) {
          var imc = calculaImc(peso, altura);
          tdImc.textContent = imc;
        }
    }

    function validaPeso(peso){
      if (peso >= 0 && peso <= 1000){
        return true;
      } else {
        return false;
      }
    }

    function validaAltura(altura){
      if(altura >= 0 && altura <= 3.0){
        return true;
      } else {
        return false;
      }
    }

    function calculaImc(peso, altura) {
      var imc = 0;

      imc = peso / (altura * altura);
      
      return imc.toFixed(2);
    }
   