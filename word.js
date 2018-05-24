
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
      if(instance.ltr === ltr){
        process.argv[2] = true;
      } 
      instance.check(ltr);
    })
  }
}

module.exports = Word;
