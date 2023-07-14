const form = document.getElementById('form-comparativo');

function validaCampo(campoA,campoB) {
    let campo = campoA < campoB;
    return campo;
}

form.addEventListener('submit', function(e) {
    e.preventDefault ();

    const campA = document.getElementById('campo-a');
    const campB = document.getElementById('campo-b');
    if (!validaCampo(campA.value,campB.value)) {
        alert("erro")
    } else {
        alert('tudo ok');
    }
})

console.log(form);