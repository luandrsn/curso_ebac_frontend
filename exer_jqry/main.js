$(document).ready(function() {
    $('header button').click(function() {
        $('form').slideDown();
    })

    $('#ocultar-form').click(function() {
        $('form').slideUp();
    })
    
    $('form').on('submit', function(e) {
        e.preventDefault();
        const novaTarefa = $('#tarefa-nova').val();
        const inserirTarefa = $('<li></li>');
        $(`<li>${novaTarefa}</li>`).appendTo(inserirTarefa);
        $(inserirTarefa).appendTo('ul');
        $('#tarefa-nova').val('');
        $('li').click(function() {
            $(this).css("text-decoration", "line-through");
        })
    })
})