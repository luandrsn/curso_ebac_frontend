const form = document.getElementById('form-comparativo');

let formEvalido = false;

function validaCampo(campoA,campoB) {
    return campoB > campoA;
}

form.addEventListener('submit', function(e) {
    e.preventDefault ();

    let campoA = parseFloat(document.getElementById('campo-a').value);
    let campoB = parseFloat(document.getElementById('campo-b').value);

    const mensagemSucesso =`O valor <b>${campoB}</b> é maior que o valor <b>${campoB}</b>;`;

    formEvalido = validaCampo(campoA,campoB)

    if (formEvalido) {
        const containerMensagemSucesso = document.querySelector('.success-message');
        containerMensagemSucesso.innerHTML = mensagemSucesso;
        containerMensagemSucesso.style.display ='block';

        campoA = '';
        campoB = '';
    } else {
        campoB.style.border = '1px solid rgb(103, 94, 198)';
        document.querySelector('.error-message').style.display = 'block';
    }
})

campoB.addEventListener('keyup', function(e) {
    console.log(e.target.value);
    formEvalido = validaCampo(e.target.value);

    if (formEvalido) {
        campoB.style.border = '1px solid rgb(103, 94, 198)';
        document.querySelector('.error-message').style.display = 'block';
    } else {
        campoB.style.border = '';
        document.querySelector('.error-message').style.display = 'none';
    }
})