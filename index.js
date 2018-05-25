
const inquire = require('inquirer');
const Word = require('./word');
const wordBase = require('./word_DB/db');
const randomizer = require('./helper_functions/randomizer');
const grabRandomWord = require('./helper_functions/grab_random_word');

let hidden = grabRandomWord(wordBase,randomizer);
let randomWord = new Word(hidden);
let guesses = 10;
let score = 0;


// UNCOMMENT THIS CONSOLE LOG FOR TESTING THE GAME FUNCTIONALITY
console.log(hidden);

game();

function game() {
  let wordDisplay = randomWord.display();

  inquire.prompt([
    {
      type: 'input',
      message: 'Guess a letter!',
      name: 'ltr'
    }
  ]).then((res) => {
    randomWord.check(res.ltr);
    if(process.argv[2]) {
      console.log('Correct!');
      console.log('');
      process.argv.pop();
    } else {
      console.log('Incorrect');
      console.log('');
      guesses--;
      console.log(`${guesses} guesses remaining`);
    }

    console.log(randomWord.display());

    if(hidden === randomWord.display()) {
      console.log('You got it right! Next word')
      console.log('');
      score++;
      hidden = grabRandomWord(wordBase,randomizer);
      randomWord = new Word(hidden);
      // UNCOMMENT FOR TESTING GAME FUNCTIONALITY
      // console.log(hidden);
    }

    if(guesses <= 0) {
      console.log('Game Over');
      console.log(`The word was: ${hidden}`);
      console.log(`Score: ${score}`);
      return;
    }

    game();
  })
}
