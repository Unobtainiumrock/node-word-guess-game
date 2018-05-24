
const Letter = require('./letter');

class Word {
  constructor(word) {
    this.word = word.split('').map((ltr) => {
      return new Letter(ltr);
    })

  }
  display()  {
    let word = this.word.map((instance) => {
      return instance.display();
    }).join('');

    return word;
  }

  check(ltr) {
    this.word.forEach((instance) => {
      instance.check(ltr);
    })
  }
}

const hello = new Word('Hello');
console.log(hello.display());
hello.check('l');
console.log(hello.display());

module.exports = Word;
