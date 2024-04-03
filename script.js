const btnRoll = document.getElementsByClassName("btn btn--roll")[0];
const dice = document.getElementById("dice");
const playerActive0 = document.getElementsByClassName("player--0")[0];
const playerActive1 = document.getElementsByClassName("player--1")[0];


function switchPlayer() {
    if (playerActive0.classList.contains("player--active")) {
        score0 = 0;
        current0 = 0;
        currentPlayer0.innerText = current0;
        scorePlayer0.innerText = score0;
        playerActive1.classList.add("player--active");
        playerActive0.classList.remove("player--active");
    } else {
        score1 = 0;
        current1 = 0;
        scorePlayer1.innerText = score1;
        currentPlayer1.innerText = current1;
        playerActive0.classList.add("player--active");
        playerActive1.classList.remove("player--active");
    }
}

function adicionarCurrent(numSorteado) {
    if (playerActive0.classList.contains("player--active")) {
        console.log(current0);
        current0 += numSorteado;
        currentPlayer0.innerText = current0;
    } else if (playerActive1.classList.contains("player--active")) {
        current1 += numSorteado;
        currentPlayer1.innerText = current1;
        //commit
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
    score0 = 0;
    score1 = 1;
    scorePlayer0.innerText = 0;
    scorePlayer1.innerText = 0;
    currentPlayer0.innerText = 0;
    currentPlayer1.innerText = 0;
    playerActive0.classList.remove("player--winner");
    playerActive1.classList.remove("player--winner");
});


btnRoll.addEventListener('click', () => {
    var numSorteado = Math.floor(Math.random() * 6) + 1;
    console.log(numSorteado);
    console.log("rolando dado...");
    switch (numSorteado) {
        case 1: {
            dice.src = "dice-1.png";
            switchPlayer();
            break;
        }
        case 2: {
            adicionarCurrent(numSorteado);
            dice.src = "dice-2.png";
            break;
        }
        case 3: {
            adicionarCurrent(numSorteado);
            dice.src = "dice-3.png";
            break;
        }
        case 4: {
            adicionarCurrent(numSorteado);
            dice.src = "dice-4.png";
            break;
        }
        case 5: {
            adicionarCurrent(numSorteado);
            dice.src = "dice-5.png";
            break;
        }
        case 6: {
            adicionarCurrent(numSorteado);
            dice.src = "dice-6.png";
            break;
        }
    }
})

function adicionarScore() {
    if (playerActive0.classList.contains("player--active")) {
        score0 += current0;
        scorePlayer0.innerText = score0;
        current0 = 0;
        currentPlayer0.innerText = current0;
    } else if (playerActive1.classList.contains("player--active")) {
        score1 += current1;
        scorePlayer1.innerText = score1;
        current1 = 0;
        currentPlayer1.innerText = current1;
    }
}

const btnHold = document.getElementsByClassName("btn--hold")[0];

btnHold.addEventListener('click', () =>{
    adicionarScore();
    if(score0 >= 20){
        playerActive0.classList.add("player--winner");
    }
    if(score1 >= 20){
        playerActive1.classList.add("player--winner");
    }
    if (playerActive0.classList.contains("player--active")) {
        current0 = 0;
        currentPlayer0.innerText = current0;
        playerActive1.classList.add("player--active");
        playerActive0.classList.remove("player--active");
    } else {
        current1 = 0;
        currentPlayer1.innerText = current1;
        playerActive0.classList.add("player--active");
        playerActive1.classList.remove("player--active");
    }
 //   switchPlayer();
});

