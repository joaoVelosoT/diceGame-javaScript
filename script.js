const btnRoll = document.getElementsByClassName("btn btn--roll")[0];
const dice = document.getElementById("dice");


function switchPlayer() {
    const playerActive0 = document.getElementsByClassName("player--0")[0];
    const playerActive1 = document.getElementsByClassName("player--1")[0];
    if(playerActive0.classList.contains("player--active")){
        playerActive1.classList.add("player--active");
        playerActive0.classList.remove("player--active");
    }else {
        playerActive0.classList.add("player--active");
        playerActive1.classList.remove("player--active");
    }
    
}

const btnNewGame = document.getElementsByClassName("btn btn--new")[0];
const scorePlayer0 = document.getElementById("score--0");
const scorePlayer1 = document.getElementById("score--1");

const currentPlayer0 = document.getElementById("current--0");
const currentPlayer1 = document.getElementById("current--1");

var score0 = 0;
var score1 = 0;

var current0 = 0;
var current1 = 0;
btnNewGame.addEventListener('click', () => {
    current0 = 0;
    current1 = 0;
    scorePlayer0.innerText = 0;
    scorePlayer1.innerText = 0;
    currentPlayer0.innerText = 0;
    currentPlayer1.innerText = 0;
});


btnRoll.addEventListener('click', () =>{
    var numSorteado = Math.floor(Math.random() * 6) + 1;
    console.log(numSorteado);
    console.log("rolando dado...");
    switch  (numSorteado){
        case 1: {
            dice.src = "dice-1.png";
            switchPlayer();
            break;
        }
        case 2: {
            if(currentPlayer0.classList.contains("player--active")){
                console.log(current0);
                current0 += numSorteado;
                currentPlayer0.innerText = current0;
            }else {
                current1 += numSorteado;
                currentPlayer1.innerText = current1;
                //commit
            }
            dice.src = "dice-2.png";
            break;
        }
        case 3: {
            dice.src = "dice-3.png";
            break;
        }
        case 4: {
            dice.src = "dice-4.png";
            break;
        }
        case 5: {
            dice.src = "dice-5.png";
            break;
        }
        case 6: {
            dice.src = "dice-6.png";
            break;
        }
    }
})

