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

    const horseNames=[
        "サンダーボルト",
        "ブラックローズ",
        "グランフェニックス",
        "シルバーウイング",
        "ライトニング",
        "シャイニングスター",
        "レッドスピア",
        "ブルーオーシャン",
        "ゴールドキング",
        "ミラクルロード",
        "エターナル",
        "ストームランナー",
        "ダークホース",
        "ホワイトファング",
        "スカイアロー"
    ];

    horseList.innerHTML="";

    for(let i=0;i<12;i++){

        const speed=Math.floor(Math.random()*31)+70;
        const stamina=Math.floor(Math.random()*31)+70;
        const sprint=Math.floor(Math.random()*31)+70;

        horseList.innerHTML+=`
        <p>
        ${i+1}. ${horseNames[i]}
        <br>
        スピード ${speed}
        スタミナ ${stamina}
        瞬発力 ${sprint}
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