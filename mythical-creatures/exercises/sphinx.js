class Sphinx {
  constructor(name) {
    this.name = name || null
    this.riddles = []
    this.heroesEaten = 0
  }

  collectRiddle(riddle) {
    if (this.riddles.length === 3){
      this.riddles.shift()
      this.riddles.push(riddle)
    } else {
      this.riddles.push(riddle)
    }
  }

  attemptAnswer(riddle) {
    for (let i = 0; i < this.riddles.length; i++) {
      if (this.riddles[i].answer === riddle) {
        const finalAnswer = this.riddles[i].answer
        this.riddles.splice(i, 1)
        if (!this.riddles.length) {
          return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${finalAnswer}\"???`
        }
        return 'That wasn\'t that hard, I bet you don\'t get the next one'
      }
    }
    this.heroesEaten++
  }

}

module.exports = Sphinx
