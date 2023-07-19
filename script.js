document.onkeydown = function (e) {
    console.log("key code is: ", e.keyCode);

    if (e.keyCode == 38) {
        meu = document.querySelector(".meu");
        meu.classList.add("animatemeu");
        setTimeout(() => {
            meu.classList.remove("animatemeu");
        }, 700);
    }

}