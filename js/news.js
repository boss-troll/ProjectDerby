// ==========================
// PROJECT DERBY
// news.js
// Ver.1.0
// ==========================

function showNews(first, second, third){

    showScreen(newsScreen);

    const newsList = document.getElementById("newsList");

    newsList.innerHTML = `

    <div class="newsCard">

        <h2>🏆 レース速報</h2>

        <h3>優勝　${first.name}</h3>

        <p>

        2着　${second.name}<br>

        3着　${third.name}

        </p>

    </div>

    <div class="newsCard">

        <h2>⭐ 優勝馬データ</h2>

        <p>

        調子：${first.condition}<br>

        脚質：${first.style}<br>

        スピード：${first.speed}<br>

        スタミナ：${first.stamina}<br>

        瞬発力：${first.sprint}

        </p>

    </div>

    <div class="newsCard">

        <h2>📰 コメント</h2>

        <p>

        「${first.name} が見事な走りで勝利！
        次走にも期待が高まります！」

        </p>

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