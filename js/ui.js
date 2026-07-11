// ==========================
// ui.js
// PROJECT DERBY Ver.1.0
// ==========================

// ----------------------
// 画面切替
// ----------------------
function showScreen(screen){

    titleScreen.style.display = "none";
    raceSetup.style.display = "none";
    horseListScreen.style.display = "none";
    horseDetailScreen.style.display = "none";
    entryScreen.style.display = "none";   // ←追加
    raceScreen.style.display = "none";
    resultScreen.style.display = "none";
    newsScreen.style.display = "none";

    screen.style.display = "block";

}