// ============================================
// YOUR 5 BALLOON MESSAGES
// ============================================

const balloonMessages = [
    "You are one of the most special people in my life ❤️",
    "Your smile can make even a bad day beautiful 🌹",
    "Thank you for being there through everything ✨",
    "I am really lucky to call you my best friend 💗",
    "And this is just the beginning of your surprise 🌎"
];


// ============================================
// GET THE SCENES
// ============================================

const startBtn = document.getElementById("startBtn");
const birthdayMusic = document.getElementById("birthdayMusic");
const crackersMusic = document.getElementById("crackersMusic");

const openingScene =
    document.getElementById("openingScene");

const cakeScene =
    document.getElementById("cakeScene");

const cakeNextBtn =
    document.getElementById("cakeNextBtn");

const balloonScene =
    document.getElementById("balloonScene");


// ============================================
// GET THE BALLOONS
// ============================================

const balloons =
    document.querySelectorAll(".balloon-container");


// ============================================
// GET MESSAGE BOX
// ============================================

const balloonMessage =
    document.getElementById("balloonMessage");

const messageText =
    document.getElementById("messageText");

const closeMessage =
    document.getElementById("closeMessage");


// ============================================
// GET NEXT BUTTON
// ============================================

const balloonNextBtn =
    document.getElementById("balloonNextBtn");


// ============================================
// SCENE 1 → SCENE 2
// OPENING → CAKE
// ============================================

if (startBtn) {
    startBtn.addEventListener("click", function () {
        if (birthdayMusic) {
            birthdayMusic.currentTime = 0;
            birthdayMusic.play().catch(function (error) {
                console.log("Birthday music could not play:", error);
            });
        }

        if (openingScene) openingScene.style.display = "none";
        if (cakeScene) cakeScene.style.display = "flex";
    });
}


// ============================================
// SCENE 2 → SCENE 3
// CAKE → BALLOONS
// ============================================

if (cakeNextBtn) {
    cakeNextBtn.addEventListener("click", function () {
        // Hide cake
        if (cakeScene) cakeScene.style.display = "none";

        // Show balloons
        if (balloonScene) balloonScene.style.display = "flex";
    });
}


// ============================================
// BALLOON CLICK
// ============================================

balloons.forEach(function (balloon, index) {
    balloon.addEventListener("click", function () {
        // Don't allow the same balloon to be clicked again
        if (balloon.classList.contains("popped")) {
            return;
        }

        // ====================================
        // POP THE BALLOON
        // ====================================
        balloon.classList.add("popped");

        // ====================================
        // SHOW THE CORRESPONDING MESSAGE
        // ====================================
        if (messageText) {
            messageText.textContent = balloonMessages[index] || "";
        }

        if (balloonMessage) {
            balloonMessage.style.display = "flex";
        }

        // ====================================
        // CHECK IF ALL 5 ARE POPPED
        // ====================================
        checkAllBalloons();
    });
});


// ============================================
// CLOSE MESSAGE
// ============================================

if (closeMessage) {
    closeMessage.addEventListener("click", function () {
        if (balloonMessage) balloonMessage.style.display = "none";
    });
}


// ============================================
// CHECK ALL 5 BALLOONS
// ============================================

function checkAllBalloons() {
    const poppedBalloons = document.querySelectorAll(".balloon-container.popped");

    // If all balloons are popped
    if (poppedBalloons.length === balloons.length && balloonNextBtn) {
        setTimeout(function () {
            balloonNextBtn.style.display = "block";
        }, 500);
    }
}


// ============================================
// SCENE 3 → SCENE 4
// BALLOONS → PHOTOS
// ============================================

if (balloonNextBtn) {
    balloonNextBtn.addEventListener("click", function () {

        balloonScene.style.display = "none";

        memoryScene.style.display = "flex";

    });
}
// ============================================
// SCENE 4 — MEMORY JOURNEY
// ============================================

const memoryScene = document.getElementById("memoryScene");
const memoryPhoto = document.getElementById("memoryPhoto");
const memoryCounter = document.getElementById("memoryCounter");
const memoryCaption = document.getElementById("memoryCaption");

const previousMemoryBtn =
    document.getElementById("previousMemoryBtn");

const nextMemoryBtn =
    document.getElementById("nextMemoryBtn");

const memoryContinueBtn =
    document.getElementById("memoryContinueBtn");


// ============================================
// YOUR PHOTOS + MESSAGES
// ============================================

const memories = [
    {
        photo: "images/photo1.jpg",
        message: "Our beautiful memory ❤️"
    },

    {
        photo: "images/photo2.jpg",
        message: "This moment will always be special to me 💗"
    },

    {
        photo: "images/photo3.jpg",
        message: "A memory I will never forget ✨"
    },

    {
        photo: "images/photo4.jpg",
        message: "You made this moment beautiful 🌹"
    },

    {
        photo: "images/photo5.jpg",
        message: "And there are still so many memories to make ❤️"
    }
];


