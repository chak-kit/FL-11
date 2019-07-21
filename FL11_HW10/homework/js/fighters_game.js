class Fighter {

  constructor({name, damage, hp, agility}) {
    this._name = name;
    this._damage = damage;
    this._hp = hp;
    this._hpTotal = hp;
    this._agility = agility;
    this._win = 0;
    this._losses = 0;
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

  addWin() {
    this._win++
  }

  addLoss() {
    this._losses++
  }

  attack(defender) {
    const maxPercentValue = 100;
    let rand = Math.floor(Math.random() * maxPercentValue) + 1;

    if (rand > defender.getAgility()) {
      //success attack
      defender.dealDamage(this.getDamage());
      console.log(`${this.getName()} make ${this.getDamage()} damage to ${defender.getName()}`)
    } else {
      //fail attack
      console.log(`${this.getName()} attack missed`)
    }
  }

  logCombatHistory() {
    console.log(`Name: ${this.getName()}, Wins: ${this._win}, Losses: ${this._losses}`);
  }

  heal(value) {
    let newValue = this._hp + value;
    this._hp = newValue > this._hpTotal ? this._hpTotal : newValue;
  }

  dealDamage(value) {
    let newValue = this._hp - value;
    this._hp = newValue < 0 ? 0 : newValue;
  }

  checkIsDead() {
    let isDead = this.getHealth() <= 0;

    if (isDead) {
      console.log(`${this.getName()} is dead and can't fight.`);
    }
    return isDead;
  }
}

function battle(fighter1, fighter2) {
  if (fighter1.checkIsDead() || fighter2.checkIsDead()) {
    return;
  }

  do {

    fighter1.attack(fighter2);
    if (fighter2.getHealth() === 0) {
      fighter1.addWin();
      fighter2.addLoss();
      break;
    }

    fighter2.attack(fighter1);
    if (fighter1.getHealth() === 0) {
      fighter2.addWin();
      fighter1.addLoss();
      break;
    }

  } while (fighter1.getHealth() > 0 && fighter2.getHealth() > 0);
}

let fighter1 = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
let fighter2 = new Fighter({name: 'Jack', damage: 10, hp: 120, agility: 40});

battle(fighter1, fighter2);
fighter1.logCombatHistory();
fighter2.logCombatHistory();