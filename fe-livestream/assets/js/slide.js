const slides = document.querySelectorAll('.imag');
const slidesCount = slides.length;
const nextSlide = document.querySelector('.next');
const previousSlide = document.querySelector('.prev');

let count = 0;

function showNextSlide(){
    slides[count].classList.remove('active');

    if(count < slidesCount - 1){
        count++;
    } else {
        count = 0;
    }

    slides[count].classList.add('active');
}

function showPreviousSlide(){
    slides[count].classList.remove('active');

    if(count > 0){
        count--;
    } else {
        count = slidesCount - 1;
    }
    slides[count].classList.add('active');
}

function keyPress(e){
    e = e || window.event;
    if (e.keyCode == '37'){
        showPreviousSlide();
    } else if (e.keyCode == '39'){
        showNextSlide();
    }
}


nextSlide.addEventListener('click',showNextSlide);
previousSlide.addEventListener('click',showPreviousSlide);