// ============================================
// CURRENT PHOTO
// ============================================

let currentMemory = 0;


// ============================================
// SHOW MEMORY
// ============================================

function showMemory(index) {

    memoryPhoto.classList.remove("memory-photo-show");
    memoryPhoto.classList.add("memory-photo-enter");

    setTimeout(function () {

        memoryPhoto.src = memories[index].photo;

        memoryCaption.textContent =
            memories[index].message;

        memoryCounter.textContent =
            (index + 1) + " / " + memories.length;

        memoryPhoto.classList.remove("memory-photo-enter");
        memoryPhoto.classList.add("memory-photo-show");

    }, 300);
}


// ============================================
// NEXT PHOTO
// ============================================

nextMemoryBtn.addEventListener("click", function () {

    if (currentMemory < memories.length - 1) {

        currentMemory++;

        showMemory(currentMemory);

    }

    checkLastMemory();
});


// ============================================
// PREVIOUS PHOTO
// ============================================

previousMemoryBtn.addEventListener("click", function () {

    if (currentMemory > 0) {

        currentMemory--;

        showMemory(currentMemory);

    }

    checkLastMemory();
});


// ============================================
// CHECK LAST PHOTO
// ============================================

function checkLastMemory() {

    if (currentMemory === memories.length - 1) {

        memoryContinueBtn.classList.add("show");

    } else {

        memoryContinueBtn.classList.remove("show");

    }
}


// ============================================
// MEMORY → LETTER
// ============================================

memoryContinueBtn.addEventListener("click", function () {

    memoryScene.style.display = "none";

    letterScene.style.display = "flex";

});
// ============================================
// SCENE 5 — LETTER / ENVELOPE
// ============================================

const letterScene = document.getElementById("letterScene");
const envelope = document.querySelector(".envelope");
const heartSeal = document.getElementById("heartSeal");
const letterHint = document.getElementById("letterHint");
const letterNextBtn = document.getElementById("letterNextBtn");


// ============================================
// MEMORY → LETTER
// ============================================

if (memoryContinueBtn) {

    memoryContinueBtn.addEventListener("click", function () {

        memoryScene.style.display = "none";

        letterScene.style.display = "flex";

    });

}


// ============================================
// OPEN LETTER
// ============================================

heartSeal.addEventListener("click", function () {

    envelope.classList.add("open");

    heartSeal.style.opacity = "0";
    heartSeal.style.pointerEvents = "none";

    letterHint.textContent =
        "A little letter, just for you ❤️";

    setTimeout(function () {

        letterNextBtn.classList.add("show");

    }, 1200);

});
// ============================================
// SCENE 6 — FINAL FIREWORKS
// ============================================

const finalScene = document.getElementById("finalScene");
const fireworksCanvas = document.getElementById("fireworksCanvas");
const finalMessage = document.getElementById("finalMessage");

const ctx = fireworksCanvas.getContext("2d");


// ============================================
// MEMORY / LETTER → FINAL SCENE
// ============================================


letterNextBtn.addEventListener("click", function () {

    // Stop birthday music
    birthdayMusic.pause();
    birthdayMusic.currentTime = 0;

    // Open fireworks scene
    letterScene.style.display = "none";
    finalScene.style.display = "block";

    // Start crackers sound
    crackersMusic.currentTime = 0;

    crackersMusic.play().catch(function (error) {
        console.log("Crackers music could not play:", error);
    });

    // Start fireworks
    startFireworks();
});


// ============================================
// CANVAS SIZE
// ============================================

let canvasWidth;
let canvasHeight;
let animationStarted = false;

function resizeCanvas() {

    const pixelRatio = window.devicePixelRatio || 1;

    canvasWidth = window.innerWidth;
    canvasHeight = window.innerHeight;

    fireworksCanvas.width = canvasWidth * pixelRatio;
    fireworksCanvas.height = canvasHeight * pixelRatio;

    fireworksCanvas.style.width = canvasWidth + "px";
    fireworksCanvas.style.height = canvasHeight + "px";

    ctx.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0
    );
}

window.addEventListener("resize", resizeCanvas);


// ============================================
// FIREWORK ARRAYS
// ============================================

const rockets = [];
const particles = [];


// ============================================
// FIREWORK COLORS
// ============================================

const fireworkColors = [
    "#ff4f81",
    "#ff8fab",
    "#ffd166",
    "#ffffff",
    "#7dd3fc",
    "#c084fc",
    "#67e8f9",
    "#f9a8d4"
];


// ============================================
// RANDOM NUMBER
// ============================================

function random(min, max) {

    return Math.random() * (max - min) + min;

}


// ============================================
// CREATE ROCKET
// ============================================

function createRocket() {

    const rocket = {

        x: random(
            canvasWidth * 0.05,
            canvasWidth * 0.95
        ),

        y: canvasHeight + 10,

        targetY: random(
            canvasHeight * 0.12,
            canvasHeight * 0.58
        ),

        speed: random(8, 12),

        gravity: 0.08,

        trail: [],

        color:
            fireworkColors[
                Math.floor(
                    Math.random() *
                    fireworkColors.length
                )
            ]

    };

    rockets.push(rocket);
}


