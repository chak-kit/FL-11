class Fighter {
  win = 0;
  losses = 0;

  constructor({name, damage, hp, agility}) {
    this._name = name;
    this._damage = damage;
    this._hp = hp;
    this._agility = agility;

  }

  getName() {
    return this._name;
  }

  getDamage() {
    return this._damage;
  }

  getHealth() {
    return this._hp;
  }

  getAgility() {
    return this._agility;
  }

  setHealth(value) {
    this._hp = value
  }

  addWin() {
    return this.win++
  }

  addLoss() {
    return this.losses++
  }

  attack(defender) {
    defender.getAgility();
    this.getAgility();

    let rand = Math.floor(Math.random() * 101);

    if (rand > defender.getAgility()) {
      //success
      defender.setHealth(defender.getHealth() - this.getDamage());
      console.log(`${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`)
    } else {
      //fail
      console.log(`${defender.getName()} attack missed`)

    }
    if (defender.setHealth() === 0) {
      console.log(`${myFighter.getName()} is dead and can not fighter`)
    }



  }

  logCombatHistory() {
    console.log(`${this.getName()} Wins: ${this.addWin()} Losses: ${this.addLoss()}`)
  }

}
 function battle(myFighter, myFighter2) {
  do {
    myFighter.attack(myFighter2);

    if (myFighter.getHealth() !== 0) {
      myFighter2.addLoss();
      myFighter.addWin();
     return;
    }
    myFighter2.attack(myFighter);
    if (myFighter2.getHealth() !== 0) {
      myFighter.addLoss();
      myFighter2.addWin();
      return;
    }
  }
  while (myFighter.getHealth() === 0 && myFighter2.getHealth() === 0) ;


}

const myFighter = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const myFighter2 = new Fighter({name: 'Jack', damage: 10, hp: 120, agility: 40});

myFighter.attack(myFighter2);

battle(myFighter, myFighter2);
myFighter.logCombatHistory();

