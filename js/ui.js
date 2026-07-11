// ==========================
// ui.js
// PROJECT DERBY Ver.2.1
// ==========================

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
    eventScreen,
    workScreen,
    openingScreen,
    dialogueScreen
    

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