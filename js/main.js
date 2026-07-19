// ==========================
// PROJECT DERBY
// main.js
// Ver.0.9.1
// ==========================

// ---------- タイトル → レース設定 ----------
document.getElementById("raceBtn").onclick = function(){

         showScreen(raceSetup);
};

document.getElementById("studyBtn").onclick = function(){

    showScreen(studyScreen);

};

document.getElementById("studyBackBtn").onclick = function(){

    showScreen(homeScreen);

};

// ---------- 勉強 → 図鑑 ----------
document.getElementById("dictionaryBtn").onclick = function(){

    showScreen(dictionaryScreen);

};

document.getElementById("dictionaryBtn").onclick = function(){

    if(player.knowledgeUnlock.style >= 1){

        document.getElementById("dictionaryStyleBtn").textContent =
        "🐎 脚質";

    }else{

        document.getElementById("dictionaryStyleBtn").textContent =
        "🔒 脚質";

    }

    showScreen(dictionaryScreen);

};

// ---------- 初心者講座 ----------
document.getElementById("studyBeginnerBtn").onclick = function(){

    // 初回だけ会話イベント
    if(player.knowledgeUnlock.beginner === 0){

        player.knowledge++;

        player.knowledgeUnlock.beginner = 1;

        startDialogue(beginnerDialogue);

        return;

    }

    // 2回目以降は復習
openDictionary(
    "📖 初心者講座",
`
<b>競馬とは？</b><br><br>

競馬は馬の速さを競うスポーツです。<br><br>

プレイヤーは馬の能力や騎手、馬場状態などを予想して馬券を購入します。<br><br>

PROJECT DERBYでは、少しずつ知識を身につけながら競馬を楽しめるようになります。
`
);

};

document.getElementById("studyStyleBtn").onclick = function(){

    player.knowledge++;

    player.knowledgeUnlock.style = 1;

    alert("『脚質』を習得した！");

};

document.getElementById("restBtn").onclick = function(){

    showScreen(restScreen);

};

// ---------- 休む実行 ----------

  document.getElementById("restHomeBtn").onclick = function(){

    const event =
        restEvents[
            Math.floor(Math.random() * restEvents.length)
        ];

    alert(event);

    player.fatigue -= 25;

    if(player.fatigue < 0){
        player.fatigue = 0;
    }

    nextWeek();

    showHome();

    showScreen(homeScreen);

};

// ---------- 休む画面 → HOME ----------
document.getElementById("restBackBtn").onclick = function(){

    showScreen(homeScreen);

    

};

// ---------- レース設定 → タイトル ----------
document.getElementById("backBtn").onclick = function(){

    raceSetup.style.display = "none";
    titleScreen.style.display = "block";

};

// ---------- NEW GAME ----------
document.getElementById("newGameBtn").onclick = function(){

    titleScreen.style.display = "none";

    newGameScreen.style.display = "block";

};

// ---------- 主人公作成 → タイトル ----------
document.getElementById("newGameBackBtn").onclick = function(){

    newGameScreen.style.display = "none";

    titleScreen.style.display = "block";

};

// ---------- オプション ----------
document.getElementById("optionBtn").onclick = function(){

    alert("開発中です！");

};

// ---------- 出走馬一覧 ----------
document.getElementById("startRaceBtn").onclick = function(){

    raceSetup.style.display = "none";
    horseListScreen.style.display = "block";

    horseList.innerHTML = "";

    raceHorses = [...horses];

    raceHorses.sort(() => Math.random() - 0.5);

    const horseCount = Number(
        document.getElementById("horseCount").value
    );

    raceHorses = raceHorses.slice(0, horseCount);

raceHorses.forEach(horse=>{

    horse.power =
        horse.speed +
        horse.stamina +
        horse.sprint +
        horse.start +
        horse.guts;

});

raceHorses.sort((a,b)=>b.power-a.power);

raceHorses.forEach((horse,index)=>{

    horse.popularity = index + 1;

    horse.odds =
    (1.8 + index * 1.7).toFixed(1);

});

    raceHorses.forEach((horse,index)=>{

        horseList.innerHTML += `
        <div class="horseCard">

            <h3>${index+1}. ${horse.name}</h3>

            <p>スピード ${horse.speed}</p>
            <p>スタミナ ${horse.stamina}</p>
            <p>瞬発力 ${horse.sprint}</p>
            <p>脚質 ${horse.style}</p>
            <p>人気 ${horse.popularity}番人気</p>

<p>オッズ ${horse.odds}倍</p>

            <button
                class="detailBtn"
                onclick="showHorseDetail(${index})">

                詳細

            </button>

        </div>
        `;

    });

};

