$(document).ready(function() {
    $('form').on('submit', function(e) {
        e.preventDefault();
    })

    $('header buttom').click(function() {
        $('form').slideDown();
    })
})