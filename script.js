//preloader
var loader = document.getElementById("preloader");
window.addEventListener("load", function(){

  loader.style.display="none";
})

// loading 


const filled = document.querySelector('.filled1');

function update(){
    filled.style.width = `${((window.scrollY)/(document.body.scrollHeight - window.innerHeight) * 100)}%`
    requestAnimationFrame(update);
}

update()


// navbar
$(document).ready(function () {
    if ($(window).width() > 991){
    $('.navbar-light .d-menu').hover(function () {
            $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
        }, function () {
            $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
        });
        }
    });

// section 10 code
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});
