$(document).ready(function () {
    $('#about-me').click(function (e) {
        e.stopPropagation();
        $('#full-page-overlay').css('display', 'block');
        $('#about-me-panel').show(400);
    });
    
    $('html').click(function () {
        $('#about-me-panel').hide(400);
        $('#full-page-overlay').css('display', 'none');
    });
});