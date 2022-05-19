class Magician {
  constructor(name){
    this.name = 'The Great ' + name.name
    this.assistant = name.assistant
    this.favoriteAccessory = name.clothing || 'top hat'
    this.confidencePercentage = 10
  }

  performIncantation(incantation) {
    incantation = incantation.toUpperCase()
    return incantation + '!'
  }

  performTrick() {
    if(this.favoriteAccessory !== 'top hat') {
      return 'PULL DOVE FROM SLEEVE'
    }
    this.confidencePercentage = this.confidencePercentage + 10
    return 'PULL RABBIT FROM TOP HAT'
  }

  performShowStopper() {
    if(this.confidencePercentage >= 100 && this.assistant === true) {
      return 'WOW! The magician totally just sawed that person in half!'
    }
    return 'Oh no, this trick is not ready!'
  }

}

module.exports = Magician
