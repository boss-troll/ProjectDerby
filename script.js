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


// ================================
// タイトル画面
// ================================




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
    document.getElementById("horseStyle").textContent =
    "脚質　" + horse.style;

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

    horseListScreen.style.display = "none";
    raceScreen.style.display = "block";

    raceDistance.textContent =
        document.getElementById("distance").value;
raceGoal = Number(
    document.getElementById("distance").value.replace("m","")
);
    raceInfo.textContent =
        document.getElementById("weather").value + "　" +
        document.getElementById("ground").value;

    commentary.innerHTML = "ゲートイン開始...<br>";
    ranking.innerHTML = "";

    createRace(raceHorses);

    raceTimer = setInterval(runRace,1000);

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
document.getElementById("newsBackBtn").onclick = function(){

    newsScreen.style.display = "none";

    titleScreen.style.display = "block";

};

function runRace() {

    advanceRace();

    // 順位表示
    ranking.innerHTML = "";

    raceData.forEach((horse, index) => {

        ranking.innerHTML += `
        <b>${index + 1}位</b>
        ${horse.name}
        (${Math.floor(horse.position)}m)
        <br>
        `;

    });

    // 残り距離
    const remain = Math.max(
        0,
        raceGoal - Math.floor(raceData[0].position)
    );

    // 実況
    if(commentaryStep === 0){

        commentary.innerHTML += "🏇 スタートしました！<br>";
        commentaryStep++;

    }
    else if(commentaryStep === 1 && remain <= raceGoal * 0.8){

        let message = "";

        switch(raceData[0].style){

            case "逃げ":
                message = `🐎 ${raceData[0].name} がハナを奪いました！`;
                break;

            case "先行":
                message = `🏇 ${raceData[0].name} が好位から先頭へ！`;
                break;

            case "差し":
                message = `⚡ ${raceData[0].name} が差してきた！`;
                break;

            case "追込":
                message = `🔥 ${raceData[0].name} が大外から一気に伸びる！`;
                break;

            default:
                message = `🐎 ${raceData[0].name} が先頭！`;
        }

        commentary.innerHTML += message + "<br>";
        commentaryStep++;

    }
    else if(commentaryStep === 2 && remain <= raceGoal * 0.5){

        commentary.innerHTML += "🏇 レースは中盤へ！<br>";
        commentaryStep++;

    }
    else if(commentaryStep === 3 && remain <= raceGoal * 0.2){

        commentary.innerHTML += "🔥 最後の直線！！<br>";
        commentaryStep++;

    }

    commentary.scrollTop = commentary.scrollHeight;

    // ゴール
    if(raceFinished){

        clearInterval(raceTimer);

        commentary.innerHTML += `
        <hr>
        <h2>🏁 ゴーーーーール！！</h2>

        <h2>🥇 優勝</h2>

        <h1>${raceData[0].name}</h1>

        <p>
        スピード ${raceData[0].speed}<br>
        スタミナ ${raceData[0].stamina}<br>
        瞬発力 ${raceData[0].sprint}<br>
        脚質 ${raceData[0].style}
        </p>

        <hr>
        `;

        setTimeout(function(){

            showNews(
                raceData[0],
                raceData[1],
                raceData[2]
            );

        },3000);

    }

}