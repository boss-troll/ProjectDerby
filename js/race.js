// ===================================
// PROJECT DERBY
// race.js
// Ver.0.8.0
// ===================================

let raceData = [];
let raceFinished = false;

// レース開始
function createRace(horses){

    raceFinished = false;

    raceData = horses.map(horse => ({

        ...horse,

        position:0,

        currentSpeed: 0,

        staminaLeft: horse.stamina,
condition: "普通"

    }));

}

// 1ターン進める
function advanceRace(){

    if(raceFinished){
        return;
    }

    raceData.forEach(horse=>{

        let move = horse.speed;

        // 脚質補正
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

        move += Math.floor(Math.random()*5)-2;

        move += (horse.staminaLeft-80)/10;

        move += horse.sprint*0.05;

        horse.position += move;

    });

    raceData.sort((a,b)=>b.position-a.position);

   if(raceData[0].position>=2000){
        raceFinished = true;

    }

}