// ==========================
// PROJECT DERBY
// entry.js
// Ver.2.0
// ==========================

function showEntry(){

    showScreen(entryScreen);

    entryInfo.innerHTML = `
    <h3>${currentCourse.name}</h3>

    距離　${raceGoal}m<br>
    天候　${currentWeather}<br>
    馬場　${currentGround}
    `;

    entryList.innerHTML = "";

    raceHorses.forEach((horse,index)=>{

        const frameNumber = [
"①","②","③","④","⑤","⑥","⑦","⑧",
"⑨","⑩","⑪","⑫","⑬","⑭","⑮","⑯",
"⑰","⑱"
];

        entryList.innerHTML += `

<div class="entryHorse">

    <h3>${frameNumber[index]} ${horse.name}</h3>

    <p>

⭐ ${horse.popularity}番人気

&nbsp;&nbsp;

🎯 ${horse.odds}倍
</p>

<p>
脚質：${horse.style}
</p>

<p>
性齢：
${horse.sex}${horse.age}
</p>

<p>
調教：${horse.training}
</p>

<p>

馬体重：
${horse.weight}kg

(${horse.weightDiff>=0?"+":""}${horse.weightDiff})

</p>

<p>
近5走
${horse.recent.join("")}
</p>

<p>
パドック：
${horse.paddockComment}
</p>

    <p>
    調子：${horse.condition}
    </p>

    <hr>

    <p class="entryStory">
    ${getHorseHeadline(horse)}
    </p>

</div>

`;

    });

}   // ←★★★★ ここでshowEntry終了 ★★★★


// ----------------------
// レース開始
// ----------------------
entryRaceBtn.onclick = function(){

    showScreen(raceScreen);

    // レース情報
    raceInfo.innerHTML =
        "🏟 " + currentCourse.name + "<br>" +
        "↩ " + currentCourse.direction + "回り<br>" +
        "🌱 " + currentCourse.turf + "<br>" +
        "☀ " + currentWeather + "<br>" +
        "馬場 " + currentGround;

    // 距離表示
    raceDistance.textContent = raceGoal + "m";

    ranking.innerHTML = "";

    clearInterval(raceTimer);

    createRace(raceHorses);

    resetCommentary();

    resultButtonArea.style.display = "none";

    raceTimer = setInterval(runRace, 1000);

};