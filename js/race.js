// ===================================
// PROJECT DERBY
// race.js
// Ver.1.0
// ===================================

// ----------------------
// グローバル
// ----------------------
window.raceData = [];
window.raceFinished = false;

let lastLeader = "";

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
function setRaceInfo(course, weather, ground){

    currentCourse = course;
    currentWeather = weather;
    currentGround = ground;

}

// ----------------------
// 調子抽選
// ----------------------
function getCondition(){

    const conditions = [

        "絶好調",
        "好調",
        "普通",
        "普通",
        "普通",
        "不調",
        "絶不調"

    ];

    return conditions[
        Math.floor(Math.random() * conditions.length)
    ];

}

// ----------------------
// レース作成
// ----------------------
function createRace(horses){

    raceFinished = false;

    raceData = horses.map(horse => ({

        ...horse,

        position:0,

        currentSpeed:0,

        staminaLeft:horse.stamina,

        condition:getCondition()

    }));

    lastLeader = raceData[0].name;

}
// ----------------------
// レース進行
// ----------------------
function advanceRace(){

    raceData.forEach(horse => {

        let move = horse.speed;

        // ランダム補正
        move += Math.floor(Math.random() * 5) - 2;

        // スタミナ補正
        move += (horse.staminaLeft - 80) / 10;

        // 瞬発力補正
        move += horse.sprint * 0.05;

        // 調子補正
        switch(horse.condition){

            case "絶好調":
                move += 5;
                break;

            case "好調":
                move += 2;
                break;

            case "不調":
                move -= 2;
                break;

            case "絶不調":
                move -= 5;
                break;

        }

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

        // 脚質
        switch(horse.style){

            case "逃げ":
                if(horse.position < raceGoal * 0.3){
                    move += 5;
                }
                break;

            case "先行":
                if(horse.position < raceGoal * 0.6){
                    move += 3;
                }
                break;

            case "差し":
                if(horse.position > raceGoal * 0.5){
                    move += 4;
                }
                break;

            case "追込":
                if(horse.position > raceGoal * 0.8){
                    move += 8;
                }
                break;

        }

        horse.position += move;

        // スタミナ消費
        horse.staminaLeft -= 0.3;

    });

    // 順位更新
    raceData.sort((a,b)=>b.position-a.position);

    // ゴール判定
    if(raceData[0].position >= raceGoal){

        raceFinished = true;

    }

}
// ----------------------
// レース進行
// ----------------------
function runRace(){

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

        clearInterval(raceTimer);

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

            showNews(

                raceData[0],

                raceData[1],

                raceData[2]

            );

        },3000);

    }

}