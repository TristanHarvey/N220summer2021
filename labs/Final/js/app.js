let game = document.getElementById("game");
let moveCount = 0;
game.addEventListener("click", function (e) {
    if (e.target.textContent) return; 
    e.target.textContent = "XO"[moveCount++ % 2];
});

    