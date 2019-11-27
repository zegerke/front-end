function Person(name,race,item){
    this.name = name;
    this.race = race;
    this.item = item;
    this.currenthealth = 100;
    this.maxHealth = 100;
    if (this.race == 'orc') {
        this.maxHealth = 120;
        this.currenthealth = 120;
    }
    this.dodgechance = 5
    this.minD = 8;
    this.minH = 4
    this.maxDamage = 20;
    this.maxHealing = 24;
    if (this.item == 'sword') {
        this.minD += 2;
        this.maxDamage += 6;
    }
    
    if (this.item == 'staff') {
        this.minH += 1;
        this.maxHealing += 6;
    }
    if (this.race == "dwarf") {
        this.maxHealth += 10;
        this.currenthealth += 10;
        this.dodgechance += 5;
    }
    if (this.race =="elf") {
        this.dodgechance += 10;
    }
    if (this.item == "knife") {
        this.dodgechance += 6
    }
}