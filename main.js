
var slideIndex = 1;

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

var slideIndexA = 1;

function currentSlide(n) {
  showSlidesA((slideIndexA = n));
}

function showSlidesA(n) {
  let i;
  var slidesA = document.getElementsByClassName("mySlidesA");
  var dotsA = document.getElementsByClassName("dotA");
  if (n > slidesA.length) {
    slideIndexA = 1;
  }
  if (n < 1) {
    slideIndexA = slidesA.length;
  }
  for (i = 0; i < slidesA.length; i++) {
    slidesA[i].style.display = "none";
  }
  for (i = 0; i < dotsA.length; i++) {
    dotsA[i].className = dotsA[i].className.replace(" active", "");
  }
  slidesA[slideIndexA - 1].style.display = "block";
  dotsA[slideIndexA - 1].className += " active";
}
window.addEventListener( "load",()=>{
    setTimeout(() => {
        console.log(323);
        showSlidesA(slideIndexA)
        showSlides(slideIndex);
    }, 500);
})