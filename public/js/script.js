function setHeightCerimonia() {
    var cerimoniaFoto = getHeight("cerimonia-foto");
    var cerimoniaTexto = getHeight("cerimonia-texto");
    if(cerimoniaFoto > cerimoniaTexto)
        setHeight("cerimonia-texto", cerimoniaFoto);
};

function setHeightOndeFicar(){
    var ondeficarFoto = getHeight("ondeficar-foto");
    var ondeficarTexto = getHeight("ondeficar-texto");
    if(ondeficarFoto > ondeficarTexto)
        setHeight("ondeficar-texto", ondeficar);
}

function getHeight(element){
    style = window.getComputedStyle(document.getElementById(element));
    return style.getPropertyValue('height');
}

function setHeight(element, value){
    document.getElementById(element).style.height = value;
}

function validateFormMensagem(){        
    var x = document.forms["mensagemform"]["nome"].value;
    if (x == "") {
        alert("O campo Nome deve ser preenchido!");
        return false;
    }
    x = document.forms["mensagemform"]["email"].value;
    if (x == "") {
        alert("O campo E-mail ou Whatsapp deve ser preenchido!");
        return false;
    }
    x = document.forms["mensagemform"]["mensagem"].value;
    if (x == "") {
        alert("O campo Mensagem deve ser preenchido!");
        return false;
    }
    
    if(document.getElementById("email").ValidityState.valueMissing){
        return false;
    }
    if(document.getElementById("email").ValidityState.typeMismatch)
        return false;
    if(document.getElementById("nome").ValidityState.valueMissing)
        return false;
    if(document.getElementById("mensagem").ValidityState.valueMissing)
        return false;

    return true;
}

function validateFormRsvp(){
    var x = document.forms["rsvpform"]["nome"].value;
    if (x == "") {
        alert("O campo Nome deve ser preenchido!");
        return false;
    }
    x = document.forms["rsvpform"]["email"].value;
    if( x == "" || x.indexOf('@') == -1 || x.indexOf('.') == -1 || x.length < 3 )
	{
	  alert( "Por favor, informe um e-mail válido!" );
	  return false;
	}
    x = document.forms["rsvpform"]["mensagem"].value;
    if (x == "") {
        alert("O campo Nome e sobrenome dos convidados confirmados deve ser preenchido!");
        return false;
    }
    x = document.forms["rsvpform"]["sobrenome"].value;
    if (x == "") {
        alert("O campo Sobrenome deve ser preenchido!");
        return false;
    }
    x = document.forms["rsvpform"]["telefone"].value;
    if (x == "" || x.length < 10) {
        alert("Por favor, informe um telefone válido!");
        return false;
    }
    x = document.forms["rsvpform"]["quantidade"].value;
    if (x == "") {
        alert("O campo Nº de convidados deve ser preenchido!");
        return false;
    }

    if(document.getElementById("email").ValidityState.valueMissing)
        return false;
    if(document.getElementById("email").ValidityState.typeMismatch)
        return false;
    if(document.getElementById("nome").ValidityState.valueMissing)
        return false;
    if(document.getElementById("sobrenome").ValidityState.valueMissing)
        return false;
    if(document.getElementById("telefone").ValidityState.valueMissing)
        return false;
    if(document.getElementById("quantidade").ValidityState.valueMissing)
        return false;
    if(document.getElementById("mensagem").ValidityState.valueMissing)
        return false;
    return true;
}

var countDownDate = new Date("Mar 7, 2021 11:30:00").getTime();
var x = setInterval(function() {
  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById("countdown").innerHTML = doubleDigit(days) + " : " + doubleDigit(hours) + " : "
  + doubleDigit(minutes);

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);

function doubleDigit(value){
    if(value < 10){
        return "0" + value;
    }
    return value;
}