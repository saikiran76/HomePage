$(document).ready(function() {
    // Contact Us Button
    $('#contact-us-button').click(function() {
        $('#popup-form').removeClass('hidy');
    });

    $('#close-popup').click(function() {
        $('#popup-form').addClass('hidy');
    });

    // Image Slider
    const $slides = $('.carousel-slide');
    const $dots = $('.dot');
    let currentIndex = 0;

    function showSlide(index) {
        if (index >= $slides.length) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = $slides.length - 1;
        } else {
            currentIndex = index;
        }

        $slides.each(function(i) {
            $(this).css('transform', `translateX(-${currentIndex * 100}%)`);
            $dots.eq(i).toggleClass('active', i === currentIndex);
        });
    }

    $dots.each(function(index) {
        $(this).on('click', function() {
            showSlide(index);
        });
    });

    showSlide(currentIndex);
});

console.log("JS integrated")