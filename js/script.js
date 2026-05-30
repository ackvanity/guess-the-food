const startPage = document.getElementById("start");
const startBtn = document.getElementById("startBtn");

const guessPage = document.getElementById("guess");
const guessWords = document.getElementById("words");
const guessResponse = document.getElementById("response");
const guessTryAgain = document.getElementById("tryagain");

const winPage = document.getElementById("result");
const winPageAnswer = document.getElementById("answer");

const words = [
    "Nasi goreng", "Ketoprak", "Gado gado",
    "Soto Ayam", "Rendang", "Nasi Padang",
    "Rawon", "Bika Ambon", "Otak otak",
    "Pempek", "Kerak Telor", "Serabi",
    "Satu Ayam", "Gudeg", "Rujak",
    "Ayam Betutu", "Bakso Ayam", "Bakso Sapi",
    "Coto Makassar", "Ayam Rica Rica", "Bebek Betutu",
    "Nasi Uduk", "Ikan Woku", "Bubur Manado",
    "Bubur Ayam", "Lontong Sayur", "Sop Konro",
    "Nasi Liwet", "Lumpia", "Sate Lilit",
    "Martabak Manis", "Nasi Goreng Kambing", "Pisang Molen",
    "Soto Medan"
];
var ansKey;

function startGame() {
    hideAll();
    guessPage.classList.remove("hidden");

    window.ansKey = words[Math.floor(words.length * Math.random())];
    word = ansKey.split(' ')
    var randomChars = [];
    for (wi in word) {
        randomChars = randomChars.concat(word[wi].split('').sort(function () { return 0.5 - Math.random() }));
        randomChars.push(' ');
    }

    randomChars.pop();

    guessWords.innerHTML = "";

    for (ci in randomChars) {
        guessWords.innerHTML += '<div class="sticky-notes text-center">' + randomChars[ci].toUpperCase() + "</div>";
    }
}

function submit() {
    if (guessResponse.value.toLowerCase() != ansKey.toLowerCase()) {
        guessTryAgain.classList.remove("hidden");
    } else {
        hideAll();
        winPage.classList.remove('hidden');
        winPageAnswer.innerHTML = ansKey.toUpperCase();
    }
}

function hideAll() {
    startPage.classList.add("hidden");
    guessPage.classList.add("hidden");
    guessTryAgain.classList.add("hidden");
    winPage.classList.add("hidden");
}