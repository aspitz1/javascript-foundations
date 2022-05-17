class Dragon {
  constructor(name, rider) {
    this.name = name
    this.rider = rider
    this.hungry = true
    this.timesEaten = 0
  }
  greet() {
    return `Hi, ${this.rider}!`
  }
  eat() {
    this.timesEaten = this.timesEaten + 1
    if(this.timesEaten === 3) {
      this.hungry = !this.hungry
    }
  }
}

module.exports = Dragon
