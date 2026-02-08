$(document).ready(function () {
    var currentPath = window.location.pathname.split("/").pop();

    $('.navbar-nav .nav-link').each(function () {
        var linkPath = $(this).attr('href');

        if (linkPath === currentPath) {
            $('.navbar-nav .nav-link').removeClass('active');
            $(this).addClass('active');
        }
    });
});