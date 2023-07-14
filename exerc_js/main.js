const form = document.getElementById('form-comparativo');

function validaCampo(campoA,campoB) {
    let campo = campoA < campoB;
    return campo;
}

form.addEventListener('submit', function(e) {
    let formEvalido = false;
    e.preventDefault ();

    const campA = document.getElementById('campo-a');
    const campB = document.getElementById('campo-b');
    const mensagemSucesso =`O valor <b>${campB.value}</b> é maior que o valor <b>${campA.value}</b>;`;
    formEvalido = validaCampo(campA.value,campB.value)
    if (formEvalido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display ='block';

        campA.value = '';
        campB.value = '';
    } else {
        document.querySelector('.error-message').style.display = 'block';
    }
})

console.log(form);