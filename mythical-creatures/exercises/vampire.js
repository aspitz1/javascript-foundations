class Vampire {
  constructor(name, pet) {
    this.name = name
    this.pet = pet || 'bat'
    this.thirsty = true
    this.ouncesDrank = 0
  }
  
  drink() {
    if(this.ouncesDrank < 50) {
    this.ouncesDrank = this.ouncesDrank + 10
    }
    if(this.ouncesDrank === 10){
      this.thirsty = !this.thirsty
    } else if(this.ouncesDrank >= 50) {
      return 'I\'m too full to drink anymore!'
    }
  }
}

module.exports = Vampire
