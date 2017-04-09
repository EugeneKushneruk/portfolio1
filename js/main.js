$(function() {
    'use strict';
    // Some code

    templator();

    $('.header__top-menuBtn').on('click', function() {
        $('.navBar').slideToggle('slow');
    });

    $('.anchor').on("click", function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
        }, 1500);
    });

    function templator(catName) {
        var $container = $('.worksBox');
        var $templateHTML = $('#template').html();
        var works = [{
                imgSrc: "img/HairDresser.jpg",
                name: "Hair Dresser",
                category: "Branding"
            },
            {
                imgSrc: "img/StrangePigeon.jpg",
                name: "Strange Pigeon",
                category: "Design"
            },
            {
                imgSrc: "img/Stuffs.jpg",
                name: "Stuffs",
                category: "Development"
            },
            {
                imgSrc: "img/Camera.jpg",
                name: "Camera",
                category: "Branding"
            },
            {
                imgSrc: "img/Bike.jpg",
                name: "Bike",
                category: "Branding"
            },
            {
                imgSrc: "img/NotePad.jpg",
                name: "Note Pad",
                category: "Design"
            },
            {
                imgSrc: "img/StuffsAgain.jpg",
                name: "Stuffs Again",
                category: "Development"
            },
            {
                imgSrc: "img/RullerAtTheTop.jpg",
                name: "Ruller At The Top",
                category: "Design"
            },
            {
                imgSrc: "img/Events.jpg",
                name: "Events",
                category: "Strategy"
            }
        ];
        var filtered = _.filter(works, {
            category: catName
        });
        var content = tmpl($templateHTML, {
            data: filtered
        });

        $container.empty();

        if (catName === undefined) {
            $container.append(tmpl($templateHTML, {
                data: works
            }));
        } else {
            $container.append(content);
        }
    }

    $('.latestWorks__listMenu').on('click', function(e) {
        e.preventDefault();
        var target = e.target;

        if (target.id === 'All') {
            templator();
        } else if (!target.id.length) {
            return;
        } else templator(target.id);
    });


    $('.carousel').slick({
        autoplay: true,
        arrows: false,
        dots: true,
    });

});
