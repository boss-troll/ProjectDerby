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




// ---------- 仕事 ----------
document.getElementById("workBtn").onclick = function(){

    homeScreen.style.display = "none";

    workScreen.style.display = "block";

    const workEvents = [

    {
        title:"平凡な一週間",
        text:"今週も無事に仕事を終えた。"
    },

    {
        title:"上司",
        text:"上司に仕事を褒められた。"
    },

    {
        title:"残業",
        text:"残業で少し疲れてしまった。"
    },

    {
        title:"同期",
        text:"同期と協力して仕事を終えた。"
    },

    {
        title:"静かな一日",
        text:"今日は特に変わったことはなかった。"
    }

];

const event =
workEvents[
    Math.floor(Math.random()*workEvents.length)
];

workMessage.innerHTML =

"<h2>" + event.title + "</h2>" +

"<p>" + event.text + "</p>";

};

// ==========================
// HOME更新
// ==========================
function showHome(){

    homePlayerName.textContent =
        "名前：" + player.name;

    homeAge.textContent =
        "年齢：" + player.age + "歳";

    homeJob.textContent =
        "職業：" + player.job;

    homeDate.textContent =
        "日付：" +
        player.year + "年 " +
        player.month + "月 第" +
        player.week + "週";

    homeMoney.textContent =
        "所持金：" +
        player.money.toLocaleString() +
        "円";

    homeSalary.textContent =
        "年収：" +
        player.salary.toLocaleString() +
        "円";

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

    player.week++;

    if(player.week > 4){

        player.week = 1;
        player.month++;

        // 給料日（月末）
        player.money += 300000;

    }

    if(player.month > 12){

        player.month = 1;
        player.year++;
        player.age++;

    }

    // HOME更新


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










// // ==========================
// // 外出
// // ==========================

// // HOME → 外出
// document.getElementById("raceCourseBtn").onclick = function(){

//     showScreen(outingScreen);

// };

// // 外出 → HOME
// document.getElementById("goBackHomeBtn").onclick = function(){

//     showScreen(homeScreen);

// };

// // 外出 → 競馬場
// document.getElementById("goRaceCourseBtn").onclick = function(){

//     alert("競馬場は次のSTEPで作成します。");

// };