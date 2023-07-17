const form = document.getElementById('form-comparativo');
const campB = document.getElementById('campo-b');

let formEvalido = false;

function validaCampo(campoA,campoB) {
    return campoB > campoA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault ();

    let campoA = parseFloat(document.getElementById('campo-a').value);
    let campoB = parseFloat(document.getElementById('campo-b').value);

    const mensagemSucesso =`O valor <b>${campoB}</b> é maior que o valor <b>${campoA}</b>;`;

    formEvalido = validaCampo(campoA,campoB)

    if (formEvalido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display ='block';

        campoA = '';
        campoB = '';
    } else {
        campB.style.border = '1px solid rgb(103, 94, 198)';
        document.querySelector('.error-message').style.display = 'block';
    }
})

campB.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEvalido = validaCampo(e.target.value);

    if (formEvalido) {
        campB.style.border = '1px solid rgb(103, 94, 198)';
        document.querySelector('.error-message').style.display = 'block';
    } else {
        campB.style.border = '';
        document.querySelector('.error-message').style.display = 'none';
    }
})