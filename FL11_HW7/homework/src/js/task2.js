const initialMinPocketRange = 0;
const initialMaxPocketRange = 8;
const initialStartPrice = 100;
const attemptsCount = 3;
const winningRate = 2;
const rangeIncrease = 4;
const denominator = 0.5;
const zero = 0;

let playTheGameMessage = 'Do you want to play a game?';

while (confirm(playTheGameMessage)) {

    let minPocketRange = initialMinPocketRange;
    let maxPocketRange = initialMaxPocketRange;
    let startPrize = initialStartPrice;
    let totalPrize = zero;

    let confirmedToContinueAfterWin = false;
    let win = false;

    do {
        let randomPocket = Math.floor(Math.random() * (maxPocketRange - minPocketRange + 1)) + minPocketRange;
        console.log(randomPocket);

        let prize = zero;
        for (let attemptsLeft = attemptsCount; attemptsLeft > 0; attemptsLeft--) {
            let possiblePrize = startPrize * Math.pow(denominator, attemptsCount - attemptsLeft);

            let inputPocket =
                prompt(`Choose a roulette pocket number from ${minPocketRange} to ${maxPocketRange}: 
                Attempts left: ${attemptsLeft}
                Total prize: ${totalPrize}$
                Possible prize on current attempt: ${possiblePrize}$`);

            win = inputPocket && Number(inputPocket) === randomPocket;
            if (win) {
                prize = possiblePrize;
                break;
            }
        }

        if (win) {
            totalPrize += prize;

            confirmedToContinueAfterWin = confirm(`Congratulation, you won! 
                                             Your prize is: ${prize}$. 
                                             Do you want to continue?`);
            if (confirmedToContinueAfterWin) {
                startPrize *= winningRate;
                maxPocketRange += rangeIncrease;
            }
        }
    } while (win && confirmedToContinueAfterWin) ;

    alert(`Thank you for your participation. Your prize is: ${totalPrize}$`);

    playTheGameMessage = 'Do you want to play again?';
}
alert('You did not become a billionaire, but can.');