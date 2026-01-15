const startBtn = document.getElementById("startBtn");
const continueBtn = document.getElementById("continueBtn");
const nextMsgBtn = document.getElementById("nextMsgBtn");
const exitBtn = document.getElementById("exitBtn");

const normalPage = document.getElementById("normalPage");
const loadingPage = document.getElementById("loadingPage");
const virusPage = document.getElementById("virusPage");
const messagePage = document.getElementById("messagePage");

const alertsContainer = document.getElementById("alertsContainer");
const messageText = document.getElementById("messageText");

/* 🎵 AUDIO */
const bgMusic = document.getElementById("bgMusic");
bgMusic.volume = 0.35;

const virusAlerts = [
    "Trojan.exe detected",
    "Unauthorized access found",
    "System files corrupted",
    "LoveBug.heart activated",
    "CrushIntent.exe running",
    "User feelings compromised 💔"
];

const messages = [
    "Okay… sorry 😅 walang virus.",
    "I just wanted your attention.",
    "Before anything else, I just want to say that whatever you read here, I hope things don’t change between us.",
    "I just wanted to be honest with you..",
    "There were so many times when I wanted to message you...",
    "back when you were still with Jhanine, then Charmaine. I never really had the chance, because at those times, you were theirs.",
    "When we started hanging out again, I realized how easy it felt being around you.",
    "The way you carry yourself, how you’re such a gentleman without even trying, made everything feel comfortable and safe.",
    "You can call me “abangerz” or anything you want...",
    "Before I say anything else, I just want to ask you something.",
    "How do you usually know when you like someone?",
    "Because for me, it’s in the little things..",
    "Your laugh always catches me off guard in the best way.",
    "Even during moments when we weren’t really talking, you stayed in my thoughts.",
    "I really, really, really, really, really",
    "like you..",
    "I think it’s been a long time since I did.",
    "We’re friends, so I don’t really expect anything in return. I don’t want to pressure you. I just thought you deserved to know how I feel, because you make me feel special, even when you probably don’t realize it. after all...",
    "It was you who told me to take the risk.",
    "If ever you accept my feelings, I’ll take it as your response if you put the song “Paper Rings” by Taylor Swift in your notes."
];

let alertInterval;
let msgIndex = 0;
let fixClickCount = 0;

/* START */
startBtn.addEventListener("click", (e) => {
    e.preventDefault();
    normalPage.classList.add("hidden");
    loadingPage.classList.remove("hidden");

    setTimeout(() => {
        loadingPage.classList.add("hidden");
        virusPage.classList.remove("hidden");
        alertInterval = setInterval(createAlert, 350);
    }, 2500);
});

/* FIX BUTTON */
continueBtn.addEventListener("click", () => {
    fixClickCount++;
    if (fixClickCount < 3) return;

    clearInterval(alertInterval);
    alertsContainer.innerHTML = "";

    virusPage.classList.add("hidden");
    loadingPage.classList.remove("hidden");

    setTimeout(() => {
        loadingPage.classList.add("hidden");
        messagePage.classList.remove("hidden");
        showMessage();
    }, 2000);
});

/* ALERTS */
function createAlert() {
    const alert = document.createElement("div");
    alert.className = "alert";
    alert.innerHTML = `<strong>⚠ WARNING</strong><br>
        ${virusAlerts[Math.floor(Math.random() * virusAlerts.length)]}`;

    alert.style.top = Math.random() * (window.innerHeight - 120) + "px";
    alert.style.left = Math.random() * (window.innerWidth - 240) + "px";

    alertsContainer.appendChild(alert);
}

/* MESSAGE FLOW */
nextMsgBtn.addEventListener("click", showMessage);

function showMessage() {
    messageText.textContent = messages[msgIndex];

    /* 🎵 START SONG EXACTLY SA "like you.." */
    if (messages[msgIndex] === "like you..") {
        bgMusic.play();
    }

    msgIndex++;

    if (msgIndex >= messages.length) {
        nextMsgBtn.classList.add("hidden");
        exitBtn.classList.remove("hidden");
    }
}

/* EXIT BUTTON */
exitBtn.addEventListener("click", () => {
    bgMusic.pause();
    bgMusic.currentTime = 0;

    messageText.textContent =
        "Thank you for reading this until the end. No pressure, no expectations 🤍";

    exitBtn.disabled = true;

    setTimeout(() => {
        document.body.style.opacity = "0";
    }, 2000);

    setTimeout(() => {
        window.close();
        window.location.href = "about:blank";
    }, 3000);
});
