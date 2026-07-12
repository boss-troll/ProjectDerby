// ==========================
// result.js
// PROJECT DERBY Ver.1.0
// ==========================

function showResult(){

    showScreen(resultScreen);

    // 優勝馬名
    winnerName.innerHTML =
    "🏆 優勝<br><br>" +
    raceData[0].name;

    // レース評価
    let star = "★★★☆☆";
    let comment = "平均的なレースでした。";

   if(resultTime <= raceRecords[raceGoal]){

    star = "★★★★★";
    comment = "🏆 レコード更新！！";

}else if(resultTime <= raceRecords[raceGoal] + 1){

    star = "★★★★☆";
    comment = "素晴らしいタイム！";

}else if(resultTime <= raceRecords[raceGoal] + 2){

    star = "★★★☆☆";
    comment = "好タイムでした。";

}else{

    star = "★★☆☆☆";
    comment = "次回に期待！";

}

    // 優勝馬データ
winnerInfo.innerHTML = `

<b>タイム</b>　${resultTime}秒

<hr>

<b>調子</b>　${raceData[0].condition}<br>

<b>脚質</b>　${raceData[0].style}<br>

<b>スピード</b>　${raceData[0].speed}<br>

<b>スタミナ</b>　${raceData[0].stamina}<br>

<b>瞬発力</b>　${raceData[0].sprint}<br>

<b>スタート</b>　${raceData[0].start}<br>

<b>根性</b>　${raceData[0].guts}<br>

<b>気性</b>　${raceData[0].temper}<br>

<b>運</b>　${raceData[0].luck}

<hr>

<h2>${star}</h2>

<p>${comment}</p>

`;
    resultRanking.innerHTML="";

    raceData.forEach((horse,index)=>{

        let medal="";

        if(index===0) medal="🥇";
        else if(index===1) medal="🥈";
        else if(index===2) medal="🥉";
        else medal=(index+1)+"着";

      const winner = raceData[0];

let margin = "";

if(index === 0){

    margin = "優勝";

}else{

    const diff = winner.position - horse.position;

    margin = (diff / 12).toFixed(1) + "馬身差";

}

resultRanking.innerHTML +=

`
<div class="resultHorse">

    <h3>${medal} ${horse.name}</h3>

    <p>${margin}</p>

</div>
`;

    });

}