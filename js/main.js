// ==========================
// PROJECT DERBY
// main.js
// ==========================

// タイトル → レース設定
document.getElementById("raceBtn").onclick = function(){

    titleScreen.style.display = "none";
    raceSetup.style.display = "block";

};

// レース設定 → タイトル
document.getElementById("backBtn").onclick = function(){

    raceSetup.style.display = "none";
    titleScreen.style.display = "block";

};

// 新しいゲーム
document.getElementById("newGameBtn").onclick = function(){

    alert("開発中です！");

};

// オプション
document.getElementById("optionBtn").onclick = function(){

    alert("開発中です！");

};