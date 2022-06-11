function updatemenu() {
  let element = document.getElementById("menu");

  if (x.matches) {
    document.getElementById("menu").style.width = "100%";
  }
  if (document.getElementById("responsive-menu").checked == true) {
    document.getElementById("menu").style.borderBottomRightRadius = "0";
    document.getElementById("menu").style.borderBottomLeftRadius = "0";
    element.appendChild(element).classList.add("fooMenu");
  } else {
    document.getElementById("menu").style.borderRadius = "10px";
    // if (x.matches) { // If media query matches
    // alert("It is in else")
    document.getElementById("menu").style.width = "50px";
    // } else {
    // document.getElementById('menu').style.width = '35px';

    // }
  }
}
setBgImage = (id, value) => {
  let count = Math.floor(id);
  for (let i = 1; i <= value; i++) {
    id = count + "." + i;

    document.getElementById(id).style.backgroundImage =
      'url("../../Images/Icons/goldStar.png")';
  }
  value = Number(value);
  value += 1;
  for (let j = value; j <= 5; j++) {
    id = count + "." + j;
    document.getElementById(id).style.backgroundImage =
      'url("../../Images/Icons/emptyStar.png")';
  }
};

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    document.getElementById("menu").style.width = "50px";
  } else {
    document.getElementById("menu").style.width = "100%";
  }
}
let x = window.matchMedia("(max-width: 842px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes\
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
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
  captionText.innerHTML = dots[slideIndex - 1].alt;
}
