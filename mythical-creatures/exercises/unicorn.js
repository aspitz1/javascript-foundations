class Unicorn {
  constructor(name, color) {
    this.name = name
    this.color = color || 'white'
  }
  isWhite() {
    return this.color === 'white'
  }
  says(catchPhrase) {
    return `**;* ${catchPhrase} *;**`
  }
}

module.exports = Unicorn
