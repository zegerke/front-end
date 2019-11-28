function Person(name,race,item,target){
    this.name = name;
    this.race = race;
    this.item = item;
    this.target = target;
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
    this.doDamage = function() {

        let chance = this.target.dodgechance;
        let n = Math.floor(Math.random() * 101);
        let damage 
        console.log(n)
        if (n < chance) {
            log.insertAdjacentHTML("afterbegin",`${this.target.name} dodged the attack.`+"<br>");
            if (soundon == true) {
                document.getElementById("dodgesound").play();   
            }   
        } else {
            damage = (Math.round(Math.random()*(this.maxDamage - this.minD +1))+this.minD);
            this.target.currenthealth -= damage ;
            log.insertAdjacentHTML("afterbegin",`${this.name} did ${damage} damage to ${this.target.name}.`+"<br>");
            if (soundon == true) {
                document.getElementById("damagesound").play();   
            }   
            if (this.race == "vampire") {
                if (this.currenthealth >= this.maxHealth) {
                    this.currenthealth = this.maxHealth;
                }else{
                    this.currenthealth += Math.ceil(damage/5)
                    log.insertAdjacentHTML("afterbegin",`${this.name} stole ${Math.ceil(damage/5)} health from ${this.target.name} .`+"<br>")
                }
                
            }
            if (this.item == 'bow') {
                let r = Math.random() * 100;
                if (r < 20) {
                    damage = (Math.round(Math.random()*(this.maxDamage - this.minD +1))+this.minD);
                    this.target.currenthealth -= damage ;
                    log.insertAdjacentHTML("afterbegin",`${this.name} attacked again, and did ${damage} damage to ${this.target.name}.`+"<br>");
                    if (this.race == "vampire") {
                        if (this.currenthealth >= this.maxHealth) {
                            this.currenthealth = this.maxHealth;
                        }else{
                            this.currenthealth += Math.ceil(damage/5)
                            log.insertAdjacentHTML("afterbegin",`${this.name} stole ${Math.ceil(damage/5)} health from ${this.target.name} .`+"<br>")
                        }
                    }
                }
            }
        }
        updatehealth();
    // game end
        if (this.currenthealth <= 0) {
            Endgame(this.target);
            
        } 
    }
    this.doHeal = function() {
        if (soundon == true) {
            document.getElementById("healsound").play();  
        }
        let heal = (Math.round(Math.random()*(this.maxHealing - this.minH +1))+this.minH);
        this.currenthealth += heal
        log.insertAdjacentHTML("afterbegin",`${this.name} healed for ${heal}.`+"<br>");
        if (this.currenthealth >= this.maxHealth) {
            this.currenthealth = this.maxHealth;
        }
        updatehealth();
    }
    this.doYield = function () {
        log.insertAdjacentHTML("afterbegin", `${this.name} has yielded.`+"<br>");
        document.getElementById('title').innerHTML = "GAME OVER"
        if (soundon == true) {
            document.getElementById("winsound").play();   
        }
    }
}