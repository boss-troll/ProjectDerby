// ==========================
// ui.js
// PROJECT DERBY Ver.2.1
// ==========================

// ==========================
// 画面取得
// ==========================

const titleScreen = document.getElementById("titleScreen");
const raceSetup = document.getElementById("raceSetup");
const horseListScreen = document.getElementById("horseListScreen");
const horseDetailScreen = document.getElementById("horseDetailScreen");
const entryScreen = document.getElementById("entryScreen");
const raceScreen = document.getElementById("raceScreen");
const resultScreen = document.getElementById("resultScreen");
const newsScreen = document.getElementById("newsScreen");

const newGameScreen = document.getElementById("newGameScreen");
const homeScreen = document.getElementById("homeScreen");

const workScreen = document.getElementById("workScreen");
const openingScreen = document.getElementById("openingScreen");
const dialogueScreen = document.getElementById("dialogueScreen");
const outingScreen = document.getElementById("outingScreen");
const raceCourseScreen = document.getElementById("raceCourseScreen");

const studyScreen = document.getElementById("studyScreen");
const restScreen = document.getElementById("restScreen");
const dictionaryScreen = document.getElementById("dictionaryScreen");

// ----------------------
// 全画面
// ----------------------
const screens = [

    titleScreen,
    raceSetup,
    horseListScreen,
    horseDetailScreen,
    entryScreen,
    raceScreen,
    resultScreen,
    newsScreen,

    newGameScreen,
    homeScreen,

    workScreen,
    openingScreen,
    dialogueScreen,
    outingScreen,
    raceCourseScreen,

    studyScreen,
    restScreen,
    dictionaryScreen,

];

// ----------------------
// 画面切替
// ----------------------
function showScreen(screen){

    screens.forEach(s=>{

        s.style.display = "none";

    });

    screen.style.display = "block";

}