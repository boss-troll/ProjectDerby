// ==========================
// 近5走 自動生成
// 能力が高い馬ほど好成績になりやすい
// ==========================

// ==========================
// 総合能力
// ==========================

function getHorsePower(horse){

    return Math.round(

        (
            horse.speed +
            horse.stamina +
            horse.sprint +
            horse.start +
            horse.guts +
            horse.temper +
            horse.luck
        ) / 7

    );

}

// ==========================
// 近5走生成
// ==========================

function generateRecentRecord(horse){

    const recent=[];

    const average=getHorsePower(horse);

    for(let i=0;i<5;i++){

        let rank;

        if(average>=92){

            rank=Math.floor(Math.random()*3)+1;

        }else if(average>=89){

            rank=Math.floor(Math.random()*5)+1;

        }else if(average>=86){

            rank=Math.floor(Math.random()*7)+1;

        }else{

            rank=Math.floor(Math.random()*10)+1;

        }

        recent.push(
            ["①","②","③","④","⑤","⑥","⑦","⑧","⑨","⑩"][rank-1]
        );

    }

    return recent;

}
// ==========================
// 調教評価
// ==========================

function generateTraining(horse){

    const power = horse.power;

    const value = power + Math.random() * 10 - 5;

    if(value >= 94) return "S";
    if(value >= 91) return "A";
    if(value >= 88) return "B";
    if(value >= 85) return "C";

    return "D";

}

// ==========================
// 馬体重
// ==========================

function generateWeight(horse){

    // 基本体重
    const base = 440 + Math.floor(Math.random() * 81);

    // 前走からの増減
    const diff = Math.floor(Math.random() * 21) - 10;

    return {

        weight: base,

        diff: diff

    };

}

// ==========================
// パドックコメント
// ==========================

function generatePaddockComment(horse){

    const score =
        horse.power +
        (horse.training === "S" ? 5 :
         horse.training === "A" ? 3 :
         horse.training === "B" ? 1 : -2);

    if(score >= 97) return "気配は抜群。仕上がり文句なし。";
    if(score >= 93) return "踏み込み力強く好気配。";
    if(score >= 89) return "落ち着き十分。力は出せそう。";
    if(score >= 85) return "平常通りの気配。";

    return "やや気負い気味。状態が鍵。";

}

// ==========================
// 馬データ初期化
// ==========================

function initializeHorseData(){

    horses.forEach(horse=>{

        // 総合能力
        horse.power = getHorsePower(horse);

        // 近5走
        horse.recent = generateRecentRecord(horse);

    });

}
const horses = [

{
    name:"サンダーボルト",
    speed:92, stamina:84, sprint:91,
    start:93, guts:88, temper:84, luck:86,
    style:"逃げ",
    turf:90, dirt:65, rain:80,
    age:4, sex:"牡",
    short:96, mile:92, middle:82, long:68,
},

{
    name:"ブラックローズ",
    speed:88, stamina:90, sprint:84,
    start:86, guts:91, temper:89, luck:84,
    style:"先行",
    turf:85, dirt:78, rain:92,
    age:5, sex:"牡",
    short:78, mile:86, middle:94, long:91,
},

{
    name:"ライトニング",
    speed:95, stamina:79, sprint:96,
    start:90, guts:85, temper:80, luck:93,
    style:"差し",
    turf:94, dirt:68, rain:83,
    age:3, sex:"牡",
    short:98, mile:94, middle:82, long:65,
},

{
    name:"ゴールドキング",
    speed:84, stamina:95, sprint:80,
    start:82, guts:95, temper:92, luck:81,
    style:"先行",
    turf:82, dirt:90, rain:88,
    age:6, sex:"牡",
    short:70, mile:82, middle:95, long:98,
},

{
    name:"ブルーオーシャン",
    speed:86, stamina:91, sprint:82,
    start:81, guts:93, temper:91, luck:88,
    style:"追込",
    turf:84, dirt:87, rain:94,
    age:4, sex:"牡",
    short:72, mile:84, middle:92, long:97,
},

{
    name:"レッドスピア",
    speed:91, stamina:81, sprint:93,
    start:95, guts:84, temper:79, luck:90,
    style:"逃げ",
    turf:91, dirt:70, rain:79,
    age:3, sex:"牡",
    short:97, mile:92, middle:80, long:66,
},

{
    name:"シャイニングスター",
    speed:89, stamina:88, sprint:87,
    start:87, guts:89, temper:88, luck:85,
    style:"差し",
    turf:89, dirt:75, rain:90,
    age:4, sex:"牝",
    short:84, mile:91, middle:90, long:82,
},

{
    name:"グランフェニックス",
    speed:90, stamina:92, sprint:86,
    start:88, guts:94, temper:90, luck:87,
    style:"先行",
    turf:93, dirt:72, rain:81,
    age:5, sex:"牡",
    short:82, mile:90, middle:95, long:90,
},

{
    name:"ミラクルロード",
    speed:87, stamina:89, sprint:88,
    start:84, guts:90, temper:87, luck:94,
    style:"追込",
    turf:86, dirt:80, rain:95,
    age:3, sex:"牝",
    short:80, mile:88, middle:91, long:94,
},

{
    name:"ストームランナー",
    speed:93, stamina:83, sprint:92,
    start:94, guts:86, temper:81, luck:89,
    style:"逃げ",
    turf:88, dirt:82, rain:91,
    age:4, sex:"牡",
    short:95, mile:91, middle:84, long:72,
},

{
    name:"シルバーウイング",
    speed:85, stamina:94, sprint:81,
    start:83, guts:94, temper:90, luck:86,
    style:"差し",
    turf:87, dirt:85, rain:93,
    age:5, sex:"牡",
    short:74, mile:84, middle:93, long:97,
},

{
    name:"ダークホース",
    speed:88, stamina:86, sprint:90,
    start:82, guts:92, temper:84, luck:95,
    style:"追込",
    turf:84, dirt:92, rain:96,
    age:6, sex:"セ",
    short:79, mile:88, middle:90, long:93,
},

{
    name:"エターナル",
    speed:90, stamina:87, sprint:89,
    start:89, guts:88, temper:90, luck:88,
    style:"先行",
    turf:92, dirt:74, rain:84,
    age:4, sex:"牡",
    short:86, mile:92, middle:91, long:84,
},

{
    name:"クリムゾンフレア",
    speed:94, stamina:80, sprint:95,
    start:96, guts:85, temper:78, luck:91,
    style:"逃げ",
    turf:90, dirt:77, rain:82,
    age:3, sex:"牝",
    short:98, mile:94, middle:80, long:64,
},

{
    name:"ナイトブレイズ",
    speed:86, stamina:93, sprint:85,
    start:80, guts:95, temper:92, luck:93,
    style:"追込",
    turf:85, dirt:91, rain:97,
    age:5, sex:"牡",
    short:72, mile:82, middle:94, long:98,
}

];
initializeHorseData();



