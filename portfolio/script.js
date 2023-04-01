jQuery(document).ready(function() {

    particlesJS.load('particles-js-dark', './particles-dark.json', function() {
        console.log('callback - particles-dark.js config loaded');
    });

    particlesJS.load('particles-js', './particles.json', function() {
        console.log('callback - particles.js config loaded');
    });


    
    // var requestURL = './particles.json';
    // var request = new XMLHttpRequest();
    // request.open('GET', requestURL);

    // fetch('./particles.json')
    // .then(res=> res.json())
    // .then(data => console.log(data))

    $(".switch").on("click", function () {
        if ($(this).is(":checked")) {
            $(".body").addClass("body-dark");
            $(".header").addClass("header-dark");
            $("#particles-js").addClass("disabled");
            $("#particles-js-dark").removeClass("disabled");
            $(".navbar__link").addClass("navbar__link-dark");
            $(".dark-mode__text").addClass("dark-mode__text-dark");
            $(".title").addClass("title-dark");
            $(".subtitle").addClass("subtitle-dark");
            $(".facebook").addClass("facebook-dark");
            $(".linkedin").addClass("linkedin-dark");
            $(".github").addClass("github-dark");
            $(".second-title").addClass("second-title-dark");
            $(".statistics-item__text").addClass("statistics-item__text-dark");
            $(".tehnology-item").addClass("tehnology-item-dark");
            $(".tehnology-item__img__title").addClass("tehnology-item__img__title-dark");
            $(".tehnology-item__text").addClass("tehnology-item__text-dark");
            $(".explore-text").addClass("explore-text-dark");
            $(".portfolio-item-hidden").addClass("portfolio-item-hidden-dark");
            $(".portfolio-item-hidden__title").addClass("portfolio-item-hidden__title-dark");
            $(".portfolio-item-hidden__link").addClass("portfolio-item-hidden__link-dark");
            $(".faq").addClass("faq-dark");
            $(".contact").addClass("contact-dark");
            $(".footer").addClass("footer-dark");
        } else {
            $(".body").removeClass("body-dark");
            $(".header").removeClass("header-dark");
            $("#particles-js").removeClass("disabled");
            $("#particles-js-dark").addClass("disabled");
            $(".navbar__link").removeClass("navbar__link-dark");
            $(".dark-mode__text").removeClass("dark-mode__text-dark");
            $(".title").removeClass("title-dark");
            $(".subtitle").removeClass("subtitle-dark");
            $(".facebook").removeClass("facebook-dark");
            $(".linkedin").removeClass("linkedin-dark");
            $(".github").removeClass("github-dark");
            $(".second-title").removeClass("second-title-dark");
            $(".statistics-item__text").removeClass("statistics-item__text-dark");
            $(".tehnology-item").removeClass("tehnology-item-dark");
            $(".tehnology-item__img__title").removeClass("tehnology-item__img__title-dark");
            $(".tehnology-item__text").removeClass("tehnology-item__text-dark");
            $(".explore-text").removeClass("explore-text-dark");
            $(".portfolio-item-hidden").removeClass("portfolio-item-hidden-dark");
            $(".portfolio-item-hidden__title").removeClass("portfolio-item-hidden__title-dark");
            $(".portfolio-item-hidden__link").removeClass("portfolio-item-hidden__link-dark");
            $(".faq").removeClass("faq-dark");
            $(".contact").removeClass("contact-dark");
            $(".footer").removeClass("footer-dark");
        }
    })

    

});