$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#ocultar-form').click(function() {
        $('form').slideUp();
    })
    
    $('form').on('submit', function(e) {
        e.preventDefault();
    })
})