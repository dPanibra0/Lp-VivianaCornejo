var slideIndex = 1;
var slideIndexA = 1;

window.addEventListener("load", () => {
  setTimeout(() => {
    showSlidesA(slideIndexA);
    showSlides(slideIndex);
  }, 500);
  selectedOptionNav();
});

function selectedOptionNav() {
  var optionsNav = document.getElementById("options-nav");
  var btns = optionsNav.getElementsByTagName("a");
  for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function (e) {
      e.preventDefault();
      var current = optionsNav.getElementsByClassName("selected");
      current[0].classList.remove("selected");
      console.log(current[0]);
      this.classList.add("selected");
    });
  }
}
function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

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

function nav() {
  var optionDiv = document.getElementById("options-nav");
  var navIcon = document.getElementById("nav-icon");
  var timesIcon = document.getElementById("times-icon");
  optionDiv.classList.toggle("hide");
  navIcon.classList.toggle("hide");
  timesIcon.classList.toggle("hide");
}
