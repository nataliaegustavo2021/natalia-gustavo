function validateFormMensagem(){
    if(document.getElementById("email").ValidityState.valueMissing)
        return false;
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