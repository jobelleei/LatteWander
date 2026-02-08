$(document).ready(function () {
    var currentUrl = window.location.pathname.split("/").pop();

    $(".nav-link, .dropdown-item").removeClass("active");

    $(".nav-link, .dropdown-item").each(function () {
        if ($(this).attr("href") === currentUrl) {
            $(this).addClass("active");

            $(this).closest(".dropdown-menu").prev(".nav-link").addClass("active");
        }
    });
});

function changeButton() {
    var button = document.getElementById("button");

    button.value = "Added to Favorites! ♡";

    button.style.backgroundColor = "#FF0000";

    button.style.color = "#ffffff"; 
  }