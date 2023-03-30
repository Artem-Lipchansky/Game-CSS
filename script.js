const dino = document .getElementById("dino");
const cactus = document .getElementById("cactus");

document.addEventListener("keydown", function(event) {
    jump();
});

function jump (){
    //dino.classList.add("jump")

    if (dino.classList != "jump"){
        dino.classList.add("jump")
    }

    setTimeout( function() {
        dino.classList.remote("jump")
}, 300)

}