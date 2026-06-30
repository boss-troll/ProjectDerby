// ===================================
// PROJECT DERBY
// race.js
// Ver.0.7.0
// ===================================

// レース中の馬
window.raceData = [];

// レース開始
function createRace(horses){

    raceData = horses.map(horse => ({

        ...horse,

        position:0,

        currentSpeed:0,

        staminaLeft:horse.stamina

    }));

}


// 100m進める
function advanceRace(){

    raceData.forEach(horse =>{

        // 基本速度
        let move = horse.speed;

        // ランダム要素
        move += Math.floor(Math.random()*5)-2;

        // スタミナ補正
        move += (horse.staminaLeft-80)/10;

        // 瞬発力を少し加える
        move += horse.sprint*0.05;

        horse.position += move;

    });

    // 順位並び替え
    raceData.sort((a,b)=>b.position-a.position);
    // ゴール判定
if(raceData[0].position >= 2000){

    clearInterval(raceTimer);

}

}