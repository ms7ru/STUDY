var Clicked = false;
var img = document.getElementById("img");
var audio = document.getElementById("audio");
var bagaudio = document.getElementById("bag-audio");
var GiveOptionsFun = document.getElementById("Give-Options-fun");
var GiveOptionsNerd = document.getElementById("Give-Options-nerd");
var table = document.getElementById("table");

function GiveChoices() {
    GiveOptionsFun.innerHTML = "<button class='fun-button' onclick='fun()'>I DON'T CARE ABOUT STUDIES... FUN PLS</button>";
    GiveOptionsNerd.innerHTML = "<button class='nerd-button' onclick='nerd()'>I DON'T CARE ABOUT FUN... STUDIES PLS</button>";
}

function ImClicked() {
    if (Clicked == true) {
        Clicked = false
    } else {
        Clicked = true
    }
}

// Updates the image source
function updatSceen(imglink) {
    img.src = imglink;
}

// Plays audio
function playAudio(audiolink) {
    audio.src = audiolink;
    audio.play();
}

// Wait function using Promises
function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


async function start() {
    updatSceen("assets/images-of-animations/intro-animation/0.png");
    while (Clicked == false) {
        await wait(10);
    }
    Clicked = false
    introAnimate();
}

start()


// ANIMATION STARTS HERE --------------------------------------------------------------------------------------------------------------------------------------------
// ANIMATION STARTS HERE --------------------------------------------------------------------------------------------------------------------------------------------
// ANIMATION STARTS HERE --------------------------------------------------------------------------------------------------------------------------------------------


async function introAnimate() {
    
    // Play background audio
    bagaudio.src = "./assets/sounds/campus.mp3";
    bagaudio.play();

    updatSceen("assets/images-of-animations/intro-animation/1.png");
    await wait(1000);

    updatSceen("assets/images-of-animations/intro-animation/2.png");
    await wait(1000);

    updatSceen("assets/images-of-animations/intro-animation/3.png");
    await wait(1000);

    updatSceen("assets/images-of-animations/intro-animation/4.png");
    await wait(1000);

    playAudio("./assets/sounds/narrator_emphasis.mp3");
    updatSceen("assets/images-of-animations/intro-animation/5.png");
    await wait(1000);

    playAudio("./assets/sounds/narrator_emphasis.mp3");
    updatSceen("assets/images-of-animations/intro-animation/6.png");
    await wait(1000);

    playAudio("./assets/sounds/narrator_emphasis.mp3");
    updatSceen("assets/images-of-animations/intro-animation/7.png");
    await wait(1000);

    updatSceen("assets/images-of-animations/intro-animation/8.png");
    await wait(1000);

    updatSceen("assets/images-of-animations/intro-animation/9.png");
    await wait(1000);

    updatSceen("assets/images-of-animations/intro-animation/10.png");
    await wait(1000);

    updatSceen("assets/images-of-animations/intro-animation/11.png");
    await wait(1000);

    while (Clicked == false) {await wait(10);} Clicked = false;
    playAudio("./assets/sounds/show_choice.mp3");
    updatSceen("assets/images-of-animations/start-nationon/1.png");
    
    while (Clicked == false) {await wait(10);} Clicked = false;
    playAudio("./assets/sounds/show_choice.mp3");
    updatSceen("assets/images-of-animations/start-nationon/2.png");
    
    while (Clicked == false) {await wait(10);} Clicked = false;
    playAudio("./assets/sounds/show_choice.mp3");
    updatSceen("assets/images-of-animations/start-nationon/3.png");
    
    while (Clicked == false) {await wait(10);} Clicked = false;
    playAudio("./assets/sounds/show_choice.mp3");
    updatSceen("assets/images-of-animations/start-nationon/4.png");
    
    while (Clicked == false) {await wait(10);} Clicked = false;
    playAudio("./assets/sounds/show_choice.mp3");
    updatSceen("assets/images-of-animations/start-nationon/5.png");
    
    while (Clicked == false) {await wait(10);} Clicked = false;
    playAudio("./assets/sounds/show_choice.mp3");
    updatSceen("assets/images-of-animations/start-nationon/6.png");
    
    while (Clicked == false) {await wait(10);} Clicked = false;
    playAudio("./assets/sounds/show_choice.mp3");
    updatSceen("assets/images-of-animations/start-nationon/7.png");
    
    while (Clicked == false) {await wait(10);} Clicked = false;
    playAudio("./assets/sounds/show_choice.mp3");
    updatSceen("assets/images-of-animations/start-nationon/8.png");
    

    while (Clicked == false) {await wait(10);} Clicked = false;
    playAudio("./assets/sounds/show_choice.mp3");
    updatSceen("assets/images-of-animations/start-nationon/9.png");
    
    while (Clicked == false) {await wait(10);} Clicked = false;
    playAudio("./assets/sounds/show_choice.mp3");
    updatSceen("assets/images-of-animations/start-nationon/10.png");
    GiveChoices();


}

// Paths are split here --------------------------------------------------------------------------------------------------------------------------------------------
// Paths are split here --------------------------------------------------------------------------------------------------------------------------------------------
// Paths are split here --------------------------------------------------------------------------------------------------------------------------------------------



// FUN --------------------------------------------------------------------------------------------------------------------------------------------
function fun() {
    table.innerHTML = '<td style="width: calc(100vw - (100vh * (522 / 856)));"> <div id="Give-Options-fun"></div> </td><td> <img onclick="ImClicked()" id="img" src="./assets/images-of-animations/intro-animation/0.png">';
    
    document.getElementById("Give-Options-fun").innerHTML = `
        <h1>You are the fun part</h1>
        <h1>I have not made further that this...</h1>
        <button class='fun-button'>Choice 1</button>
        <button class='fun-button'>Choice 2</button>
        <button class='fun-button'>Choice 3</button>
    `;


    updatSceen("assets/images-of-animations/intro-animation/0.png");
}

// NERD --------------------------------------------------------------------------------------------------------------------------------------------

function nerd() {
    table.innerHTML = '<td style="width: calc(100vw - (100vh * (522 / 856)));"> <img onclick="ImClicked()" id="img" src="./assets/images-of-animations/intro-animation/0.png"> </td><td style="width: calc(100vw - (100vh * (522 / 856)));"> <div id="Give-Options-nerd"></div> </td>';
    
    // Ensure the div exists before trying to modify its innerHTM
    document.getElementById("Give-Options-nerd").innerHTML = `
            <h1>You are the Nerd part</h1>
            <h1>I have not made further that this...</h1>
            <button class='nerd-button'>Choice 1</button>
            <button class='nerd-button'>Choice 2</button>
            <button class='nerd-button'>Choice 3</button>
        `;

    updatSceen("assets/images-of-animations/intro-animation/0.png");
}