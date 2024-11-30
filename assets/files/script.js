var clickedNo = 0
var Clicked1 = false
var Clicked = false;
var img = document.getElementById("img");
var audio = document.getElementById("audio");
var bagaudio = document.getElementById("bag-audio");
var GiveOptionsFun = document.getElementById("Give-Options-fun");
var GiveOptionsNerd = document.getElementById("Give-Options-nerd");
var table = document.getElementById("table");
var why = ""

async function death(why) {
    alert(why)

    table.innerHTML = `<td>    
                <div id="Give-Options-fun"></div>
            </td>
            <td>
                <img onclick="ImClicked()" id="img" src="./">
            </td>
            <td>
                <div id="Give-Options-nerd"></div>
            </td>`;

            updatSceen("assets/images-of-animations/intro-animation/re.png");
            while (Clicked == false) {
                await wait(10);
            }
            Clicked = false

            GiveChoices();
}

function GiveChoices() {
    var GiveOptionsFun = document.getElementById("Give-Options-fun");
    var GiveOptionsNerd = document.getElementById("Give-Options-nerd");
    GiveOptionsFun.innerHTML = "<button class='fun-button' onclick='fun()'>I DON'T CARE ABOUT STUDIES... FUN PLS</button>";
    GiveOptionsNerd.innerHTML = "<button class='nerd-button' onclick='nerd()'>Sorry felas if ur a nerd ul still need to play as funnn.... i didnt have time to make both...</button>";
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
    document.getElementById("img").src = imglink;
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

function showMessage(who, what) {
    const mesContainer = document.getElementById('mes');
    const bubble = document.createElement('div');
    bubble.setAttribute('class', 'messa');
    bubble.setAttribute('speech-bubble', '');
  
    switch(who) {
      case 'fun':
        bubble.setAttribute('pleft', '');
        bubble.setAttribute('abottom', '');
        bubble.setAttribute('class', 'messa');
        bubble.style.setProperty('--bbColor', '#FF0000'); // Changed to red (previously purple)
        bubble.style.fontFamily = '"Butcherman", serif';
        bubble.style.marginLeft = '2rem';
        break;
      case 'nerd':
        bubble.setAttribute('pright', '');
        bubble.setAttribute('abottom', '');
        bubble.setAttribute('class', 'messa');
        bubble.style.setProperty('--bbColor', '#669ffa'); // Changed to purple (previously red)
        bubble.style.fontFamily = '"Rubik Dirt", serif';
        bubble.style.marginRight = '2rem';
        break;
      case 'narrator':
        bubble.setAttribute('ptop', '');
        bubble.setAttribute('acenter', '');
        bubble.style.setProperty('--bbColor', '#63c08c');
        bubble.style.fontFamily = '"Audiowide", sans-serif';
        break;
    }
  
    bubble.textContent = what;
    
    // Append new message at the bottom
    mesContainer.appendChild(bubble);
    
    // Always scroll to the bottom of the container
    mesContainer.scrollTop = mesContainer.scrollHeight;
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
    Clicked = false;
    while (Clicked == false) {await wait(10);} Clicked = false;
    updatSceen("assets/images-of-animations/intro-animation/2-1.png");
    playAudio("./assets/sounds/show_choice.mp3");
    while (Clicked == false) {await wait(10);} Clicked = false;

    

    updatSceen("assets/images-of-animations/intro-animation/2-2.png");
    playAudio("./assets/sounds/show_choice.mp3");
    while (Clicked == false) {await wait(10);} Clicked = false;

    updatSceen("assets/images-of-animations/intro-animation/2-3.png");
    playAudio("./assets/sounds/show_choice.mp3");

    while (Clicked == false) {await wait(10);} Clicked = false;

    table.innerHTML = `<td>    
        <div id="Give-Options-fun"></div>
    </td>
    <td>
        <div id="mes" style="height: 40vh;"></div>
        <img style="height: 60vh;" onclick="ImClicked()" id="img" src="./">
    </td>
    <td>
        <div id="Give-Options-nerd"></div>
    </td>`;

    updatSceen("assets/images-of-animations/Just-images-withut-top-half/1.png");
    await wait(100);

    showMessage('narrator', 'HEY I AM UR NARATOR, If u see this font u know its me...');
    while (Clicked == false) {await wait(10);} Clicked = false;
    updatSceen("assets/images-of-animations/Just-images-withut-top-half/1.png");
    
    playAudio("./assets/sounds/show_choice.mp3");
    
    showMessage('narrator', 'U should know the name of this game if u dont then IDC');
    while (Clicked == false) {await wait(10);} Clicked = false;
    updatSceen("assets/images-of-animations/Just-images-withut-top-half/2.png");
    playAudio("./assets/sounds/show_choice.mp3");

    showMessage('narrator', 'Science u just broke in 2 parts... u are ur own enemy, Right? :/');
    while (Clicked == false) {await wait(10);} Clicked = false;
    updatSceen("assets/images-of-animations/Just-images-withut-top-half/3.png");
    playAudio("./assets/sounds/show_choice.mp3");

    showMessage('narrator', 'so the nerd and fun part have just split... The nerd wants the body to study 24/7... (ALL the time)');
    while (Clicked == false) {await wait(10);} Clicked = false;
    updatSceen("assets/images-of-animations/Just-images-withut-top-half/4.png");
    playAudio("./assets/sounds/show_choice.mp3");

    showMessage('narrator', 'and the fun guy wants the body to have fun 24/7...');
    while (Clicked == false) {await wait(10);} Clicked = false;
    updatSceen("assets/images-of-animations/Just-images-withut-top-half/0.png");
    playAudio("./assets/sounds/show_choice.mp3");
    
    showMessage('narrator', 'WWWOOOOHHH (just who) ARE YOU?');
    while (Clicked == false) {await wait(10);} Clicked = false;
    updatSceen("assets/images-of-animations/Just-images-withut-top-half/0.png");
    playAudio("./assets/sounds/show_choice.mp3");

    GiveChoices();

}

// Paths are split here --------------------------------------------------------------------------------------------------------------------------------------------
// Paths are split here --------------------------------------------------------------------------------------------------------------------------------------------
// Paths are split here --------------------------------------------------------------------------------------------------------------------------------------------


// NERD --------------------------------------------------------------------------------------------------------------------------------------------

function nerd() {
    table.innerHTML = `
    <td>
        <div id="mes" style="height: 40vh;"></div>
        <img style="height: 60vh;" onclick="ImClicked()" id="img" src="./">
    </td>
        <td style="width: calc(100vw - (100vh * (522 / 856)));">    
        <div id="Give-Options-nerd"></div>
    </td>
    `;
    
    // Ensure the div exists before trying to modify its innerHTM
    document.getElementById("Give-Options-nerd").innerHTML = `
            <h1>You are the Nerd part</h1>
            <h1>Hmm what is the narator saying</h1>
            <button onclick="fun()" class='nerd-button'>Go to fun part...</button>
        `;

    updatSceen("assets/images-of-animations/Just-images-withut-top-half/0.png");
    showMessage('narrator', 'Hey Sorry Mate... i have not made the nerd part yet... :/ but u can allways use the fun one...');
}



// FUN --------------------------------------------------------------------------------------------------------------------------------------------


async function fun() {
    table.innerHTML = `
        <td style="width: calc(100vw - (100vh * (522 / 856)));">    
            <div id="Give-Options-fun"></div>
        </td>
        <td>
            <div id="mes" style="height: 40vh;"></div>
            <img style="height: 60vh;" onclick="ImClicked()" id="img" src="./">
        </td>
    `;
    
    document.getElementById("Give-Options-fun").innerHTML = `
        <h1>You are the fun part</h1>
        <h1>For now read the convversation and click continue.</h1>
        <button class='fun-button' onclick="ImClicked()">Continue</button>
    `;


    updatSceen("assets/images-of-animations/Just-images-withut-top-half/0.png");
    
    while (Clicked == false) {await wait(10);} Clicked = false;
    showMessage('nerd', 'Hey Stuies only!!! Study now!!!');
    updatSceen("assets/images-of-animations/FAAACCCEEES/00.png");

    while (Clicked == false) {await wait(10);} Clicked = false;
    showMessage('fun', 'No Fun only!!! Play now!!!');
    updatSceen("assets/images-of-animations/FAAACCCEEES/00.png");

    while (Clicked == false) {await wait(10);} Clicked = false;
    showMessage('narrator', 'Oh Oh looks like a fight is about to start');

    while (Clicked == false) {await wait(10);} Clicked = false;
    
updatSceen("assets/images-of-animations/Just-images-withut-top-half/0.png");

    table = document.getElementById("table")
    table.innerHTML = `
    <td style="width: calc(100vw - (100vh * (522 / 856)));">    
        <div id="Give-Options-fun"></div>
    </td>
    <td>
        <div id="mes" style="height: 35vh;"></div>
        <div id="Healths" style="height: 5vh;">
            <table>
    <tr>
        <td>
            Fun's Health:
        </td>
        <td>
            <h3 id="FH">100/100</h3>
        </td>
        <td>
            &nbsp;&nbsp; | &nbsp;&nbsp;
        </td>
        <td>
            Nerd's Health:
        </td>
        <td>
            <h3 id="NH">100/100</h3>
        </td>
    </tr>
</table>
        </div>
        <img style="height: 60vh;" onclick="ImClicked()" id="img" src="./">
    </td>
    `;

    updatSceen("assets/images-of-animations/FAAACCCEEES/00.png");

    document.getElementById("Give-Options-fun").innerHTML = `
    <h1>FIGHT FIGHT FIGHT</h1>
    <h1>For now read the convversation and click continue.</h1>
    <button class='fun-button' onclick="ImClicked()">Continue</button>
`;


    while (Clicked == false) {await wait(10);} Clicked = false;
    showMessage('nerd', 'Looks like u forgot...');
    while (Clicked == false) {await wait(10);} Clicked = false;
    showMessage('fun', 'I never forget anything...');
    while (Clicked == false) {await wait(10);} Clicked = false;
    showMessage('nerd', 'Looks like u forgot... the home work...');
    while (Clicked == false) {await wait(10);} Clicked = false;
    showMessage('narrator', 'Oh Oh What are u gona dooo? chose the left option...');
    updatSceen("assets/images-of-animations/FAAACCCEEES/01.png");
    
    document.getElementById("Give-Options-fun").innerHTML = `
    <h1>Oh oh looks like u forgot ur homwork what are u going to do?</h1>
    <button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 1;">tell your teacher u forgot he homework</button>
    <button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 2;">Don't go to school</button>
    <button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 3;">DOO HOMEWORK</button>
    `;

    while (Clicked1 == false) {await wait(10);} Clicked1 = false;

    document.getElementById("Give-Options-fun").innerHTML = `
    <h1>FIGHT FIGHT FIGHT</h1>
    <h1>For now read the convversation and click continue.</h1>
    <button class='fun-button' onclick="ImClicked()">Continue</button>
`;
    if (clickedNo == 1) {
        showMessage('narrator', 'U chose to not tell ur teacher u forgot to do ur homework');
        updatSceen("assets/images-of-animations/FAAACCCEEES/00.png");
        while (Clicked == false) {await wait(10);} Clicked = false;
        showMessage('narrator', 'Ok lets see..');
        while (Clicked == false) {await wait(10);} Clicked = false;
        showMessage('nerd', 'Hello');
        while (Clicked == false) {await wait(10);} Clicked = false;
        showMessage('fun', 'Um hi what do u want?');
        while (Clicked == false) {await wait(10);} Clicked = false;
        showMessage('nerd', 'Um dont distereb me i am calling ur teach');
        while (Clicked == false) {await wait(10);} Clicked = false;
        showMessage('fun', 'WWHWWHHHHATTT?');
        while (Clicked == false) {await wait(10);} Clicked = false;
        showMessage('nerd', 'Teach, fun isnt doning his homework when he knows about it...');
        while (Clicked == false) {await wait(10);} Clicked = false;
        updatSceen("assets/images-of-animations/FAAACCCEEES/01.png");
        
        death("I am sorry fun... \n\nNerd sniched to the teach about you... u had to do extra home work... u died")
    } else if (clickedNo = 2){
        showMessage('narrator', "U chose to not go to school");
        updatSceen("assets/images-of-animations/FAAACCCEEES/00.png");
        while (Clicked == false) {await wait(10);} Clicked = false;
        showMessage('narrator', 'Ok lets see.. what happens');
        while (Clicked == false) {await wait(10);} Clicked = false;
        showMessage('nerd', 'Hello');
        while (Clicked == false) {await wait(10);} Clicked = false;
        showMessage('fun', 'Um hi what do u want?');
        while (Clicked == false) {await wait(10);} Clicked = false;
        showMessage('nerd', 'Um dont distereb me i am calling ur teach');
        while (Clicked == false) {await wait(10);} Clicked = false;
        showMessage('fun', 'ok sure');
        while (Clicked == false) {await wait(10);} Clicked = false;
        showMessage('nerd', 'Teach, fun isnt coming to school... on pupose he hasint done his homework...');
        while (Clicked == false) {await wait(10);} Clicked = false;
        showMessage('narrator', 'Um the teach just said that u must have some confution you must be wrong... fun has given a doctors prescription');
        updatSceen("assets/images-of-animations/FAAACCCEEES/10.png");
        while (Clicked == false) {await wait(10);} Clicked = false;
        updatSceen("assets/images-of-animations/FAAACCCEEES/00.png");
        
        await wait(1000);
        updatSceen("assets/images-of-animations/FAAACCCEEES/00.png");
    } else if (clickedNo = 3) {
        showMessage('narrator', 'U chose to Um wait what.... how is this posible');
        updatSceen("assets/images-of-animations/FAAACCCEEES/00.png");
        while (Clicked == false) {await wait(10);} Clicked = false;
        showMessage('nerd', 'Hello... um did u do yuor homework');
        while (Clicked == false) {await wait(10);} Clicked = false;
        death("I am sorry fun... \n\nU died u did homework u should allways have fun")
    }

    // Scenario 2: Social Event vs Study Night
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('nerd', 'We have a big exam tomorrow!');
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('fun', 'But my best friend is having a birthday party!');
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('narrator', 'Oh Oh What are u gona dooo? chose the left option...');
updatSceen("assets/images-of-animations/FAAACCCEEES/01.png");

document.getElementById("Give-Options-fun").innerHTML = `
<h1>Big exam tomorrow but best friend's birthday party!</h1>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 1;">Go to the party</button>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 2;">Study all night</button>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 3;">Compromise and do both</button>
`;

while (Clicked1 == false) {await wait(10);} Clicked1 = false;

if (clickedNo == 1) {
    death("I am sorry fun... \n\nYou went to the party and failed the exam miserably!");
} else if (clickedNo == 2) {
    death("I am sorry fun... \n\nYou studied all night and missed your best friend's important birthday!");
} else if (clickedNo == 3) {
    showMessage('narrator', 'You tried to balance both, but ended up exhausted!');
    updatSceen("assets/images-of-animations/FAAACCCEEES/00.png");
}

// Scenario 3: Video Game Release vs Project Deadline
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('nerd', 'We have a crucial project due next week');
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('fun', 'But the new epic video game just launched!');
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('narrator', 'Oh Oh What are u gona dooo? chose the left option...');
updatSceen("assets/images-of-animations/FAAACCCEEES/01.png");

document.getElementById("Give-Options-fun").innerHTML = `
<h1>Project due soon, but new video game is out!</h1>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 1;">Play the game all day</button>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 2;">Work on project non-stop</button>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 3;">Alternate between game and project</button>
`;

while (Clicked1 == false) {await wait(10);} Clicked1 = false;

if (clickedNo == 1) {
    death("I am sorry fun... \n\nYou played the game and missed the project deadline!");
} else if (clickedNo == 2) {
    death("I am sorry fun... \n\nYou worked non-stop and forgot what fun even means!");
} else if (clickedNo == 3) {
    showMessage('narrator', 'You managed to balance, but barely!');
    updatSceen("assets/images-of-animations/FAAACCCEEES/00.png");
}

// Scenario 4: Family Vacation vs Summer Internship
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('nerd', 'We got an amazing summer internship opportunity');
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('fun', 'But my family planned an epic vacation!');
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('narrator', 'Oh Oh What are u gona dooo? chose the left option...');
updatSceen("assets/images-of-animations/FAAACCCEEES/01.png");

document.getElementById("Give-Options-fun").innerHTML = `
<h1>Summer internship vs family vacation!</h1>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 1;">Go on vacation</button>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 2;">Take the internship</button>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 3;">Try to do both partially</button>
`;

while (Clicked1 == false) {await wait(10);} Clicked1 = false;

if (clickedNo == 1) {
    death("I am sorry fun... \n\nYou missed a career-defining internship for a vacation!");
} else if (clickedNo == 2) {
    death("I am sorry fun... \n\nYou worked all summer and lost family connection!");
} else if (clickedNo == 3) {
    showMessage('narrator', 'You attempted to compromise, creating stress!');
    updatSceen("assets/images-of-animations/FAAACCCEEES/00.png");
}

// Scenario 5: Fitness Challenge vs Coding Competition
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('nerd', 'We signed up for a coding competition');
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('fun', 'But my friends want to do a fitness challenge!');
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('narrator', 'Oh Oh What are u gona dooo? chose the left option...');
updatSceen("assets/images-of-animations/FAAACCCEEES/01.png");

document.getElementById("Give-Options-fun").innerHTML = `
<h1>Coding competition vs fitness challenge!</h1>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 1;">Do fitness challenge</button>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 2;">Focus on coding</button>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 3;">Try to balance both</button>
`;

while (Clicked1 == false) {await wait(10);} Clicked1 = false;

if (clickedNo == 1) {
    death("I am sorry fun... \n\nYou missed the coding competition for fitness!");
} else if (clickedNo == 2) {
    death("I am sorry fun... \n\nYou coded all day and became unhealthy!");
} else if (clickedNo == 3) {
    showMessage('narrator', 'You attempted to balance, creating chaos!');
    updatSceen("assets/images-of-animations/FAAACCCEEES/00.png");
}

// Scenario 6: Concert vs Important Presentation
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('nerd', 'We have a critical presentation next week');
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('fun', 'But my favorite band is having a once-in-a-lifetime concert!');
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('narrator', 'Oh Oh What are u gona dooo? chose the left option...');
updatSceen("assets/images-of-animations/FAAACCCEEES/01.png");

document.getElementById("Give-Options-fun").innerHTML = `
<h1>Important presentation vs dream concert!</h1>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 1;">Go to concert</button>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 2;">Prepare for presentation</button>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 3;">Try to do both</button>
`;

while (Clicked1 == false) {await wait(10);} Clicked1 = false;

if (clickedNo == 1) {
    death("I am sorry fun... \n\nYou missed the important presentation for a concert!");
} else if (clickedNo == 2) {
    death("I am sorry fun... \n\nYou prepared so much you forgot how to have fun!");
} else if (clickedNo == 3) {
    showMessage('narrator', 'You attempted to balance, creating ultimate stress!');
    updatSceen("assets/images-of-animations/FAAACCCEEES/00.png");
}

// Scenario 7: Online Course vs Travel Opportunity
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('nerd', 'We enrolled in an advanced online course');
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('fun', 'But my friends invited me on an amazing travel trip!');
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('narrator', 'Oh Oh What are u gona dooo? chose the left option...');
updatSceen("assets/images-of-animations/FAAACCCEEES/01.png");

document.getElementById("Give-Options-fun").innerHTML = `
<h1>Online course vs travel adventure!</h1>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 1;">Go on the trip</button>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 2;">Complete online course</button>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 3;">Try to balance both</button>
`;

while (Clicked1 == false) {await wait(10);} Clicked1 = false;

if (clickedNo == 1) {
    death("I am sorry fun... \n\nYou missed the online course for a trip!");
} else if (clickedNo == 2) {
    death("I am sorry fun... \n\nYou completed the course but lost life experiences!");
} else if (clickedNo == 3) {
    showMessage('narrator', 'You attempted to balance, creating mental exhaustion!');
    updatSceen("assets/images-of-animations/FAAACCCEEES/00.png");
}

// Scenario 8: Personal Project vs Networking Event
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('nerd', 'We have a crucial networking event');
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('fun', 'But I want to work on my personal creative project!');
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('narrator', 'Oh Oh What are u gona dooo? chose the left option...');
updatSceen("assets/images-of-animations/FAAACCCEEES/01.png");

document.getElementById("Give-Options-fun").innerHTML = `
<h1>Networking event vs personal project!</h1>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 1;">Work on personal project</button>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 2;">Attend networking event</button>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 3;">Try to do both</button>
`;

while (Clicked1 == false) {await wait(10);} Clicked1 = false;

if (clickedNo == 1) {
    death("I am sorry fun... \n\nYou missed crucial networking opportunities!");
} else if (clickedNo == 2) {
    death("I am sorry fun... \n\nYou networked but lost passion for your project!");
} else if (clickedNo == 3) {
    showMessage('narrator', 'You attempted to balance, creating split focus!');
    updatSceen("assets/images-of-animations/FAAACCCEEES/00.png");
}

// Scenario 9: Volunteer Work vs Weekend Getaway
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('nerd', 'We signed up for important volunteer work');
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('fun', 'But my friends planned an amazing weekend getaway!');
while (Clicked == false) {await wait(10);} Clicked = false;
showMessage('narrator', 'Oh Oh What are u gona dooo? chose the left option...');
updatSceen("assets/images-of-animations/FAAACCCEEES/01.png");

document.getElementById("Give-Options-fun").innerHTML = `
<h1>Volunteer work vs weekend getaway!</h1>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 1;">Go on weekend getaway</button>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 2;">Do volunteer work</button>
<button class='fun-button' onclick="if (Clicked1 == true) {Clicked1 = false} else {Clicked1 = true}; clickedNo = 3;">Try to balance both</button>
`;

while (Clicked1 == false) {await wait(10);} Clicked1 = false;

if (clickedNo == 1) {
    death("I am sorry fun... \n\nYou skipped important volunteer commitment!");
} else if (clickedNo == 2) {
    death("I am sorry fun... \n\nYou worked hard but forgot to enjoy life!");
} else if (clickedNo == 3) {
    showMessage('narrator', 'You attempted to balance, creating total confusion!');
    updatSceen("assets/images-of-animations/FAAACCCEEES/00.png");
}

death("Yay u won.. \n\nyou survived all the sinarions");

}