// ============================================
// UPDATE ROCKET
// ============================================

function updateRockets() {

    for (let i = rockets.length - 1; i >= 0; i--) {

        const rocket = rockets[i];

        rocket.trail.push({
            x: rocket.x,
            y: rocket.y
        });

        if (rocket.trail.length > 12) {

            rocket.trail.shift();

        }

        rocket.y -= rocket.speed;

        rocket.speed -= rocket.gravity;


        // Rocket reaches explosion height

        if (
            rocket.y <= rocket.targetY ||
            rocket.speed <= 2
        ) {

            explodeFirework(
                rocket.x,
                rocket.y,
                rocket.color
            );

            rockets.splice(i, 1);

        }

    }

}


// ============================================
// DRAW ROCKETS
// ============================================

function drawRockets() {

    rockets.forEach(function (rocket) {

        // Trail

        for (
            let i = 0;
            i < rocket.trail.length;
            i++
        ) {

            const point = rocket.trail[i];

            const opacity =
                i / rocket.trail.length;

            ctx.beginPath();

            ctx.arc(
                point.x,
                point.y,
                1.5,
                0,
                Math.PI * 2
            );

            ctx.globalAlpha = opacity;
ctx.fillStyle = rocket.color;

            ctx.fill();

        }


        // Bright rocket head

        ctx.beginPath();

        ctx.arc(
            rocket.x,
            rocket.y,
            3,
            0,
            Math.PI * 2
        );

        ctx.fillStyle = "#ffffff";

        ctx.shadowBlur = 15;

        ctx.shadowColor = rocket.color;

        ctx.fill();

        ctx.shadowBlur = 0;

    });

}


// ============================================
// EXPLODE FIREWORK
// ============================================

function explodeFirework(x, y, color) {

    const particleCount =
        Math.floor(random(70, 120));


    for (let i = 0; i < particleCount; i++) {

        const angle =
            Math.random() * Math.PI * 2;

        const speed =
            random(2, 8);


        particles.push({

            x: x,

            y: y,

            vx:
                Math.cos(angle) *
                speed,

            vy:
                Math.sin(angle) *
                speed,

            gravity: 0.055,

            friction: 0.985,

            alpha: 1,

            decay: random(0.008, 0.018),

            size: random(1.2, 3),

            color: color,

            sparkle:
                Math.random() > 0.72

        });

    }

}


// ============================================
// UPDATE PARTICLES
// ============================================

function updateParticles() {

    for (
        let i = particles.length - 1;
        i >= 0;
        i--
    ) {

        const particle = particles[i];


        particle.vx *= particle.friction;

        particle.vy *= particle.friction;

        particle.vy += particle.gravity;


        particle.x += particle.vx;

        particle.y += particle.vy;


        particle.alpha -= particle.decay;


        if (
            particle.alpha <= 0
        ) {

            particles.splice(i, 1);

        }

    }

}


// ============================================
// DRAW PARTICLES
// ============================================

function drawParticles() {

    particles.forEach(function (particle) {

        ctx.save();

        ctx.globalAlpha =
            Math.max(
                particle.alpha,
                0
            );

        ctx.beginPath();

        ctx.arc(
            particle.x,
            particle.y,
            particle.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            particle.color;

        ctx.shadowBlur =
            particle.sparkle
                ? 15
                : 7;

        ctx.shadowColor =
            particle.color;

        ctx.fill();

        ctx.restore();

    });

}


// ============================================
// CREATE RANDOM FIREWORKS
// ============================================

let launchRate = 900;

function automaticLaunches() {

    if (!animationStarted) {
        return;
    }

    createRocket();

    setTimeout(
        automaticLaunches,
        random(
            350,
            launchRate
        )
    );

}


// ============================================
// MAIN ANIMATION
// ============================================

function animateFireworks() {

    requestAnimationFrame(
        animateFireworks
    );


    // Slight transparent black layer
    // creates natural fading trails

    ctx.fillStyle =
        "rgba(0, 0, 0, 0.18)";

    ctx.fillRect(
        0,
        0,
        canvasWidth,
        canvasHeight
    );


    updateRockets();

    updateParticles();

    drawRockets();

    drawParticles();

}


// ============================================
// START FIREWORKS
// ============================================

function startFireworks() {

    if (animationStarted) {
        return;
    }

    animationStarted = true;

    resizeCanvas();


    // First few fireworks slowly begin

    setTimeout(function () {
        createRocket();
    }, 700);


    setTimeout(function () {
        createRocket();
    }, 1500);


    setTimeout(function () {
        createRocket();
    }, 2300);


    // Then continuous fireworks

    setTimeout(function () {

        automaticLaunches();

    }, 2800);


    // Birthday message appears slowly

    setTimeout(function () {

        finalMessage.classList.add("show");

    }, 4200);


    animateFireworks();
}