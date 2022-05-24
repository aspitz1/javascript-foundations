class Stark {
  constructor(familyInfo) {
    this.name = familyInfo.name
    this.location = familyInfo.area || 'Winterfell'
    this.safe = false
  }

  sayHouseWords() {
    if (this.safe) {
      return 'The North Remembers'
    }
    return 'Winter is Coming'
  }

  callDirewolf(wolfName, wolfHome) {
    var direwolf = new Direwolf(wolfName, wolfHome)
    direwolf.home = this.location
    direwolf.starksToProtect.push(this)
    this.safe = true
    return direwolf
  }

}

module.exports = Stark
var Direwolf = require('./direwolf')
