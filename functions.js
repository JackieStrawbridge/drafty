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

// is it overwhemling/panicky to show seconds ticking down?

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