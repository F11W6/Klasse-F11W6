let currentText = 0;

let slideIndex = 1;
showSlides(slideIndex);

let activeArea = null;


function plusSlides(n) {
  showSlides(slideIndex += n);}

function currentSlide(n) {
  showSlides(slideIndex = n);}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");}
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";}

function Erscheinen() {
    let infoDiv1 = document.getElementById("Info1");
    let infoDiv2 = document.getElementById("Info2");
    let infoDiv3 = document.getElementById("Info3");
    let infoDiv4 = document.getElementById("Info4");
    let infoDiv5 = document.getElementById("Info5");
    let infoDiv6 = document.getElementById("Info6");
    let infoDiv7 = document.getElementById("Info7");
    let notizbuchImg = document.getElementById("Notizbuch");
    let WeiterButton = document.getElementById("Weiter");

    if (activeArea === "Schliersee") {

        infoDiv1.style.opacity = "0";
        notizbuchImg.style.visibility = "hidden";
        WeiterButton.style.visibility = "hidden";
        activeArea = null;
    } else {
        infoDiv1.style.opacity = "1";
        infoDiv2.style.opacity = "0";
        infoDiv3.style.opacity = "0";
        infoDiv4.style.opacity = "0";
        infoDiv5.style.opacity = "0";
        infoDiv6.style.opacity = "0";
        infoDiv7.style.opacity = "0";
        notizbuchImg.style.visibility = "visible";
        WeiterButton.style.visibility = "visible";
        activeArea = "Schliersee";}}

function GerichtAnzeigen() {
    let infoDiv1 = document.getElementById("Info1");
    let infoDiv2 = document.getElementById("Info2");
    let infoDiv3 = document.getElementById("Info3");
    let infoDiv4 = document.getElementById("Info4");
    let infoDiv5 = document.getElementById("Info5");
    let infoDiv6 = document.getElementById("Info6");
    let infoDiv7 = document.getElementById("Info7");
    let notizbuchImg = document.getElementById("Notizbuch");
    let WeiterButton = document.getElementById("Weiter");

    if (activeArea === "Gericht") {
        infoDiv7.style.opacity = "0";
        notizbuchImg.style.visibility = "hidden";
        WeiterButton.style.visibility = "hidden";
        activeArea = null;
    } else {
        infoDiv1.style.opacity = "0";
        infoDiv2.style.opacity = "0";
        infoDiv3.style.opacity = "0";
        infoDiv4.style.opacity = "0";
        infoDiv5.style.opacity = "0";
        infoDiv6.style.opacity = "0";
        infoDiv7.style.opacity = "1";
        notizbuchImg.style.visibility = "visible";
        WeiterButton.style.visibility = "hidden";
        activeArea = "Gericht";}}

function weitergehts() {
    let infoDiv1 = document.getElementById("Info1");
    let infoDiv2 = document.getElementById("Info2");
    let infoDiv3 = document.getElementById("Info3");
    let infoDiv4 = document.getElementById("Info4");
    let infoDiv5 = document.getElementById("Info5");
    let infoDiv6 = document.getElementById("Info6");
    let infoDiv7 = document.getElementById("Info7");

    infoDiv1.style.opacity = "0";
    infoDiv2.style.opacity = "0";
    infoDiv3.style.opacity = "0";
    infoDiv4.style.opacity = "0";
    infoDiv5.style.opacity = "0";
    infoDiv6.style.opacity = "0";

    currentText++;
    if (currentText > 5) {
        currentText = 0;}

    switch (currentText) {
        case 0:
            infoDiv1.style.opacity = "1";
            break;
        case 1:
            infoDiv2.style.opacity = "1";
            break;
        case 2:
            infoDiv3.style.opacity = "1";
            break;
        case 3:
            infoDiv4.style.opacity = "1";
            break;
        case 4:
            infoDiv5.style.opacity = "1";
            break;
        case 5:
            infoDiv6.style.opacity = "1";
            break;}}

document.getElementById("Schliersee").addEventListener("click", function () {Erscheinen();});
document.getElementById("SchlierseeK").addEventListener("click", function () {Erscheinen();});

document.getElementById("Gericht").addEventListener("click", function () {GerichtAnzeigen();});
document.getElementById("GerichtK").addEventListener("click", function () {GerichtAnzeigen();});


document.getElementById("Weiter").addEventListener("click", function () {weitergehts();});

const toggleButton = document.querySelector('.toggle-button');
const navMenu = document.getElementById('nav-menu');
const closeButton = document.querySelector('.close-button');
toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');});