// ---------- 馬詳細 ----------
function rank(value){

    if(value >= 95) return "SS";
    if(value >= 90) return "S";
    if(value >= 85) return "A";
    if(value >= 80) return "B";
    if(value >= 75) return "C";

    return "D";

}

function overallRank(horse){

    const total =
        horse.speed +
        horse.stamina +
        horse.sprint +
        horse.start +
        horse.guts;

    const avg = total / 5;

    if(avg >= 93) return "★★★★★　SS";
    if(avg >= 90) return "★★★★☆　S";
    if(avg >= 86) return "★★★★☆　A";
    if(avg >= 82) return "★★★☆☆　B";
    if(avg >= 78) return "★★☆☆☆　C";

    return "★☆☆☆☆　D";

}

function showHorseDetail(index){

    const horse = raceHorses[index];

    horseListScreen.style.display = "none";
    horseDetailScreen.style.display = "block";

    horseName.textContent = horse.name;

    horseOverall.textContent =
"総合評価　" + overallRank(horse);

horseStart.textContent =
`スタート　${rank(horse.start)} (${horse.start})`;

horseGuts.textContent =
`根性　　　${rank(horse.guts)} (${horse.guts})`;

horseTemper.textContent =
`気性　　　${rank(horse.temper)} (${horse.temper})`;

horseLuck.textContent =
`運　　　　${rank(horse.luck)} (${horse.luck})`;
    horseSpeed.textContent =

`スピード　${rank(horse.speed)} (${horse.speed})`;

horseStamina.textContent =
`スタミナ　${rank(horse.stamina)} (${horse.stamina})`;

horseSprint.textContent =`瞬発力　${rank(horse.sprint)} (${horse.sprint})`;

document.getElementById("horseStyle").textContent =
"脚質　" + horse.style;

}

// ---------- 馬詳細 → 一覧 ----------
document.getElementById("detailBackBtn").onclick = function(){

    horseDetailScreen.style.display = "none";
    horseListScreen.style.display = "block";

};

// ---------- 一覧 → レース設定 ----------
document.getElementById("horseBackBtn").onclick = function(){

    horseListScreen.style.display = "none";
    raceSetup.style.display = "block";

};
// ---------- レース開始 ----------
document.getElementById("raceStart").onclick = function(){

horseListScreen.style.display = "none";

// 競馬場をランダム選択
const course =
    raceCourses[
        Math.floor(Math.random() * raceCourses.length)
    ];

// グローバルに保存
setRaceInfo(

    course,

    document.getElementById("weather").value,

    document.getElementById("ground").value

);



// ゴール距離
raceGoal = Number(
    document.getElementById("distance").value.replace("m","")
);

// 出馬表を表示
showEntry();


};


document.getElementById("nextNewsBtn").onclick=function(){

    resultScreen.style.display="none";

    showNews(

        raceData[0],

        raceData[1],

        raceData[2]

    );

};
// ---------- リザルトを見る ----------
document.getElementById("resultBtn").onclick = function(){

    document.getElementById("resultButtonArea").style.display = "none";

    showResult();

};
// ==========================
// 初心者講座
// ==========================
document.getElementById("studyBeginnerBtn").onclick = function(){

    alert(
`📖 初心者講座

競馬は馬の能力だけではなく、

・脚質
・調教
・パドック
・騎手

など様々な要素で結果が変わります。

これから少しずつ学んでいきましょう！`
    );

    player.knowledge++;

    player.knowledgeUnlock.beginner = 1;

};
// ---------- 図鑑 → 勉強 ----------
document.getElementById("dictionaryBackBtn").onclick = function(){

    showScreen(studyScreen);

};

document.getElementById("dictionaryStyleBtn").onclick = function(){

    if(player.knowledgeUnlock.style === 0){

        alert("まだ習得していません。");

        return;

    }

    openDictionary(
    "🐎 脚質",
`
<b>逃げ</b><br>
スタートから先頭を走り、そのまま押し切る脚質。<br><br>

<b>先行</b><br>
先頭集団でレースを進め、最後まで粘る脚質。<br><br>

<b>差し</b><br>
中団で脚をため、直線で一気に伸びる脚質。<br><br>

<b>追込</b><br>
最後方から豪快に追い込む脚質。
`
);

};

document.getElementById("dictionaryDetailBackBtn").onclick = function(){

    showScreen(dictionaryScreen);

};

function openDictionary(title, text){

    dictionaryTitle.textContent = title;

    dictionaryText.innerHTML = text;

    showScreen(dictionaryDetailScreen);

}