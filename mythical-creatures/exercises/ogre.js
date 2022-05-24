class Ogre {
  constructor(ogreObj) {
    this.name = ogreObj.name
    this.home = ogreObj.abode || 'Swamp'
    this.swings = 0
  }

  encounter(human) {
    human.encounterCounter++
    if (human.noticesOgre() && human.encounterCounter === 6) {
      human.knockedOut = true
      this.swingAt(human)
    } else if (human.noticesOgre()) {
      this.swingAt(human)
    }
  }

  swingAt() {
      this.swings++
    }

  apologize(human) {
    human.knockedOut = false
  }

}

module.exports = Ogre;
var Human = require('./human')
