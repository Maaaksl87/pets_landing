const sliderImages = [
    './img/background_img_new.png',
    './img/cats_background.webp',
    './img/background_img_new.png',
];

const slider = document.querySelector('.main__new__image');
const dots = document.querySelectorAll('.main__new__image__dots--dot');
let currentSlide = 0;
let autoSlideInterval;
//зміна слайду
function changeSlide(index) {
    currentSlide = index;
    slider.style.backgroundImage = `url(${sliderImages[currentSlide]})`;
    updateDots();
}
//оновлення активної точки
function updateDots() {
    dots.forEach((dot, index) => {
        if (index === currentSlide) {
            dot.style.backgroundColor = '#f58a3e';
        } else {
            dot.style.backgroundColor = 'transparent';
        }
    });
}

// зміна слайдів кожні 3 секунди
function startAutoSlide() {
    autoSlideInterval = setInterval(() => {
        currentSlide = (currentSlide + 1) % sliderImages.length;
        changeSlide(currentSlide);
    }, 3000);
}

startAutoSlide();

document.addEventListener('DOMContentLoaded', function () {
    const brands = document.querySelectorAll('.main__ourBrand__wrapper__container__brands__brand');
    const dots = document.querySelectorAll('.main__ourBrand__wrapper__container__elements__dots--dot');
    const nextButton = document.getElementById('next');
    const prevButton = document.getElementById('prev');
    const mobileNextButton = document.getElementById('mobile-next');
    const mobilePrevButton = document.getElementById('mobile-prev');

    let currentSlide = 0;
    const totalSlides = brands.length;

    function updateSlide(newIndex) {

        brands.forEach((brand, index) => {
            brand.classList.remove('active');
            if (index === newIndex) {
                brand.classList.add('active');
            }
        });

        dots.forEach((dot, index) => {
            dot.classList.remove('active');
            if (index === newIndex) {
                dot.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlide(currentSlide);
    }

    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    mobileNextButton.addEventListener('click', nextSlide);
    mobilePrevButton.addEventListener('click', prevSlide);

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            updateSlide(currentSlide);
        });
    });

    updateSlide(currentSlide);
});

