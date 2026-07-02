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

        staminaLeft:horse.stamina

    }));

}

// 1ターン進める
function advanceRace(){

    if(raceFinished){
        return;
    }

    raceData.forEach(horse=>{

        let move = horse.speed;

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