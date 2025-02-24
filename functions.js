//////// //////// //////// //////// DARK MODE LIBRARY CUSTOMIZATION //////// //////// //////// ////////

const options = {
    time: '0.5s', // default: '0.3s'
    backgroundColor: '#FFFEFC',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    saveInCookies: false, // default: true,
    autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);

function toggle() {
    darkmode.toggle();
}

let darkmodeSwitch = document.querySelector("input");
darkmodeSwitch.addEventListener("click", toggle);

//////// //////// //////// //////// WORD COUNTER //////// //////// //////// ////////

// Retrieve word count

function countWords() {
    let writingArea = document.querySelector("#writing-area");
    let writing = writingArea.innerText;

    return writing.split(" ").length + 1; // Source: https://stackoverflow.com/questions/18679576/counting-words-in-string
}

// Update UI with word count

function updateWordCount() {
    let wordCounter = document.querySelector("#word-count");
    let wordCount = countWords();

    wordCounter.innerText = "Words: " + wordCount;
}

// Run word counter on page load and every time the user adds or removes words

window.onload = runWordCount();

function runWordCount() {
    updateWordCount();
    
    let writingArea = document.querySelector("#writing-area");
    writingArea.addEventListener("keydown", updateWordCount);    
}

//////// //////// //////// //////// CURTAIN FALL BEHAVIOR //////// //////// //////// ////////

// Lower curtain

function lowerCurtain() {
    let curtain = document.querySelector("#curtain")
    curtain.style.height = "23vh";
    enableUpdateCurtain();
}

// Trigger curtain fall event

window.onload = triggerCurtain();

function triggerCurtain() {
    let writingArea = document.querySelector("#writing-area");
    writingArea.addEventListener("keydown", triggerDelay, { once: true });
}

// Trigger curtain fall delay interval

function triggerDelay() {
    setTimeout(lowerCurtain, 1000);
}

// Enable line visibility slider

function enableUpdateCurtain() {
    let linesSlider = document.querySelector("#lines-slider");
    linesSlider.disabled = false;

    let sliderLabel = document.querySelector("#slider-label");
    sliderLabel.style.color = "black";
}

//////// //////// //////// //////// SAVED DRAFT BEHAVIOR //////// //////// //////// ////////

// // Trigger behavior

// let saveButton = document.querySelector(".save-draft-button");
// saveButton.addEventListener("click", saveBehavior);

// function saveBehavior() {
//     addNewDraft();
//     clearLinks();
//     createAnchorLinks();
//     rescindCurtain();
//     grayOutText();
//     updateSaveButton();
//     addDraftOptions();
// }

// // Save text to local storage and history

// class Draft {
//     constructor (body, draftID) {
//         this.draftBody = body;
//         this.draftID = draftID;

//         this.element = null;
//     }
// }

// let draftArrayString = localStorage.getItem('storedDrafts');
// let allDraftsArray = JSON.parse(draftArrayString);

// if (draftArrayString === null) {
//     allDraftsArray = [];
// }

// window.onload = createAnchorLinks();

// function addNewDraft(body) {
//     let randomizer = "abcdefghijklmnopqrstuvwxyz";

//     let writingArea = document.querySelector("#writing-area");
//     let writing = writingArea.textContent;
//     let randomizerStart = (Math.floor(Math.random() * (26 - 2) + 1));
//     let randomizerEnd = (Math.floor(Math.random() * (26 - 2) + 1));
//     let randomID = randomizer[randomizerStart] + randomizer[randomizerEnd];

//     let draft = new Draft(writing, randomID);
//     allDraftsArray.push(draft);
//     saveDraftToStorage();
//     return draft;
// }

// function saveDraftToStorage() {
//     let allDraftsString = JSON.stringify(allDraftsArray);
//     localStorage.setItem('storedDrafts', allDraftsString);
// }

// // Add links to history item

