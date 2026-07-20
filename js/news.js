// ==========================
// PROJECT DERBY
// news.js
// Ver.1.0
// ==========================
// ==========================
// HOMEニュース
// ==========================

const monthlyNews = {

    1: [
        "🎍 新年最初の重賞が開催！",
        "❄ 今年最初のGⅠへ向けて各馬始動。"
    ],

    4: [
        "🌸 クラシック開幕！",
        "🏇 桜花賞が近づいてきた。"
    ],

    5: [
        "🏆 今週はいよいよ日本ダービー！",
        "🔥 ダービー馬誕生の瞬間が近い。"
    ],

    10: [
        "🍂 秋のGⅠシーズン開幕！"
    ],

    12: [
        "🏆 有馬記念まであと少し！"
    ]

};

// ==========================
// 有名馬
// ==========================

const famousHorses = [

    {
        name: "サンダーブレイズ",
        age: 3,
        style: "先行",
        popularity: 95,
        story: "去年ダービーでハナ差2着。悲願のGⅠ制覇を目指す。"
    },

    {
        name: "オーシャンスター",
        age: 4,
        style: "差し",
        popularity: 90,
        story: "鋭い末脚が武器。秋のGⅠで巻き返しを狙う。"
    },

    {
        name: "ライトニング",
        age: 2,
        style: "逃げ",
        popularity: 80,
        story: "今年デビューした期待の新馬。スピードに注目。"
    },

    {
        name: "ブラックアロー",
        age: 5,
        style: "追込",
        popularity: 88,
        story: "ベテラン実力馬。豪快な追い込みでファンを魅了する。"
    },

    {
        name: "ゴールドウイング",
        age: 3,
        style: "先行",
        popularity: 85,
        story: "クラシック戦線で注目される若き実力馬。"
    },

    {
        name: "ミッドナイトムーン",
        age: 4,
        style: "差し",
        popularity: 84,
        story: "安定した成績を残す堅実派。"
    },

    {
        name: "クリムゾンロード",
        age: 3,
        style: "逃げ",
        popularity: 82,
        story: "積極的なレース運びで波乱を演出する。"
    },

    {
        name: "シルバーフェザー",
        age: 5,
        style: "追込",
        popularity: 87,
        story: "最後の直線で鋭く伸びる実力馬。"
    },

    {
        name: "エターナルスカイ",
        age: 4,
        style: "先行",
        popularity: 91,
        story: "GⅠ制覇経験を持つトップホース。"
    },

    {
        name: "ブレイブソウル",
        age: 3,
        style: "差し",
        popularity: 86,
        story: "成長著しいクラシック世代の一頭。"
    }

];

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
function getHorseHeadline(horse){

    const headlines = [

        "前走で好内容。注目の一頭。",

        "末脚に期待が集まる。",

        "重賞初制覇を狙う。",

        "勢いそのままに連勝なるか。",

        "近走安定。上位進出に期待。",

        "今日の走りにファンの視線が集まる。",

        "クラシック候補との声も。",

        "悲願の勝利なるか。"

    ];

    return headlines[
        Math.floor(Math.random() * headlines.length)
    ];

}