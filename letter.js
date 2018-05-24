
class Letter {
  constructor(ltr) {
    this.ltr = ltr
    this.correct = false;
  }

  display() {
    if(this.correct) {
      return this.ltr;
    } else {
      return '_ ';
    }
  }

  check(guess) {
    if(this.ltr === guess) {
      this.correct = true;
    } 
  }


}

const a = new Letter('a');

module.exports = Letter;
