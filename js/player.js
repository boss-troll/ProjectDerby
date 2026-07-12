// ==========================
// PLAYER DATA
// ==========================

const player = {

    // 基本情報
    name: "",

    age: 22,

    job: "会社員",

    // 日付
    year: 2026,

    month: 4,

    week: 1,

        // お金
    money: 300000,
    salary: 3000000,


    // 今週の予定
    schedule: "特に予定はありません。",

    news:"今週は特にニュースはありません。",

    // ステータス
    fatigue: 0,        // 疲労
    motivation: 100,   // やる気

    // 競馬
    knowledge: 0,      // 競馬知識
    // 解放済み知識
knowledgeUnlock: {

    style: 0,      // 脚質
    paddock: 0,    // パドック
    training: 0,   // 調教
    bloodline: 0,  // 血統
    race: 0,       // レースの見方
    jockey: 0,     // 騎手
    course: 0      // コース

},
    // 将来実装予定
// 馬主編で使用する隠しパラメータ
// horseLove: 0,
    reputation: 0,     // 評判
    owner: false       // 馬主かどうか

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

    // ==========================
    // 平日は自動で仕事
    // ==========================

    player.fatigue += 20;

// 疲労は200まで
if(player.fatigue > 200){
    player.fatigue = 200;
}

    // 1週間進む
    nextWeek();

    // ランダムイベント
    weeklyEvent();

    // HOME更新
    showHome();

};

