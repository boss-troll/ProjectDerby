// ==========================
// OPENING
// ==========================

const openingStory = [

"2026年4月",

"主人公はどこにでもいる\n普通の会社員だった。",

"夢はある。",

"金持ちになること。"

];

let openingIndex = 0;

function startOpening(){

    newGameScreen.style.display = "none";

    openingScreen.style.display = "none";

dialogueScreen.style.display = "block";

startDialogue(companyDialogue);

    openingIndex = 0;

    openingText.innerHTML =
        openingStory[0].replace(/\n/g,"<br>");

}

// ---------- 主人公作成 ----------
document.getElementById("createPlayerBtn").onclick = function(){

    const name = document.getElementById("playerName").value.trim();

    if(name === ""){

        alert("名前を入力してください。");

        return;

    }

    player.name = name;

    player.schedule =
"先輩と競馬場へ行く約束をしている。";

  showHome();

newGameScreen.style.display = "none";

startOpening();
};



// ==========================
// PROJECT DERBY
// 人生モード
// ==========================



// ==========================
// HOME
// ==========================




// ==========================
// 仕事
// ==========================




//     const workEvents = [

//     {
//         title:"平凡な一週間",
//         text:"今週も無事に仕事を終えた。"
//     },

//     {
//         title:"上司",
//         text:"上司に仕事を褒められた。"
//     },

//     {
//         title:"残業",
//         text:"残業で少し疲れてしまった。"
//     },

//     {
//         title:"同期",
//         text:"同期と協力して仕事を終えた。"
//     },

//     {
//         title:"静かな一日",
//         text:"今日は特に変わったことはなかった。"
//     }

// ];


// ==========================
// HOME更新
// ==========================

        function showHome(){

    homePlayerName.textContent =
        "名前：" + player.name;

    homeProfile.textContent =
    player.age + "歳　" + player.job;

    homeDate.textContent =
        "日付：" +
        player.year + "年 " +
        player.month + "月 第" +
        player.week + "週";

    homeFatigue.textContent =
    "疲労：" + player.fatigue + " / 200";

    homeMoney.textContent =
        "所持金：" +
        player.money.toLocaleString() +
        "円";

    homeSalary.textContent =
        "年収：" +
        player.salary.toLocaleString() +
        "円";

    homeNews.textContent =
        player.news;

    // ←これを追加
    homeSchedule.textContent =
        player.schedule;

}


// ==========================
// イベントデータ
// ==========================
const weeklyEvents = [

    {
        title:"平凡な一週間",
        text:"今週もいつも通り仕事を終えた。"
    },

    {
        title:"競馬の広告",
        text:"駅で日本ダービーのポスターを見かけた。"
    },

    {
        title:"競馬新聞",
        text:"コンビニで競馬新聞が目に入った。"
    }

];

// ==========================
// ランダムイベント取得
// ==========================
function getWeeklyEvent(){

    return weeklyEvents[
        Math.floor(Math.random()*weeklyEvents.length)
    ];

}

// ==========================
// 1週間進める
// ==========================
function nextWeek(){

    // 平日の仕事
player.fatigue += 20;

// 最大200まで
if(player.fatigue > 200){
    player.fatigue = 200;
}

    player.week++;

    if(player.week > 4){

        player.week = 1;
        player.month++;

       // 給料日（月末）
const monthlySalary = Math.floor(player.salary / 12);

player.money += monthlySalary;

alert(
    "💰 給料日！\n\n+" +
    monthlySalary.toLocaleString() +
    "円"
);

    }

    if(player.month > 12){

        player.month = 1;
        player.year++;
        player.age++;

    }

// ==========================
// 今月のニュース更新
// ==========================

if(monthlyNews[player.month]){

    const newsList = monthlyNews[player.month];

    player.news =
        newsList[
            Math.floor(Math.random() * newsList.length)
        ];

}else{

    player.news =
        "🐎 今週も全国でレースが開催されます。";

}

// ==========================
// HOME更新
// ==========================

showHome();

}

// ==========================
// 週間イベント（仮）
// ==========================
function weeklyEvent(){

    const events = [

        "特に何もない一週間だった。",
        "競馬の広告を見かけた。",
        "コンビニで競馬新聞が目に入った。",
        "会社で競馬の話を耳にした。",
        "テレビでGⅠのCMが流れていた。"

    ];

    const event =
        events[
            Math.floor(Math.random() * events.length)
        ];

    alert(event);

}

// ==========================
// 仕事終了
// ==========================
document.getElementById("workNextBtn").onclick = function(){

    // 仕事画面を閉じる
    workScreen.style.display = "none";

    // 1週間進める
    nextWeek();

    // イベント発生
    const event = getWeeklyEvent();

console.log(event.title);
console.log(event.text);

    // HOMEへ戻る
    homeScreen.style.display = "block";

};
// ==========================
// Opening
// ==========================
document.getElementById("openingNextBtn").onclick = function(){

    openingIndex++;

    if(openingIndex >= openingStory.length){

        openingScreen.style.display = "none";

        homeScreen.style.display = "block";

        return;

    }

    openingText.innerHTML =
        openingStory[openingIndex].replace(/\n/g,"<br>");

};



// ==========================
// Event
// ==========================

// ==========================
// 外出
// ==========================

// HOME → 外出
document.getElementById("outingBtn").onclick = function(){

    showScreen(outingScreen);

};

// 外出 → HOME
document.getElementById("goHomeBtn").onclick = function(){

    showScreen(homeScreen);

};

// 競馬場
// 外出 → 競馬場
document.getElementById("goRaceCourseBtn").onclick = function(){

    showScreen(raceCourseScreen);

};

// 競馬場 → 外出
document.getElementById("backOutingBtn").onclick = function(){

    showScreen(outingScreen);

};

// 入場
document.getElementById("enterRaceCourseBtn").onclick = function(){

    alert("次のSTEPで競馬場の中へ入ります。");

};

// ショップ
document.getElementById("goShopBtn").onclick = function(){

    alert("ショップは準備中です。");

};

// ==========================
// 休む
// ==========================


// ==========================
// 休日を選ぶ
// ==========================

function selectHoliday(schedule){

    player.schedule = schedule;

    showHome();

}
// ==========================
// 競馬ニュース
// ==========================

const horseNews = [

    "🏆 日本ダービーまであと1週間！",

    "🌟 注目の2歳馬がデビュー予定。",

    "😢 ベテラン競走馬が引退を発表。",

    "☔ 今週は雨予報。馬場状態に注目。",

    "🔥 今週はGⅠ開催！"

];

// ==========================
// 勉強
// ==========================

function study(type){

    player.knowledge++;

    player.knowledgeUnlock[type] = 1;

    player.fatigue += 5;

    if(player.fatigue > 200){
        player.fatigue = 200;
    }

    player.schedule = "📚 勉強した";

    showHome();   // ← データ更新だけ

}
// ==========================
// 休む
// ==========================

function restPlayer(){

    // 回復量（20～40）
    const recover = Math.floor(Math.random() * 21) + 20;

    player.fatigue = Math.max(0, player.fatigue - recover);

}