// ==========================
// commentary.js
// ==========================

function updateCommentary(remain){

   if(commentaryStep === 0){

    commentary.innerHTML +=
    "🏇 スタートしました！！<br>";

    commentary.innerHTML +=
    `🐎 ${raceData[0].name} が好スタート！<br>`;

    commentary.innerHTML +=
`😊 調子：${raceData[0].condition}<br>`;

    commentaryStep++;

}

      

    else if(commentaryStep === 1 &&
            remain <= raceGoal*0.8){

        let message = "";

        switch(raceData[0].style){

            case "逃げ":
                message =
                `🐎 ${raceData[0].name} がハナを奪いました！`;
                break;

            case "先行":
                message =
                `🏇 ${raceData[0].name} が好位から先頭へ！`;
                break;

            case "差し":
                message =
                `⚡ ${raceData[0].name} が外から差してきた！`;
                break;

            case "追込":
                message =
                `🔥 ${raceData[0].name} が大外から一気に伸びる！`;
                break;

            default:
                message =
                `🐎 ${raceData[0].name} が先頭！`;

        }

        commentary.innerHTML +=
        message + "<br>";

        commentaryStep++;

    }

   else if(commentaryStep === 2 &&
        remain <= raceGoal*0.5){

    commentary.innerHTML +=
    "━━━━━━━━━━━━<br>";

    commentary.innerHTML +=
    "🏇 1000m通過！<br>";

    commentary.innerHTML +=
    `${raceData[0].name} が依然先頭！<br>`;

    commentary.innerHTML +=
    "━━━━━━━━━━━━<br>";

    commentaryStep++;

    }    

    else if(commentaryStep === 3 &&
        remain <= raceGoal*0.2){

    commentary.innerHTML +=
    "━━━━━━━━━━━━<br>";

    commentary.innerHTML +=
    "🔥 最後の直線！！<br>";

    commentary.innerHTML +=
    `🥇 先頭 ${raceData[0].name}<br>`;

    commentary.innerHTML +=
    `🥈 2番手 ${raceData[1].name}<br>`;

    commentary.innerHTML +=
    `🥉 3番手 ${raceData[2].name}<br>`;

    commentary.innerHTML +=
    "━━━━━━━━━━━━<br>";

    commentaryStep++;
}
if(commentaryStep > 0 &&
   raceData[0].name !== lastLeader){

    commentary.innerHTML +=
    `⚡ ${raceData[0].name} が先頭へ！<br>`;

    commentary.innerHTML +=
    "🔥 先頭交代！！<br>";

    lastLeader = raceData[0].name;

}
// ← これを追加
commentary.scrollTop = commentary.scrollHeight;

}