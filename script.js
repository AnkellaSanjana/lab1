document.getElementById('playButton').addEventListener('click', function () {
    const randomNum1 = Math.floor(Math.random() * 3) + 1;
    const randomNum2 = Math.floor(Math.random() * 3) + 1;

    const imageMapping = {
        1: 'rock.jpg',
        2: 'scissor.jpg',
        3: 'paper.jpg'
    };

    const player1Image = document.getElementById('player1');
    const player2Image = document.getElementById('player2');
    const resultText = document.getElementById('result');

    player1Image.setAttribute('src', `img/${imageMapping[randomNum1]}`);
    player2Image.setAttribute('src', `img/${imageMapping[randomNum2]}`);

    if (randomNum1 === randomNum2) {
        resultText.textContent = 'It\'s a tie!';
    } else if (
        (randomNum1 === 1 && randomNum2 === 3) ||
        (randomNum1 === 2 && randomNum2 === 1) ||
        (randomNum1 === 3 && randomNum2 === 2)
    ) {
        resultText.textContent = 'Player 1 wins!';
    } else {
        resultText.textContent = 'Player 2 wins!';
    }
});
