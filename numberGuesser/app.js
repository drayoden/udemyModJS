/*
GAME FUNCTION:
- player guesses a number between min and max
- player gets finite number of guesses
- continuously notify player of guesses remaining
- notify play of correct answer if they loose
- let player choose to play again
*/

// game vals

let min = 1, 
    max = 10,
    winningNum = getRandomNum(min,max),
    guessesLeft = 5;

// UI elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'), 
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// assign UI min and max...
minNum.textContent = min;
maxNum.textContent = max;

// play again event
game.addEventListener('mousedown', function(e){
    if(e.target.className === 'play-again'){
        window.location.reload();
    }
});

// submit event
guessBtn.addEventListener('click', function(){
    
    let guess = parseInt(guessInput.value);


    // validate
    if(isNaN(guess) || guess < min || guess > max){
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    } else {

        // check for win or lose...
        if (guess === winningNum){
            
            // game over (win)
            gameOver(true, `${winningNum} is correct! You win!`);

        } else {
            // wrong number
            guessesLeft -= 1;   

            // wrong number no guesses left
            if (guessesLeft === 0){
                // game over

                gameOver(false, `*-*- GAME OVER -*-*  you lost!  The correct number was ${winningNum}`); 
                
                // wrong number guesses remain
            } else {
                guessInput.style.borderColor = 'red';
                guessInput.value = '';
                setMessage(`Sorry, ${guess} is not correct. You have ${guessesLeft} guesses remaining.`, 'red');
            }
        }
    }

});

// getWinningNum
function getRandomNum(min,max){
    return Math.floor(Math.random() * (max - min+1) + min); 
}


// setMessage
function setMessage(msg, color){
    message.style.color = color;
    message.textContent = msg;
}

function gameOver(won, msg){
     
    let color;

    won === true ? color = 'green': color = 'red';

    // disable input 
    guessInput.disabled = true;

    // change boarder color
    guessInput.style.borderColor = color;

    message.style.color = color;

    // set message
    setMessage(msg);

    // play againclick
    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}