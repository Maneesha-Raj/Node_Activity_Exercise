const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const options = ['stone', 'paper', 'scissors'];

function getRandomOption() {
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === 'stone' && computerChoice === 'scissors') ||
        (userChoice === 'paper' && computerChoice === 'stone') ||
        (userChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'You win!';
    } else {
        return 'Computer wins!';
    }
}

rl.question('Choose stone, paper, or scissors: ', (userChoice) => {
    userChoice = userChoice.toLowerCase();
    if (!options.includes(userChoice)) {
        console.log('Invalid choice. Please choose stone, paper, or scissors.');
        rl.close();
        return;
    }

    const computerChoice = getRandomOption();
    console.log(`You chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    console.log(determineWinner(userChoice, computerChoice));
    rl.close();
});
