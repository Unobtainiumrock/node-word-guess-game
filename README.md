# Node Word Guess
A newer iteraton of my hangman game. This version is solely represented as a [Node.js](https://nodejs.org/en/) app.

## Player Game Flow
* **User guesses letters to be compared against a randomly generated word**
    * If a letter is correctly guessed, all matches for the user's letter-guess are revealed within the randomly generated word, **_unless_** the entire word has been correctly guessed. In this case the player's score increases and a new word is generated to guess. 
    * **_or_**
    * If a letter is guessed incorrectly, decrease the players amount of guesses **_unless_** they've already used all their guess.In this case, the game ends and displays their number of words guessed correctly.

## Requirements and Setup
* &#x1F534; Install [Node.js](https://nodejs.org/en/) _(version 7.6 or higher)_ &#x1F534;

## Terminal: Getting Started How To

 **Clones repository and installs necessary modules**
```
git clone https://github.com/Unobtainiumrock/node-word-guess-game.git

cd node-word-guess-game

npm install
```
**Starts Game**
```
node index.js
```

## Built With

* [Javascript](https://eloquentjavascript.net/)
* [Node](https://nodejs.org/en/)

#### Node Modules used
* [Inquirer](https://github.com/SBoudrias/Inquirer.js)



## Authors

* **Unobtainiumrock**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Pineapple goes well on pizza
* Cats
* Trees
* Unobtainiumrock Industries ®