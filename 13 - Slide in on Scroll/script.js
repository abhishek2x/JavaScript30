function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this,
            args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

const slideImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    // console.count(e);
    slideImages.forEach((sliderImage) => {
        // Checking if we reached half way through image
        const slideInAt = (window.scrollY + window.innerHeight) -
            sliderImage.height / 2;
        // Checing bottom of the image
        const imageBottom = sliderImage.offsetTop + sliderImage.height;
        const isHalfShown = slideInAt > sliderImage.offsetTop;
        const isNotScrollPast = window.scrollY < imageBottom;

        if (isHalfShown && isNotScrollPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }

    });
}

window.addEventListener('scroll', debounce(checkSlide));