class Centaur {
  constructor(centaurInfo) {
    this.name = centaurInfo.name
    this.breed = centaurInfo.type
    this.cranky = false
    this.shotBowOrRun = 0
    this.standing = true
    this.layingDown = false
  }

  shootBow() {
    if (this.cranky || this.layingDown) {
      return 'NO!'
    }
    this.shotBowOrRun++
    if (this.shotBowOrRun === 3) {
      this.cranky = true
    }
    return 'Twang!!!'
  }

  run() {
    if (this.cranky || this.layingDown) {
      return 'NO!'
    }
    this.shotBowOrRun++
    if (this.shotBowOrRun === 3) {
      this.cranky = true
    }
    return 'Clop clop clop clop!!!'
  }

  layDown() {
    this.standing = false
    this.layingDown = true
  }

  standUp() {
    this.standing = true
    this.layingDown = false
  }

  sleep() {
    if (this.layingDown) {
      this.cranky = false
      return 'ZZZZ'
    }
    return 'NO!'
  }

  drinkPotion() {
    if (this.standing) {
      this.cranky = false
    }
    return 'Not while I\'m laying down!'
  }

}

module.exports = Centaur
