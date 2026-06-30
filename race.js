// ===================================
// PROJECT DERBY
// race.js
// Ver.0.6.1
// ===================================

function createRace(horses){

    return horses.map(horse => ({

        ...horse,

        position:0,

        currentSpeed:0,

        staminaLeft:horse.stamina

    }));

}