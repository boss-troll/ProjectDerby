// ---------- レース画面 ----------
const raceScreen = document.getElementById("raceScreen");
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


// ================================
// タイトル画面
// ================================

document.getElementById("raceBtn").onclick = function(){

    titleScreen.style.display = "none";
    raceSetup.style.display = "block";

};

document.getElementById("backBtn").onclick = function(){

    raceSetup.style.display = "none";
    titleScreen.style.display = "block";

};

document.getElementById("newGameBtn").onclick = function(){

    alert("開発中です！");

};

document.getElementById("optionBtn").onclick = function(){

    alert("開発中です！");

};


// ================================
// 出走馬一覧
// ================================

document.getElementById("startRaceBtn").onclick = function(){

    raceSetup.style.display = "none";
    horseListScreen.style.display = "block";

    horseList.innerHTML = "";

    // シャッフル
    raceHorses = [...horses];

    raceHorses.sort(() => Math.random() - 0.5);

    raceHorses = raceHorses.slice(0,12);

    for(let i=0;i<raceHorses.length;i++){

        const horse = raceHorses[i];

        horseList.innerHTML += `
        <div class="horseCard">

            <h3>${i+1}. ${horse.name}</h3>

            <p>スピード ${horse.speed}</p>

            <p>スタミナ ${horse.stamina}</p>

            <p>瞬発力 ${horse.sprint}</p>

            <button
                class="detailBtn"
                onclick="showHorseDetail(${i})">

                詳細

            </button>

        </div>
        `;

    }

};


// ================================
// 馬詳細画面
// ================================

function showHorseDetail(index){

    const horse = raceHorses[index];

    horseListScreen.style.display = "none";
    horseDetailScreen.style.display = "block";

    horseName.textContent = horse.name;

    horseSpeed.textContent = "スピード　" + horse.speed;
    horseStamina.textContent = "スタミナ　" + horse.stamina;
    horseSprint.textContent = "瞬発力　" + horse.sprint;

}


// ================================
// 戻る
// ================================

document.getElementById("horseBackBtn").onclick = function(){

    horseListScreen.style.display = "none";
    raceSetup.style.display = "block";

};

document.getElementById("detailBackBtn").onclick = function(){

    horseDetailScreen.style.display = "none";
    horseListScreen.style.display = "block";

};


// ================================
// レース開始（仮）
// ================================

document.getElementById("raceStart").onclick = function(){

    alert("Ver0.5でレース実況が始まります！");

};
// ================================
// レース開始
// ================================

document.getElementById("raceStart").onclick = function(){

    horseListScreen.style.display = "none";
    raceScreen.style.display = "block";

    raceDistance.textContent =
        document.getElementById("distance").value;

    raceInfo.textContent =
        document.getElementById("weather").value + "　" +
        document.getElementById("ground").value;

    commentary.innerHTML = "";
    ranking.innerHTML = "";

    raceCommentary();

};
function raceCommentary(){

    const messages = [

        "ゲートイン開始...",
        "全馬ゲートイン完了。",
        "スタートしました！",
        raceHorses[0].name + " が好スタート！",
        raceHorses[1].name + " は好位につけます。",
        "1000m通過。",
        "レースが動き始めました。",
        raceHorses[2].name + " が外から進出！",
        "最後の直線！！",
        raceHorses[0].name + " が先頭！",
        raceHorses[3].name + " が差を詰める！",
        "ゴーーーーール！！"

    ];

    let i = 0;

    const timer = setInterval(function(){

        commentary.innerHTML += messages[i] + "<br>";

        commentary.scrollTop = commentary.scrollHeight;

        i++;

        if(i >= messages.length){

            clearInterval(timer);

            showResult();

        }

    },1000);

}
function showResult(){

    ranking.innerHTML = "";

    for(let i=0;i<raceHorses.length;i++){

        ranking.innerHTML +=
        (i+1) + "着　" +
        raceHorses[i].name +
        "<br>";

    }

}