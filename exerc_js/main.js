const form = document.getElementById('form-comparativo');
const campB = document.getElementById('campo-b');
let formEvalido = false;

function validaCampo(campoA,campoB) {
    let campo = campoA < campoB;
    return campo;
}

form.addEventListener('submit', function(e) {
    e.preventDefault ();

    const campA = document.getElementById('campo-a');
    const mensagemSucesso =`O valor <b>${campB.value}</b> é maior que o valor <b>${campA.value}</b>;`;
    formEvalido = validaCampo(campA.value,campB.value)
    if (formEvalido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display ='block';

        campA.value = '';
        campB.value = '';
    } else {
        campB.style.border = '1px solid rgb(103, 94, 198)';
        document.querySelector('.error-message').style.display = 'block';
    }
})

campB.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEvalido = validaCampo(e.target.value);
})