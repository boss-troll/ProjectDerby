// ==========================
// PLAYER DATA
// ==========================

const player = {

    name: "",

    age: 22,

    year: 2026,

    month: 4,

    week: 1,

    money: 1500000,

    salary: 3800000,

    reputation: 0,

    owner: false,

job: "会社員"

};
// ==========================
// カレンダー
// ==========================

let year = 2026;
let month = 4;
let week = 1;

function updateDate(){

    homeDate.textContent =
    `${year}年${month}月　第${week}週`;

}
document.getElementById("nextWeekBtn").onclick = function(){

    week++;

    if(week > 4){

        week = 1;

        month++;

    }

    if(month > 12){

        month = 1;

        year++;

    }

    updateDate();

};
updateDate();