class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider
    this.hungry = true
  }
  greet() {
    return `Hi, ${this.rider}!`
  }
  eat() {
  }

module.exports = Dragon;
