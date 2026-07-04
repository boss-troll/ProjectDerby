// ==========================
// PROJECT DERBY
// news.js
// ==========================

function showNews(first, second, third){

    raceScreen.style.display = "none";
    newsScreen.style.display = "block";

    const newsList = document.getElementById("newsList");

    newsList.innerHTML = `
    <div class="newsCard">

        <h2>🏆 レース速報</h2>

        <h3>優勝　${first.name}</h3>

        <p>
        スピード：${first.speed}<br>
        スタミナ：${first.stamina}<br>
        瞬発力：${first.sprint}
        </p>

        <hr>

        <p>🥈 2着　${second.name}</p>

        <p>🥉 3着　${third.name}</p>

    </div>
    `;

}
// ----------------------
// タイトルへ戻る
// ----------------------
document.getElementById("newsBackBtn").onclick = function(){

    newsScreen.style.display = "none";
    titleScreen.style.display = "block";

};