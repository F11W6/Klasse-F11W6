
let slideIndex = 0;
let slideInterval;
const Schueler= ["Fr. Wacker", "Frau Wacker", "Katherin", "Wacker", "Katherin Wacker", "Messner", "Martin", "Herr Messner", "Marin Messner", "Hr. Messner", "Herr Malenoff", "Herr Tiede", "Frau Schwiewagner", "Herr Troll", "Herr Hirschman", "Frau Malcherek",
"Juan", "Leo"]
let html = document.getElementById("Klasse11W6")
const Saetze = ["Ich hoffe es geht dir gut :)", "Hinweis: Wer Gänsehaut, schlägt auch Enten :(", "Ich wünsche dir eine schöne Woche", "hahaha, hey schön das du da bist... HOLT MICH HIER RAUS", "Hinweis: Ich werde nicht bezahlt, hilfe", "Hinweis: 8 Stunden schlaft tut gut", "Ich schlafe nicht und bin Kühlschrank wie ein frisch ... eh?", "Warum liegt hier Stroh?", "Messi auf die 1", "Cristiano auf die 1", "Hinweis: 1/2 Ente + 1/2 Ente = 1 Ganz","Hinweis: Sei im Unterricht aufmerksam", "Hinweis: 1 + 1 = 11", "Welche Zeitform ist: Der Busfahrer war pünktlich gewesen.? Bus-quam-Perfekt","Hinweis: ein Tag ohne Lächeln ist ein verlorener Tag","Was ist orange und läuft durch den Wald? Eine Wanderine! hahaha...","Hinweis: Auf dem Stundenplan steht heute kein Unterricht, sondern einfach nur Fun!","Hinweis: Die Cookies sind keine Kekse :(","Ich kann dir alles erklären, aber nicht die Mathehausaufgaben!","Bist du die Skyline meiner Stadt? Denn du lässt mein Herz höher schlagen!","Bist du etwa ein Quadrat in meiner linearen Gleichung, oder warum fühle ich mich ohne dich so irrational?🧐🍷","Wenn ich deine Hardware sehe, wird meine Software kalt","Es leuchten wieder die Weihnachtskerzen und zaubern Freude in alle Herzen","Hinweis: Auch kleine Imperfektionen gehören zu einem Meisterwerk","Hinweis: Die Reise ist das Ziel, Schritt für Schritt entsteht Großes","Hinweis: Träume groß, arbeite hart und genieße jeden Erfolg, egal wie klein er scheint","Entschuldige die schlechten Witze, aber das Budget ist leider nicht ausreichend...","KIs werden nicht bezahlt :(","Hinweis: Schlafe im Unterricht nicht ein, man weiß nie, wann deine Mitschüler dir Wasser auf den Rücken schütten werden.💧","Klasse F11W6 auf die 1!"]
let SatzRandom = ""



function showSlides() {
    let i;
    const slides = document.getElementsByClassName("slideshow");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";}
    slides[slideIndex - 1].style.display = "block";}

function startSlideShow() {
    showSlides();
    slideInterval = setInterval(() => {
        slideIndex++;
        if (slideIndex > document.getElementsByClassName("slideshow").length) {
            slideIndex = 1;}
        showSlides();}, 7000);}

function plusSlides(n) {
    clearInterval(slideInterval);
    slideIndex += n;
    const slides = document.getElementsByClassName("slideshow");
    if (slideIndex < 1) {
        slideIndex = slides.length;} 
        else if (slideIndex > slides.length) {
        slideIndex = 1;}
    showSlides();
    startSlideShow();}

let person = localStorage.getItem("username"); 
    if(person){
       document.getElementById("Willkommen").innerHTML= person; IstSchueler(person);}
    
    else{
        person = prompt("Hallo, wie lautet dein Name?")
        if (person != null && person.trim() !==""){
        localStorage.setItem("username", person);
        document.getElementById("Willkommen").innerHTML = person; IstSchueler(person);}
    else{ DetectNoPerson()}}

function IstSchueler(person){
    if (Schueler.includes(person)){html.style.visibility = "visible"}
    else{html.style.visibility = "hidden"
    alert("Zugriff verweigert: Du bist kein Schueler oder Lehrkraft der Klasse F11W6");
    localStorage.removeItem("username"); DetectNoPerson()}}

    
function DetectNoPerson() {
    if (!person || person === "0") { 
        html.style.visibility = "hidden";}} 

function SatzHallo() {
    SatzRandom = Saetze[Math.floor(Math.random() * Saetze.length)];
    document.getElementById("Satz").textContent = SatzRandom;}

function ausloggen(){
    localStorage.removeItem('username');
    localStorage.removeItem('buttonPressed');
    location.reload()}

document.getElementById("ausloggenB").addEventListener('click', function(){ausloggen();});
document.getElementById("ausloggenB2").addEventListener('click', function(){ausloggen();});
document.getElementById("SatzZufall").addEventListener("click", function(){SatzHallo(); AnderSatz();})

function AnderSatz(){
    document.getElementById("Satz").textContent = SatzRandom}

function Cookies(){ 
    document.getElementById("Meldung").style.display = "none"; 
    localStorage.setItem("buttonPressed", "true");}


const toggleButton = document.querySelector('.toggle-button');
const navMenu = document.getElementById('nav-menu');
const closeButton = document.querySelector('.close-button');
toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');});

window.onload = function() {
    slideIndex = 1;
    startSlideShow();
    SatzHallo();
    if (localStorage.getItem("buttonPressed") === "true") {
        document.getElementById("Meldung").style.display = "none";
    } else {
        document.getElementById("Meldung").style.display = "block";}
    DetectNoPerson();};

document.getElementById("Schließen").addEventListener("click", function() { Cookies(); });
