let raceTimer = null;
let raceGoal = 2000;
// ---------- レース画面 ----------
const raceScreen = document.getElementById("raceScreen");
// ---------- 出馬表 ----------
const entryScreen = document.getElementById("entryScreen");
const entryInfo = document.getElementById("entryInfo");
const entryList = document.getElementById("entryList");
const entryRaceBtn = document.getElementById("entryRaceBtn");
// ---------- リザルト画面 ----------
const resultScreen = document.getElementById("resultScreen");
const winnerName = document.getElementById("winnerName");
const winnerInfo = document.getElementById("winnerInfo");
const resultRanking = document.getElementById("resultRanking");
const newsScreen = document.getElementById("newsScreen");
const commentary = document.getElementById("commentary");
const ranking = document.getElementById("ranking");
const raceDistance = document.getElementById("raceDistance");
const raceInfo = document.getElementById("raceInfo");
const predictionText =
document.getElementById("predictionText");
// ================================
// PROJECT DERBY Ver.0.4.2
// ================================

// ---------- 画面 ----------
// ---------- 画面 ----------
const titleScreen = document.getElementById("titleScreen");
const raceSetup = document.getElementById("raceSetup");
const horseListScreen = document.getElementById("horseListScreen");
const horseDetailScreen = document.getElementById("horseDetailScreen");

const newGameScreen = document.getElementById("newGameScreen");
const homeScreen = document.getElementById("homeScreen");
const workScreen = document.getElementById("workScreen");
const openingScreen = document.getElementById("openingScreen");
const dialogueScreen = document.getElementById("dialogueScreen");

// ---------- 一覧 ----------
const horseList = document.getElementById("horseList");

// ---------- 詳細 ----------
const horseName = document.getElementById("horseName");
const horseOverall =
document.getElementById("horseOverall");
const horseSpeed = document.getElementById("horseSpeed");
const horseStamina = document.getElementById("horseStamina");
const horseSprint = document.getElementById("horseSprint");
const horseStart = document.getElementById("horseStart");
const horseGuts = document.getElementById("horseGuts");
const horseTemper = document.getElementById("horseTemper");
const horseLuck = document.getElementById("horseLuck");
// ---------- 今回出走する馬 ----------
let raceHorses = [];
// ----------------------
// レコード
// ----------------------
let courseRecord = {

    1200:68.4,
    1400:80.9,
    1600:91.2,
    1800:105.8,
    2000:118.6,
    2400:143.1,
    3200:192.5

};
// ----------------------
// レースレコード
// ----------------------
let raceRecords = {

    1200:68.4,
    1400:80.9,
    1600:91.2,
    1800:105.8,
    2000:118.6,
    2400:143.1,
    3200:192.5

};