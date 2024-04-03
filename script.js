const btnRoll = document.getElementsByClassName("btn btn--roll")[0];
const dice = document.getElementById("dice");
const playerActive0 = document.getElementsByClassName("player--0")[0];
const playerActive1 = document.getElementsByClassName("player--1")[0];

var ganhar = Math.floor(Math.random() * 50) + 1;
console.log(ganhar)
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
    var ganhar = Math.floor(Math.random() * 50) + 1;
    current0 = 0;
    current1 = 0;
    score0 = 0;
    score1 = 0;
    scorePlayer0.innerText = 0;
    scorePlayer1.innerText = 0;
    currentPlayer0.innerText = 0;
    currentPlayer1.innerText = 0;
    playerActive0.classList.remove("player--winner");
    playerActive1.classList.remove("player--winner");
    playerGanhou.innerText = "";
});


btnRoll.addEventListener('click', () => {
    var numSorteado = Math.floor(Math.random() * 6) + 1;
    console.log(numSorteado);
    console.log("rolando dado...");
    switch (numSorteado) {
        case 1: {
            dice.src = "dice-1.png";
            audioErro.play();
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

const name0 = document.getElementsByClassName("name--0")[0];
const name1 = document.getElementsByClassName("name--1")[0];

const body = document.getElementsByClassName("body")[0];
const playerGanhou = document.getElementById("ganhou");

var audio = new Audio('vitoria.mp3');
var audioErro = new Audio('derrota.mp3');
var audioHold = new Audio('holdAudio.mp3')

function confettiFalling() {

	var box = document.getElementById("box");
	var colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink'];

	for (var i = 0; i < 1000; i++) {
		
		// Create 1000 DIV elements for confetti
		var div = document.createElement("div");
		div.classList.add("confetti");
		box.appendChild(div);
	}

	var confetti = document.querySelectorAll('.confetti');

	for (var i = 0; i < confetti.length; i++) {
		
		var size = Math.random() * 0.01 * [i];

		confetti[i].style.width = 5 + size + 'px';
		confetti[i].style.height = 16 + size + 'px';
		confetti[i].style.left = Math.random() * innerWidth + 'px';

		var background = colors[Math.floor(Math.random() * colors.length)];
		confetti[i].style.backgroundColor = background;

		box.children[i].style.transform = "rotate("+ size*[i] +"deg)";
	}
}

btnHold.addEventListener('click', () =>{
    audioHold.play();
    adicionarScore();
    if(score0 >= ganhar){
        playerActive0.classList.add("player--winner");
        playerGanhou.innerText ="PLAYER 1 WIN!";
        audio.play();
        confettiFalling();
    }
    if(score1 >= ganhar){
        playerActive1.classList.add("player--winner");
        playerGanhou.innerText ="PLAYER 2 WIN!";
        audio.play();
        confettiFalling();
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

});

