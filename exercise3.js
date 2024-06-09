

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let text = '';


function countWords(text) {
  const words = text.split(/\s+/);
  const wordMap = new Map();

  words.forEach(word => {
    const sWord = word.toLowerCase().replace(/[^\w\s]/gi, ''); // Removing punctuation
    const count = wordMap.get(sWord) || 0;
    wordMap.set(sWord, count + 1);
  });

  return wordMap;
}


function searchWord(word, wordMap) {
  const sWord = word.toLowerCase().replace(/[^\w\s]/gi, ''); // Removing punctuation
  const count = wordMap.get(sWord);
  return count ? `The word "${word}" occurs ${count} times.` : `The word "${word}" does not occur.`;
}

rl.question('Enter a string: ', (answer) => {
  text = answer;
  const wordMap = countWords(text);

  
  rl.question('Enter a word to search: ', (searchWordInput) => {
    console.log(searchWord(searchWordInput, wordMap));
    rl.close();
  });
});
