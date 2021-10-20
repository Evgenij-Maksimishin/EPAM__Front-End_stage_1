let userIsReady;
userIsReady = confirm('Do you want to play a game?');

let two = 2,
    four = 4,
    three = 3,
    eight = 8,
    hundred = 100,
    max = 8,
    attemptsLeft = 3,
    totalPrize = 0,
    posiblePrize = 100,
    choosenNumber = getRandomInt(max);

if (userIsReady) {
    gameIteration();
} else {
    alert('You did not become a billionaire, but can.');
}

function gameIteration() {
    let userWonGame = playGame();
    if (userWonGame) {
        let wantsToContinue = confirm(`Congratulation, you won!   Your prize is: ${totalPrize} $. 
        Do you want to continue?`);
        if (wantsToContinue) {
            max = max + four;
            choosenNumber = getRandomInt(max);
            attemptsLeft = three;
            posiblePrize = posiblePrize * two;
            gameIteration();
        }
    } else {
        let userWantsToReplay = confirm(`Thank you for your participation. Your prize is: ${totalPrize}$ \n
        Do you want to replay?`);
        if (userWantsToReplay) {
            max = eight;
            choosenNumber = getRandomInt(max);
            attemptsLeft = three;
            posiblePrize = hundred;
            totalPrize = 0;
            gameIteration();
        }
    }
}

function playGame() {
    let userNumber1 = prompt(`Choose a roulette pocket from 0 to ${max}
Attempts left: ${attemptsLeft}
Total prize: ${totalPrize}$
Posible prize on current attempt: ${posiblePrize}$`);

    userNumber1 = parseInt(userNumber1);

    if (choosenNumber === userNumber1) {
        totalPrize += posiblePrize;
        return true;
    }

    attemptsLeft--;
    let userNumber2 = prompt(`Choose a roulette pocket from 0 to ${max}
Attempts left: ${attemptsLeft}
Total prize: ${totalPrize}$
Posible prize on current attempt: ${posiblePrize / two}$`);
    userNumber2 = parseInt(userNumber2);

    if (choosenNumber === userNumber2) {
        totalPrize += posiblePrize / two;
        return true;
    }


    attemptsLeft--;
    let userNumber3 = prompt(`Choose a roulette pocket from 0 to ${max}
Attempts left: ${attemptsLeft}
Total prize: ${totalPrize}$
Posible prize on current attempt: ${posiblePrize / four}$`);

    userNumber3 = parseInt(userNumber3);

    if (choosenNumber === userNumber3) {
        totalPrize += posiblePrize / four;
        return true;
    }
    return false;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * ++max);
}