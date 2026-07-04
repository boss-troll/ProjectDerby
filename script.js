let raceTimer = null;
let raceGoal = 2000;
let commentaryStep = 0;
// ---------- レース画面 ----------
const raceScreen = document.getElementById("raceScreen");
const newsScreen = document.getElementById("newsScreen");
const commentary = document.getElementById("commentary");
const ranking = document.getElementById("ranking");
const raceDistance = document.getElementById("raceDistance");
const raceInfo = document.getElementById("raceInfo");
// ================================
// PROJECT DERBY Ver.0.4.2
// ================================

// ---------- 画面 ----------
const titleScreen = document.getElementById("titleScreen");
const raceSetup = document.getElementById("raceSetup");
const horseListScreen = document.getElementById("horseListScreen");
const horseDetailScreen = document.getElementById("horseDetailScreen");

// ---------- 一覧 ----------
const horseList = document.getElementById("horseList");

// ---------- 詳細 ----------
const horseName = document.getElementById("horseName");
const horseSpeed = document.getElementById("horseSpeed");
const horseStamina = document.getElementById("horseStamina");
const horseSprint = document.getElementById("horseSprint");

// ---------- 今回出走する馬 ----------
let raceHorses = [];