const form = document.getElementById('form-comparativo');

function validaCampo(campoA,campoB) {
    let campo = campoA < campoB;
    return campo;
}

form.addEventListener('submit', function(e) {
    e.preventDefault ();

    const campA = document.getElementById('campo-a');
    if (validaCampo(campA.value)) {
        alert("erro")
    }
})

console.log(form);