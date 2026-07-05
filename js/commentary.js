// ==========================
// commentary.js
// PROJECT DERBY Ver.1.0
// ==========================

let commentaryStep = 0;
let lastLeader = "";

// --------------------------
// 実況更新
// --------------------------
function updateCommentary(remain){

    const leader = raceData[0];

    // 初回のみ
    if(lastLeader === ""){
        lastLeader = leader.name;
    }

    // スタート
    if(commentaryStep === 0){

        commentary.innerHTML =
        "🏇 スタートしました！！<br>";

        commentary.innerHTML +=
        "各馬ほぼ揃ったスタートです！<br><br>";

        commentaryStep++;

    }

    // ハナ争い
    if(commentaryStep === 1 &&
       remain <= raceGoal * 0.85){

        let message="";

        switch(leader.style){

            case "逃げ":
                message =
                `🐎 ${leader.name} がハナを奪いました！`;
                break;

            case "先行":
                message =
                `🏇 ${leader.name} が好位から先頭！`;
                break;

            case "差し":
                message =
                `⚡ ${leader.name} が外から前へ！`;
                break;

            case "追込":
                message =
                `🔥 ${leader.name} はまだ後方で脚を溜めています。`;
                break;

        }

        commentary.innerHTML +=
        message + "<br><br>";

        commentaryStep++;

    }

    // 中盤
    if(commentaryStep === 2 &&
       remain <= raceGoal * 0.50){

        commentary.innerHTML +=
        "━━━━━━━━━━━━<br>";

        commentary.innerHTML +=
        "🏇 レースは中盤！<br>";

        commentary.innerHTML +=
        `先頭は ${leader.name}<br>`;

        commentary.innerHTML +=
        "━━━━━━━━━━━━<br><br>";

        commentaryStep++;

    }

    // 残り600m
    if(commentaryStep === 3 &&
       remain <= 600){

        commentary.innerHTML +=
        "📣 残り600m！！<br>";

        commentary.innerHTML +=
        "各馬スパート開始！！<br><br>";

        commentaryStep++;

    }

    // 最後の直線
    if(commentaryStep === 4 &&
       remain <= 250){

        commentary.innerHTML +=
        "━━━━━━━━━━━━<br>";

        commentary.innerHTML +=
        "🔥 最後の直線！！<br>";

        commentary.innerHTML +=
        `🥇 ${raceData[0].name}<br>`;

        commentary.innerHTML +=
        `🥈 ${raceData[1].name}<br>`;

        commentary.innerHTML +=
        `🥉 ${raceData[2].name}<br>`;

        commentary.innerHTML +=
        "━━━━━━━━━━━━<br><br>";

        commentaryStep++;

    }

    // ゴール直前
    if(commentaryStep === 5 &&
       remain <= 80){

        commentary.innerHTML +=
        "🚨 ゴール目前！！<br>";

        commentary.innerHTML +=
        `${leader.name} 粘れるか！？<br><br>`;

        commentaryStep++;

    }

    // 先頭交代
    if(leader.name !== lastLeader){

        commentary.innerHTML +=
        `⚡ ${leader.name} が先頭に立った！！<br><br>`;

        lastLeader = leader.name;

    }

    // 自動スクロール
commentary.scrollTo({

    top: commentary.scrollHeight,

    behavior:"smooth"

});

}

// --------------------------
// レース開始時
// --------------------------
function resetCommentary(){

    commentaryStep = 0;

    lastLeader = "";

    commentary.innerHTML = "";

}