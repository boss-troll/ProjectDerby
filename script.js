let raceHorses = [];
const horseListScreen = document.getElementById("horseListScreen");
const horseList = document.getElementById("horseList");
const titleScreen = document.getElementById("titleScreen");
const raceSetup = document.getElementById("raceSetup");

document.getElementById("raceBtn").onclick = function(){

    titleScreen.style.display = "none";
    raceSetup.style.display = "block";

};

document.getElementById("backBtn").onclick = function(){

    raceSetup.style.display = "none";
    titleScreen.style.display = "block";

};

document.getElementById("startRaceBtn").onclick = function(){

    raceSetup.style.display="none";
    horseListScreen.style.display="block";



    horseList.innerHTML="";

raceHorses = [...horses];

raceHorses.sort(() => Math.random() - 0.5);

raceHorses = raceHorses.slice(0,12);
for(let i=0; i<12; i++){

    const horse = raceHorses[i];

    horseList.innerHTML += `
    <p>
        ${i+1}. ${horse.name}
        <br>
        スピード ${horse.speed}
        <br>
        スタミナ ${horse.stamina}
        <br>
        瞬発力 ${horse.sprint}
    </p>
    <hr>
    `;

}

};   
document.getElementById("newGameBtn").onclick = function(){

    alert("開発中です！");

};

document.getElementById("optionBtn").onclick = function(){

    alert("開発中です！");

};
document.getElementById("raceStart").onclick=function(){

    alert("次回からレース実況を作ります！");

};
document.getElementById("horseBackBtn").onclick = function(){

    horseListScreen.style.display = "none";
    raceSetup.style.display = "block";

};