let score = 0;
let diceRoll = 0;
const btn = document.getElementById('btn');
const gameInfo = document.getElementById('gameInfo');
const image = document.createElement('img');
const wrapper = document.getElementById('wrapper');
const loseScreen = document.createElement('div');
loseScreen.classList.add('lose');
btn.onclick = () => {
    //document.getElementById('score').value = score;
    diceRoll = Math.ceil(Math.random()*6);
    //diceRoll = 1;
    score +=diceRoll;
    gameInfo.textContent = `You rolled a ${diceRoll}. Score: ${score}`;
    image.src = (`/img/dice${diceRoll}.png`);
    image.classList.add('image');
    gameInfo.appendChild(image);
    console.log(diceRoll);
    console.log(score);
    if (diceRoll == 1 && score <= 21) {
        loseCondition();
    }
    if (score >= 21) {
        winCondition(); 
    }
}

const loseCondition = () => {
    wrapper.removeChild(gameInfo);
    wrapper.appendChild(loseScreen);
    loseScreen.textContent = ('You rolled a 1. You lose.');
    btn.style.visibility = "hidden";
}
const winCondition = () => {
    wrapper.removeChild(gameInfo);
    wrapper.appendChild(loseScreen);
    loseScreen.textContent = "You won!";
    btn.style.visibility = "hidden";
}