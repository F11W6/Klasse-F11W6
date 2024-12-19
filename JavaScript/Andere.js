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


const ball = document.getElementById("ball");
const paddle = document.getElementById("paddle");
const gameArea = document.getElementById("gameArea");
const scoreDisplay = document.getElementById("score");

let ballX = gameArea.offsetWidth / 2 - ball.offsetWidth / 2;
let ballY = 0;
let ballSpeedX = 2;
let ballSpeedY = 3;
let paddleX = gameArea.offsetWidth / 2 - paddle.offsetWidth / 2;
let paddleSpeed = 20;
let score = 0;
let isGameOver = false;
let gameLoop;

function moveBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    if (ballX <= 0 || ballX + ball.offsetWidth >= gameArea.offsetWidth) {
        ballSpeedX = -ballSpeedX;}
    if (ballY <= 0) {
        ballSpeedY = -ballSpeedY;}
    if (
        ballY + ball.offsetHeight >= gameArea.offsetHeight - paddle.offsetHeight &&
        ballX + ball.offsetWidth >= paddleX &&
        ballX <= paddleX + paddle.offsetWidth) {
        ballSpeedY = -ballSpeedY;
        score++;
        scoreDisplay.textContent = "Score: " + score;}
    if (ballY + ball.offsetHeight >= gameArea.offsetHeight) {
        isGameOver = true;
        clearInterval(gameLoop);
        document.getElementById("Over").textContent = "Game Over! Dein Score: " + score;}

    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";}

document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
        paddleX -= paddleSpeed;
        if (paddleX < 0) paddleX = 0;
    } else if (event.key === "ArrowRight") {
        paddleX += paddleSpeed;
        if (paddleX + paddle.offsetWidth > gameArea.offsetWidth) {
            paddleX = gameArea.offsetWidth - paddle.offsetWidth;}}
    paddle.style.left = paddleX + "px";});

function StartGameBall() {
    if (isGameOver) {
        resetGameBall();}
    gameLoop = setInterval(moveBall, 10);}

function resetGameBall() {
    ballX = gameArea.offsetWidth / 2 - ball.offsetWidth / 2;
    ballY = 0;
    ballSpeedX = 2;
    ballSpeedY = 3;
    score = 0;
    scoreDisplay.textContent = "Score: " + score;
    document.getElementById("Over").innerHTML = " ";
    isGameOver = false;
    paddleX = gameArea.offsetWidth / 2 - paddle.offsetWidth / 2;
    paddle.style.left = paddleX + "px";
    clearInterval(gameLoop);
    ball.style.left = ballX + "px";
    ball.style.top = ballY + "px";}

document.getElementById("StarteBall").addEventListener("click", function () {StartGameBall();});

 

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


window.onload = function(){
    FrageWechsel()}
