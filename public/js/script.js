function setHeightCerimonia() {
    var cerimoniaFoto = getHeight("cerimonia-foto");
    setHeight("cerimonia-texto", cerimoniaFoto);
};

function setHeightOndeFicar(){
    var ondeficar = getHeight("ondeficar-foto");
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