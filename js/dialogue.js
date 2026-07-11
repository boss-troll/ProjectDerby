// ==========================
// dialogue.js
// PROJECT DERBY Ver.2.2
// ==========================

let currentDialogue = [];
let dialogueIndex = 0;
let dialogueEnd = null;

// --------------------------
// 会話開始
// --------------------------
function startDialogue(dialogueData, endFunction = null){

    currentDialogue = dialogueData;

    dialogueIndex = 0;

    dialogueEnd = endFunction;

    showScreen(dialogueScreen);

    showDialogue();

}

// --------------------------
// 会話表示
// --------------------------
function showDialogue(){

    const data = currentDialogue[dialogueIndex];

    dialoguePlace.textContent = data.place;

    dialogueName.textContent = data.name;

    dialogueText.textContent = data.text;

}

// --------------------------
// 次へ
// --------------------------
dialogueNextBtn.onclick = function(){

    dialogueIndex++;

    if(dialogueIndex >= currentDialogue.length){

        if(dialogueEnd){

            dialogueEnd();

        }else{

            showScreen(homeScreen);

        }

        return;

    }

    showDialogue();

};