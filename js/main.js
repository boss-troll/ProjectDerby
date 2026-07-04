// ==========================
// PROJECT DERBY
// main.js
// Ver.0.9.1
// ==========================

// ---------- タイトル → レース設定 ----------
document.getElementById("raceBtn").onclick = function(){

    titleScreen.style.display = "none";
    raceSetup.style.display = "block";

};

// ---------- レース設定 → タイトル ----------
document.getElementById("backBtn").onclick = function(){

    raceSetup.style.display = "none";
    titleScreen.style.display = "block";

};

// ---------- 新しいゲーム ----------
document.getElementById("newGameBtn").onclick = function(){

    alert("開発中です！");

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

    raceHorses.forEach((horse,index)=>{

        horseList.innerHTML += `
        <div class="horseCard">

            <h3>${index+1}. ${horse.name}</h3>

            <p>スピード ${horse.speed}</p>
            <p>スタミナ ${horse.stamina}</p>
            <p>瞬発力 ${horse.sprint}</p>
            <p>脚質 ${horse.style}</p>

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
function showHorseDetail(index){

    const horse = raceHorses[index];

    horseListScreen.style.display = "none";
    horseDetailScreen.style.display = "block";

    horseName.textContent = horse.name;

    horseSpeed.textContent =
        "スピード　" + horse.speed;

    horseStamina.textContent =
        "スタミナ　" + horse.stamina;

    horseSprint.textContent =
        "瞬発力　" + horse.sprint;

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
    raceScreen.style.display = "block";

    // 距離
    raceDistance.textContent =
        document.getElementById("distance").value;

   // 競馬場をランダム選択
const course =
    raceCourses[
        Math.floor(Math.random() * raceCourses.length)
    ];

// グローバルに保存
currentCourse = course;

currentWeather =
    document.getElementById("weather").value;

    // レース情報
    raceInfo.innerHTML =
        "🏟 " + course.name + "<br>" +
        "↩ " + course.direction + "回り<br>" +
        "🌱 " + course.turf + "<br>" +
        "☀ " + document.getElementById("weather").value + "<br>" +
        "馬場 " + document.getElementById("ground").value;

    // ゴール距離
    raceGoal = Number(
        document.getElementById("distance").value.replace("m","")
    );

    commentary.innerHTML = "";
    ranking.innerHTML = "";
    commentaryStep = 0;

    createRace(raceHorses);

    raceTimer = setInterval(runRace,1000);

};