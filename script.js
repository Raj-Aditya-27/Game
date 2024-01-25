
score = 0;
cross = true;
let gameOver=false;//New Addition
// Initial delay and play background music
audiogo = new Audio('music/gameover.wav');
audio = new Audio('music/in-game-music.mp3');
setTimeout(()=>{
    audio.play();
},3);


document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode);
    
		if(gameOver===true) return;//New Addition

    if (e.keyCode == 38) {
        meu = document.querySelector(".meu");
        meu.classList.add("animatemeu");
        setTimeout(() => {
            meu.classList.remove("animatemeu");
        }, 500);
    }
    if (e.keyCode == 39) {
        meu = document.querySelector(".meu");
        muex = parseInt(window.getComputedStyle(meu, null).getPropertyValue("left"));
        meu.style.left = muex + 112 + "px"; // Fix the character movement to the right
    }
    if (e.keyCode == 37) {
        meu = document.querySelector(".meu");
        muex = parseInt(window.getComputedStyle(meu, null).getPropertyValue("left"));
        meu.style.left = (muex - 90) + "px"; // Fix the character movement to the left
    }
}

// Game loop using setInterval for collision detection and scoring

setInterval(() => {
     // Selecting necessary element
    meu = document.querySelector(".meu");
    gameover = document.querySelector(".gameover");
    obstacle = document.querySelector(".obstacle");

 // Getting positions of player character and obstacle

    let dx = parseInt(window.getComputedStyle(meu, null).getPropertyValue("left"));
    let dy = parseInt(window.getComputedStyle(meu, null).getPropertyValue("top"));
    let ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"));
    let oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"));

    ofsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);


// Collision detection

    if (ofsetX < 80 && offsetY < 20) {
         // Player character collided with the obstacle

    		ox=(dx+ox)/2;//New Addition
        dx=ox;//New Addition
        gameover.style.visibility = "visible";
        obstacle.classList.remove("obsticalhero");
        audiogo.play();
       audio.pause();
       gameOver=true;//New Addition
    }
    else if (ox<=0 && cross) {
        // Player character successfully crossed the obstacle
        audio.play();
        score = score + 1;
        updatescore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        // Adjusting obstacle animation duration for increased difficulty
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.3;
            obstacle.style.animationDuration = newDur + "s";
        }, 500)

    }
}, 10);

// Function to update and display the score


function updatescore(score) {
    scorecount.innerHTML = "Your Score: " + score;
}
