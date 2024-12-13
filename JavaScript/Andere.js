const startDatum = new Date('2024-09-10');
const heute = new Date();
const vergangeneTage = Math.floor((heute - startDatum) / (1000 * 60 * 60 * 24));
    document.getElementById('tageZaehler').innerText = ` ${vergangeneTage}`;
const Ende = new Date('2025-07-31');
const Ziel = Math.floor((Ende - heute) / (1000 * 60 * 60 * 24));
    document.getElementById("Zielende").innerText = `${Ziel}`
const blocks = document.querySelectorAll(".Tic-Tac-Toe th");
let currentPlayer = "X";
let count = 0;




function addClick() {
    count++; 
    document.getElementById('counter').textContent = `Anzahl der Klicks: ${count}`;
if (count===3){document.getElementById('SatzNummer').textContent = "Weiter so!"}
else if (count===10){document.getElementById('SatzNummer').textContent = "Weiter weiter!"}
else if (count===30){document.getElementById('SatzNummer').textContent = "Sieht gut aus!"}
else if (count===100){document.getElementById('SatzNummer').textContent = "Unglaublich..."}
else if (count===200){document.getElementById('SatzNummer').textContent = "Als ob du immer noch da bist!"}

else{document.getElementById("SatzNummer").textContent = "Weiter so!"}}


blocks.forEach(block => {
    block.addEventListener("click", () => {
        if (block.textContent === "") {
            block.textContent = currentPlayer;
            block.classList.add(currentPlayer);
            currentPlayer = currentPlayer === "X" ? "O" : "X";
            checkWinner();}});});

function displayMessage(message) {
    const messageBox = document.getElementById("message");
    messageBox.textContent = message;}
function checkWinner() {
    const winConditions = [
        ["Bock1", "Bock2", "Bock3"],
        ["Bock4", "Bock5", "Bock6"],
        ["Bock7", "Bock8", "Bock9"],
        ["Bock1", "Bock4", "Bock7"],
        ["Bock2", "Bock5", "Bock8"],
        ["Bock3", "Bock6", "Bock9"],
        ["Bock1", "Bock5", "Bock9"],
        ["Bock3", "Bock5", "Bock7"],];

     for (const condition of winConditions) {
        const [a, b, c] = condition.map(id => document.getElementById(id));
        if (
            a.textContent !== "" &&
            a.textContent === b.textContent &&
            a.textContent === c.textContent) {
            [a, b, c].forEach(cell => cell.classList.add("winner"));
            displayMessage(`Spieler ${a.textContent} hat gewonnen!`);
            return;}}

    if ([...blocks].every(block => block.textContent !== "")) {
        displayMessage("Unentschieden!");}}

function resetGame() {
    blocks.forEach(block => {
        block.textContent = "";
        block.classList.remove("X", "O", "winner");
        block.style.backgroundColor = "";});
    currentPlayer = "X";}

document.getElementById("resetButton").addEventListener("click", resetGame);


const toggleButton = document.querySelector('.toggle-button');
const navMenu = document.getElementById('nav-menu');
const closeButton = document.querySelector('.close-button');
toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('active');});

closeButton.addEventListener('click', () => {
    navMenu.classList.remove('active');});