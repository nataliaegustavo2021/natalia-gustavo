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
    if(document.getElementById("email").ValidityState.valueMissing){
        console.log("false");
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