// function clearLinks() {
//     let linkContainer = document.querySelector("#history-links");
//     linkContainer.innerHTML = "";
// }

// function createAnchorLinks() {

//     for (let i=0; i<allDraftsArray.length; i++) {
//         let draftID = allDraftsArray[i].draftID;

//         let anchor = document.createElement("a");
//         let anchorLink = anchor.href = "../final-project-code/history.html#" + draftID;
        
//         let draftBody = allDraftsArray[i].draftBody;
//         let draftPreview = draftBody.substring(10, 30);

//         publishAnchorLinks(anchorLink, draftPreview);
//     }
// }

// function publishAnchorLinks(link, preview) {  
//     let linksContainer = document.querySelector("#history-links");
//     let linkNode = document.createElement("div");
//     linkNode.setAttribute("class", "sidebar-link");
    
//     let historyLink = document.createElement("a");
//     historyLink.href = link;
//     historyLink.textContent = preview + "...";
    
//     linksContainer.appendChild(linkNode);
//     linkNode.appendChild(historyLink);
// }

// // Page styling

// function rescindCurtain() {
//     let curtain = document.querySelector("#curtain")
//     curtain.style.height = "1vh";
// }

// function grayOutText() {
//     let writingArea = document.querySelector("#writing-area");
//     writingArea.style.color = "#D3D3D3";
//     writingArea.style.height = "35vh";
// }

// function returnDefaultText() {
//     let writingArea = document.querySelector("#writing-area");
//     writingArea.style.color = "#000";
//     writingArea.style.height = "50vh";
// }

// function updateSaveButton() {
//     let saveButton = document.querySelector(".save-draft-button");
//     saveButton.style.color = "#6B7780";
//     saveButton.style.border = "none";
// }

// function returnSaveButton() {
//     let saveButton = document.querySelector(".save-draft-button");
//     saveButton.style.color = "#000";
//     saveButton.style.borderBottom = "2px #493DB8 solid";
// }

// // Keep going or save draft options

// function addDraftOptions() {
//     let container = document.querySelector("#draft-options");
    
//     let keepGoingButton = document.createElement("button");
//     keepGoingButton.setAttribute("id", "keep-going-button");
//     keepGoingButton.textContent = "Keep going";
//     container.appendChild(keepGoingButton);
//     keepGoingButton.addEventListener("click", keepGoingDraft);

//     let newDraftButton = document.createElement("button");
//     newDraftButton.setAttribute("id", "new-draft-button");
//     newDraftButton.textContent = "New draft";
//     container.appendChild(newDraftButton);
//     newDraftButton.addEventListener("click", reloadForNewDraft);
// };

// function removeDraftOptions() {
//     let container = document.querySelector("#draft-options");
//     let keepGoingButton = document.querySelector("#keep-going-button");
//     let newDraftButton = document.querySelector("#new-draft-button");

//     container.removeChild(keepGoingButton);
//     container.removeChild(newDraftButton);
// }

// function keepGoingDraft(){
//     lowerCurtain();
//     returnDefaultText();
//     removeDraftOptions();
//     returnSaveButton();
// }

// function reloadForNewDraft() {
//     location.reload();
// }

//////// //////// //////// //////// COPY TEXT TO CLIPBOARD //////// //////// //////// ////////

let copyButton = document.querySelector(".copy-button");
copyButton.addEventListener("click", copyDraftToClipboard);

function copyDraftToClipboard() {
    let writingArea = document.querySelector("#writing-area");
    let writing = writingArea.innerText;
    navigator.clipboard.writeText(writing);
}

//////// //////// //////// //////// CHANGE NUMBER OF VISIBLE LINES //////// //////// //////// ////////

let slider = document.querySelector("#lines-slider");

