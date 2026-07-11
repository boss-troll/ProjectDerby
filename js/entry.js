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

        entryList.innerHTML += `

        <div class="entryHorse">

            <b>${index+1}.</b>

            ${horse.name}

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