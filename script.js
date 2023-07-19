js:
document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode);

    if (e.keyCode == 38) {
        meu = document.querySelector(".meu");
        meu.classList.add("animatemeu");
        setTimeout(() => {
            meu.classList.remove("animatemeu");
        }, 500);
    }

}

setInterval(() => {
        meu=document.querySelector(".meu");
        gameover=document.querySelector(".gameover");
        obstacle=document.querySelector(".obstacle");

        
        dx=parseInt(window.getComputedStyle(meu,null).getPropertyValue("left"));
        dy=parseInt(window.getComputedStyle(meu,null).getPropertyValue("top"));
        ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"));
        oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"));

        ofsetX= Math.abs(dx-ox);
        offsetY=Math.abs(dy-oy);

        if(ofsetX<95 && offsetY<52)
        {
            gameover.style.visibility="visible";
            obstacle.classList.remove("obsticalhero");
        }
}, 100);