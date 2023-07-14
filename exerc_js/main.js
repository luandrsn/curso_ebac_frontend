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
    const mensagemSucesso =`O valor: ${campB.value} referente a B é maior que o valor: ${campA.value} referente a A`;
    formEvalido = validaCampo(campA.value,campB.value)
    if (formEvalido) {
        alert(mensagemSucesso);
    } else {
        alert('Incorreto');
    }
})

console.log(form);