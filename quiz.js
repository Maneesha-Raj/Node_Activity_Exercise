const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


const quiz = [
  {
    question: "What is the capital of France?",
    answer: "Paris"
  },
  {
    question: "What is the largest mammal?",
    answer: "Blue whale"
  },
  {
    question: "What is the chemical symbol for water?",
    answer: "H2O"
  }
];

let score = 0;


function startQuiz() {
  console.log("Welcome to the Quiz!");
  askQuestion(0);
}


function askQuestion(index) {
  if (index >= quiz.length) {
    endQuiz();
    return;
  }

  const questionObj = quiz[index];
  rl.question(questionObj.question + ' ', (userAnswer) => {
    if (userAnswer.toLowerCase() === questionObj.answer.toLowerCase()) {
      console.log("Correct!");
      score++;
    } else {
      console.log("Incorrect. The correct answer is: " + questionObj.answer);
    }
    askQuestion(index + 1);
  });
}


function endQuiz() {
  console.log(`Quiz ended. Your score is ${score}/${quiz.length}`);
  rl.close();
}


startQuiz();
