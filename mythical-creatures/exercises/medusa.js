class Medusa {
  constructor(name){
    this.name = name
    this.statues = []
  }

gazeAtVictim(victim) {
  if(this.statues.length < 3) {
    victim = new Statue(victim.name)
    this.statues.push(victim)
  } else if(this.statues.length === 3) {
    var freedVictim = this.statues.shift()
    victim = new Statue(victim.name)
    this.statues.push(victim)
    var freedPerson = new Person(freedVictim.name)
    freedPerson.mood = 'relieved'
    return freedPerson
  }
}
}
module.exports = Medusa

var Person = require('./person');
var Statue = require('./statue');