slider.addEventListener("input", (event) => {
    let curtain = document.querySelector("#curtain")
    let sliderLabel = document.querySelector("#slider-label");
    let sliderValue = document.querySelector("#lines-slider").value;

    if (sliderValue === "1") {
        curtain.style.height = "40vh"
        sliderLabel.textContent = "Lines visible: 1"
    }

    else if (sliderValue === "2") {
        curtain.style.height = "30vh"
        sliderLabel.textContent = "Lines visible: 2"
    }

    else if (sliderValue === "3") {
        curtain.style.height = "20vh"
        sliderLabel.textContent = "Lines visible: 3"
    }

    else if (sliderValue === "4") {
        curtain.style.height = "10vh"
        sliderLabel.textContent = "Lines visible: 4"
    };
})

//////// //////// //////// //////// COUNTDOWN TIMER //////// //////// //////// ////////

let timer = document.querySelector("#timer");
timer.addEventListener("click", countdown);

let countdownSeconds;
let countdownMinutes;

function countdown(){   
    countdownSeconds = setInterval(minusSeconds, 1000);
    countdownMinutes = setInterval(minusMinutes, 60000);

    let timer = document.querySelector("#timer");
    timer.style.border = "2px #D40C7A solid";
    timer.style.color = "#D40C7A";

    let restartElement = document.querySelector("#restart");

    if (restartElement !== null) {
        restartElement.remove();
    }
}

function minusSeconds() {  
    let seconds = document.querySelector("#seconds");
    let secondsContent = parseInt(seconds.textContent);

    let minutes = document.querySelector("#minutes");
    let minutesContent = parseInt(minutes.textContent);
    
    if ((minutesContent === 0) && (secondsContent === 0)) {
        updateFinishedTimer();
        return;
    }

    else if (secondsContent === 0) {
        secondsContent = 60;
        minutesContent = minutesContent - 1;
        minutes.textContent = minutesContent;
    }

    secondsContent = secondsContent - 1;

    if (secondsContent >= 10) {
        seconds.textContent = secondsContent;
    }

    else {
        seconds.textContent = "0" + secondsContent;
    }

}

function minusMinutes() {
    let seconds = document.querySelector("#seconds");
    let secondsContent = parseInt(seconds.textContent);
    
    let minutes = document.querySelector("#minutes");
    let minutesContent = parseInt(minutes.textContent);
    
    if ((minutesContent === 0) && (secondsContent === 0)) {
        return;
    }
    
    minutesContent = minutesContent - 1;
    minutes.textContent = minutesContent;
}

function updateFinishedTimer() {
    clearInterval(countdownSeconds);
    clearInterval(countdownMinutes);
    
    let timer = document.querySelector("#timer");
    let minutes = document.querySelector("#minutes");
    let seconds = document.querySelector("#seconds");
    
    let restartContent = document.createElement("p");
    restartContent.setAttribute("id", "restart");
    restartContent.textContent = "Restart"
    restartContent.style.paddingRight = "4px"
    timer.insertBefore(restartContent, minutes);

    minutes.textContent = "15";
    seconds.textContent = "00";

    timer.style.border = "2px #A4ACB3 solid";
    timer.style.color = "#A4ACB3";

    timer.addEventListener("click", countdown);
}

//////// //////// //////// //////// NEW DRAFT ALERT //////// //////// //////// ////////

let newDraftButton = document.querySelector("#new-draft");
newDraftButton.addEventListener("click", showAlert);

let cancelButton = document.querySelector("#cancel");
cancelButton.addEventListener("click", hideAlert);

let copyConfirmButton = document.querySelector("#copy-confirm");
copyConfirmButton.addEventListener("click", copyDraftToClipboard);

let confirmButton = document.querySelector("#new-draft-confirm");
confirmButton.addEventListener("click", launchNewDraft);

function launchNewDraft() {
    hideAlert();
    location.reload();
}

function showAlert() {
    let alert = document.querySelector("#alert");
    alert.style.display = "block";
}

function hideAlert() {
    let alert = document.querySelector("#alert");
    alert.style.display = "none";
}