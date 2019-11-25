function Person(name,race,item){
    this.name = name;
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    if (this.race == 'orc') {
        this.maxHealth = 120;
        this.currenthealth = 140;
    }
    this.minD = 3;
    this.minH = 3
    this.maxDamage = 20;
    this.maxHealing = 24;
    if (this.item == 'sword') {
        this.minD = 4;
        this.maxDamage = 26
    }
    if (this.item == 'staff') {
        this.minH = 3.6;
        this.maxHealing = 30;
    }

    this.displayChar = function(){
        return console.log(`${this.name} is a ${this.race}, he wields  ${this.item}, his total health points are ${this.maxHealth}`);
    };
}