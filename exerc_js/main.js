const form = document.getElementById('form-comparativo');

function validaCampo(campoA,campoB) {
    return campoA<campoB;
}

form.addEventListener('submit', function(e) {
    e.preventDefault ();

    const campA = document.getElementById('campo-a');
    if (validaCampo(campA.value)) {
        alert("erro")
    }
})