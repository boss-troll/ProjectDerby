// ===================================
// PROJECT DERBY
// race.js
// Ver.2.0
// ===================================

// ----------------------
// グローバル
// ----------------------

window.raceData = [];
window.raceFinished = false;


// ----------------------
// 競馬場
// ----------------------

const raceCourses = [

    {
        name:"東京競馬場",
        direction:"左",
        turf:"芝"
    },

    {
        name:"中山競馬場",
        direction:"右",
        turf:"芝"
    },

    {
        name:"阪神競馬場",
        direction:"右",
        turf:"芝"
    },

    {
        name:"京都競馬場",
        direction:"右",
        turf:"芝"
    },

    {
        name:"中京競馬場",
        direction:"左",
        turf:"芝"
    }

];

// ----------------------
// 現在のレース情報
// ----------------------

let currentCourse = null;
let currentWeather = "";
let currentGround = "";

// ----------------------
// main.jsから呼ぶ
// ----------------------

function setRaceInfo(course,weather,ground){

    currentCourse = course;
    currentWeather = weather;
    currentGround = ground;

}

// ----------------------
// 調子
// ----------------------

function getCondition(){

    const conditions=[

        "絶好調",
        "好調",
        "普通",
        "普通",
        "普通",
        "不調",
        "絶不調"

    ];

    return conditions[
        Math.floor(Math.random()*conditions.length)
    ];

}

function getConditionRate(condition){

    switch(condition){

        case "絶好調": return 1.05;
        case "好調": return 1.02;
        case "普通": return 1.00;
        case "不調": return 0.98;
        case "絶不調": return 0.95;

    }

    return 1;

}

// ----------------------
// レース作成
// ----------------------

function createRace(horses){

    raceFinished=false;

    raceData = horses.map(horse => ({

    ...horse,

    position:0,

    currentSpeed:0,

    staminaLeft:horse.stamina,

    fatigue:0,

    condition:getCondition()

}));

    resetCommentary();

    document.getElementById("courseName").innerHTML=
`
🏇 第1レース
`;

    document.getElementById("distanceInfo").innerHTML=
`
🏟 ${currentCourse.name}<br>
🌱 ${currentCourse.turf} ${raceGoal}m ${currentCourse.direction}回り
`;

    document.getElementById("weatherInfo").innerHTML=
`
☀ 天候：${currentWeather}
`;

    document.getElementById("groundInfo").innerHTML=
`
🐎 出走頭数：${raceData.length}頭<br>
馬場：${currentGround}
`;

    // AI予想
    const predict=[...raceData];

    predict.sort((a,b)=>{

        const pa=
        a.speed+
        a.stamina+
        a.sprint+
        a.start+
        a.guts;

        const pb=
        b.speed+
        b.stamina+
        b.sprint+
        b.start+
        b.guts;

        return pb-pa;

    });

    predictionText.innerHTML=
`
◎ ${predict[0].name}<br>

○ ${predict[1].name}<br>

▲ ${predict[2].name}
`;

}

// ----------------------
// レース進行
// ----------------------
function advanceRace(){

    raceData.forEach(horse=>{

        let move = horse.speed;

        // 調子補正
        move *= getConditionRate(horse.condition);

        // ランダム補正
        move += Math.floor(Math.random()*5)-2;

        // スタート能力
        if(horse.position < 80){
            move += horse.start * 0.05;
        }

        // スタミナ補正
        move += (horse.staminaLeft - 80) / 10;

        // 瞬発力
        move += horse.sprint * 0.05;

        // ゴール前の根性
        if(horse.position > raceGoal - 400){
            move += horse.guts * 0.04;
        }

        // 気性
        move += (horse.temper - 80) * 0.05;

        // 運
        move += (Math.random() * horse.luck) / 25;

        // 芝・ダート適性
        if(currentCourse){

            if(currentCourse.turf === "芝"){
                move += (horse.turf - 80) * 0.1;
            }else{
                move += (horse.dirt - 80) * 0.1;
            }

        }

        // 雨適性
        if(currentWeather === "雨"){
            move += (horse.rain - 80) * 0.15;
        }

        // ----------------------
        // 脚質AI
        // ----------------------
        const progress = horse.position / raceGoal;

        switch(horse.style){

            case "逃げ":

                if(progress < 0.20){

                    move += 7;

                }else if(progress < 0.60){

                    move += 3;

                }else{

                    move -= 3;

                }

                break;

            case "先行":

                if(progress < 0.30){

                    move += 3;

                }else if(progress < 0.80){

                    move += 2;

                }else{

                    move += 1;

                }

                break;

            case "差し":

                if(progress < 0.50){

                    move -= 2;

                }else if(progress < 0.80){

                    move += 5;

                }else{

                    move += 7;

                }

                break;

            case "追込":

                if(progress < 0.70){

                    move -= 4;

                }else if(progress < 0.90){

                    move += 6;

                }else{

                    move += 12;

                }

                break;

        }

        // 前進
        horse.position += move;

if (horse.position > raceGoal) {
    horse.position = raceGoal;
}

        // スタミナ
        horse.staminaLeft -= 0.3;

        // 疲労
        horse.fatigue += 0.15;

    });

    // 順位更新
    raceData.sort((a,b)=>b.position-a.position);

    // ゴール判定
    if(raceData[0].position >= raceGoal){

        raceFinished = true;

    }

}
// ----------------------
// レース実行
// ----------------------
function runRace(){

        console.log("runRace");

     if (raceFinished) return;

    advanceRace();

    // 順位表示
    ranking.innerHTML = "";

    raceData.forEach((horse,index)=>{

        ranking.innerHTML += `
        <b>${index+1}位</b>
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
    updateCommentary(remain);

    // ゴール
    if(raceFinished){

         raceFinished = false; 

        clearInterval(raceTimer);

        // レースタイム
        const raceTime = (
            raceGoal / 16.5 +
            Math.random() * 3
        ).toFixed(1);

        window.resultTime = raceTime;

        // レコード更新
        window.newRecord = false;

        if(resultTime < raceRecords[raceGoal]){

            raceRecords[raceGoal] = Number(resultTime);

            window.newRecord = true;

        }

        // レース結果保存
        window.lastRaceResult = {

            winner : raceData[0].name,
            second : raceData[1].name,
            third : raceData[2].name,
            time : resultTime,
            course : currentCourse.name,
            distance : raceGoal,
            weather : currentWeather,
            ground : currentGround

        };

        commentary.innerHTML += `

        <hr>

        <h2>🏁 ゴーーーーール！！</h2>

        <h2>🥇 優勝</h2>

        <h1>${raceData[0].name}</h1>

        <p>

        調子　${raceData[0].condition}<br>

        スピード　${raceData[0].speed}<br>

        スタミナ　${raceData[0].stamina}<br>

        瞬発力　${raceData[0].sprint}<br>

        脚質　${raceData[0].style}

        </p>

        <hr>

        `;

        setTimeout(function(){

            document.getElementById("resultButtonArea").style.display = "block";

        },2000);

    }

}