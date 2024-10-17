let currentIndex = 0;
const slides = document.querySelectorAll('.slides img');

function showSlide(index) {
    const totalSlides = slides.length;
    if (index >= totalSlides) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex = index;
    }
    const offset = -currentIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    showSlide(currentIndex + 1);
}, 3000);

showSlide(currentIndex);
