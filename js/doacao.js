

function validarFormulario(tipo) {
    let nome = document.querySelector("#nome").value;
    let cpf = "";
    let numero = "";
    let email = document.querySelector("#Email").value;
    let valor = document.querySelector("#Valor").value;
   
    if (tipo === "cadastro") {
        numero = document.querySelector("#numero").value;
    } else if (tipo === "doacao") {
        cpf = document.querySelector("#Cpf").value;
    }

    if (nome === ""){
        alert("Nome não foi preenchido!");
    } else if (tipo === "cadastro" && numero === "") {
        alert("Número não foi preenchido!");
    } else if (tipo === "doacao" && cpf === "") {
        alert("CPF não foi preenchido!");
    } else if (email === "") {
        alert("E-mail não foi preenchido!");
    } else if (valor === "") {
        if (tipo === "cadastro") {
            alert("Valor do campo meta não foi preenchida!");
        }
    } else {
        if (tipo === "cadastro") {
            alert("Sua vaquinha foi criada com sucesso!");
        } else if (tipo === "doacao") {
            alert("Muito Obrigado por doar. Sua doação foi feita com Sucesso!");
        }
    }
}


function formatarTelefone(input) {
   
    var numero = input.value.replace(/\D/g, '');

    var numeroFormatado = '';
    if (numero.length > 0) {
      numeroFormatado += '(' + numero.substring(0, 2);
    }
    if (numero.length > 2) {
      numeroFormatado += ') ' + numero.substring(2, 3) + ' ';
    }
    if (numero.length > 3) {
      numeroFormatado += numero.substring(3, 7);
    }
    if (numero.length > 7) {
      numeroFormatado += '-' + numero.substring(7, 11);
    }
    
    input.value = numeroFormatado;
  }

