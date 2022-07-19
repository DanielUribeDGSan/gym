$(function () {
    $(".menu-link").click(function () {
        $(".menu-link").removeClass("is-active");
        $(this).addClass("is-active");
    });
});

$(function () {
    $(".main-header-link").click(function () {
        $(".main-header-link").removeClass("is-active");
        $(this).addClass("is-active");
    });
});

const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener("click", (e) => {
        e.stopPropagation();
        dropdowns.forEach((c) => c.classList.remove("is-active"));
        dropdown.classList.add("is-active");
    });
});



$(document).click(function (e) {
    var container = $(".status-button");
    var dd = $(".dropdown");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        dd.removeClass("is-active");
    }
});

$(function () {
    $(".dropdown").on("click", function (e) {
        $(".content-wrapper").addClass("overlay");
        e.stopPropagation();
    });
    $(document).on("click", function (e) {
        if ($(e.target).is(".dropdown") === false) {
            $(".content-wrapper").removeClass("overlay");
        }
    });
});

$(function () {
    $(".status-button:not(.open)").on("click", function (e) {
        $(".overlay-app").addClass("is-active");
    });
    $(".pop-up .close").click(function () {
        $(".overlay-app").removeClass("is-active");
    });
});

$(".status-button:not(.open)").click(function () {
    $(".pop-up").addClass("visible");
});

$(".pop-up .close").click(function () {
    $(".pop-up").removeClass("visible");
});

const toggleButton = document.querySelector('.dark-light');

// toggleButton.addEventListener('click', () => {
//     document.body.classList.toggle('light-mode');
// });

document.querySelector("#btn_lunes").addEventListener('click', () => {
    document.getElementById('martes_content').classList.add('d-none');
    document.getElementById('miercoles_content').classList.add('d-none');
    document.getElementById('jueves_content').classList.add('d-none');
    document.getElementById('viernes_content').classList.add('d-none');
    document.getElementById('lunes_content').classList.remove('d-none');
});
document.querySelector("#btn_martes").addEventListener('click', () => {
    document.getElementById('lunes_content').classList.add('d-none');
    document.getElementById('miercoles_content').classList.add('d-none');
    document.getElementById('jueves_content').classList.add('d-none');
    document.getElementById('viernes_content').classList.add('d-none');
    document.getElementById('martes_content').classList.remove('d-none');
});
document.querySelector("#btn_miercoles").addEventListener('click', () => {
    document.getElementById('lunes_content').classList.add('d-none');
    document.getElementById('martes_content').classList.add('d-none');
    document.getElementById('jueves_content').classList.add('d-none');
    document.getElementById('viernes_content').classList.add('d-none');
    document.getElementById('miercoles_content').classList.remove('d-none');
});
document.querySelector("#btn_jueves").addEventListener('click', () => {
    document.getElementById('lunes_content').classList.add('d-none');
    document.getElementById('martes_content').classList.add('d-none');
    document.getElementById('miercoles_content').classList.add('d-none');
    document.getElementById('viernes_content').classList.add('d-none');
    document.getElementById('jueves_content').classList.remove('d-none');
});
document.querySelector("#btn_viernes").addEventListener('click', () => {
    document.getElementById('lunes_content').classList.add('d-none');
    document.getElementById('martes_content').classList.add('d-none');
    document.getElementById('miercoles_content').classList.add('d-none');
    document.getElementById('jueves_content').classList.add('d-none');
    document.getElementById('viernes_content').classList.remove('d-none');
});