// player creation
document.getElementById('start').addEventListener('click',Createplayers);
let player1;
let player2;

let log = document.getElementById("log");
function Createplayers(){
    let race1 = document.getElementById('race1').value;
    let name1 = document.getElementById('name1').value;
    if (document.getElementById('name1').value == '') {
        name1='Player1'
    }
    let weapon1 = document.getElementById('weapon1').value;
    player1 = new Person(name1,race1,weapon1);
    switch (player1.race) {
        case 'dwarf':
            document.getElementById('displayrace1').src ='resources/dwarf.png'
            document.getElementById('displayrace1C').innerHTML = 'Dwarven'    
        break;
    
        case "orc":
            document.getElementById('displayrace1').src ='resources/orc.png'
            document.getElementById('displayrace1C').innerHTML = 'Orc'    
        break;
        case "elf":
            document.getElementById('displayrace1').src ='resources/elf.png'
            document.getElementById('displayrace1C').innerHTML = 'Elven'    
        break;
        case 'vampire':
            document.getElementById('displayrace1').src ='resources/vampire.png' 
            document.getElementById('displayrace1C').innerHTML = 'Vampire'   
        break;

    }
    switch (player1.item) {
        case 'knife':
            document.getElementById('displayitem1').src ='resources/knife.png'  
            document.getElementById('displayitem1C').innerHTML = 'Thief'    
        break;
    
        case "staff":
            document.getElementById('displayitem1').src ='resources/staff.png'
            document.getElementById('displayitem1C').innerHTML = 'Mage'    
        break;
        case "sword":
            document.getElementById('displayitem1').src ='resources/sword.png'
            document.getElementById('displayitem1C').innerHTML = 'Warrior'    
        break;
        case 'bow':
            document.getElementById('displayitem1').src ='resources/bow.png'  
            document.getElementById('displayitem1C').innerHTML = 'Ranger'  
        break;

    }
    document.getElementById('named1').innerHTML= name1
    let race2 = document.getElementById('race2').value;
    let name2 = document.getElementById('name2').value;
    if (document.getElementById('name2').value == '') {
        name2='Player2'
    }
    let weapon2 = document.getElementById('weapon2').value;
    player2 = new Person(name2,race2,weapon2);
    switch (player2.race) {
        case 'dwarf':
            document.getElementById('displayrace2').src ='resources/dwarf.png'   
            document.getElementById('displayrace2C').innerHTML = 'Dwarven'   
        break;
    
        case "orc":
            document.getElementById('displayrace2').src ='resources/orc.png'  
            document.getElementById('displayrace2C').innerHTML = 'Orc'   
        break;
        case "elf":
            document.getElementById('displayrace2').src ='resources/elf.png'   
            document.getElementById('displayrace2C').innerHTML = 'Elven'  
        break;
        case 'vampire':
            document.getElementById('displayrace2').src ='resources/vampire.png' 
            document.getElementById('displayrace2C').innerHTML = 'Vampire'    
        break;

    }
    switch (player2.item) {
        case 'knife':
            document.getElementById('displayitem2').src ='resources/knife.png'   
            document.getElementById('displayitem2C').innerHTML = 'Thief'  
        break;
    
        case "staff":
            document.getElementById('displayitem2').src ='resources/staff.png'   
            document.getElementById('displayitem2C').innerHTML = 'Mage'
        break;
        case "sword":
            document.getElementById('displayitem2').src ='resources/sword.png'   
            document.getElementById('displayitem2C').innerHTML = 'Warrior'
        break;
        case 'bow':
            document.getElementById('displayitem2').src ='resources/bow.png'  
            document.getElementById('displayitem2C').innerHTML = 'Ranger'    
        break;

    }
    if (soundon == true) {
        document.getElementById("fightsound").play();   
    }
    document.getElementById('named2').innerHTML= name2
    document.getElementById('create').style.display = 'none'
    document.getElementById('start').style.display = 'none';
    document.getElementById('title').innerHTML = "  FIGHT!"
    document.getElementById("arena").style.display = "flex"
    document.getElementById('attack2').addEventListener("click",a2);
    document.getElementById('attack1').addEventListener("click",a1);
    document.getElementById('heal1').addEventListener("click",h1);
    document.getElementById('heal2').addEventListener("click",h2);
    log.insertAdjacentHTML("afterbegin",`${player1.name} is a ${player1.race}, he wields a ${player1.item}, his total health points are ${player1.maxHealth}.`+"<br>");
    log.insertAdjacentHTML("afterbegin",`${player2.name} is a ${player2.race}, he wields a ${player2.item}, his total health points are ${player2.maxHealth}.`+"<br>");
    updatehealth();
    console.log(player1,player2);
    
}
//update healthbar
function updatehealth() {
    document.getElementById("health1").value = player1.currenthealth;
    document.getElementById("health1").max = player1.maxHealth;
    document.getElementById("health2").value = player2.currenthealth;
    document.getElementById("health2").max = player2.maxHealth;
    document.getElementById("healthtext1").innerHTML = `${player1.currenthealth}/${player1.maxHealth}`;
    document.getElementById("healthtext2").innerHTML = `${player2.currenthealth}/${player2.maxHealth}`
}
//damage
let turn = true
function a1() {
    turn = true;
    Damage();
    updatehealth();
    document.getElementById('heal1').removeEventListener("click",h1);
    document.getElementById('heal2').addEventListener("click",h2);
    document.getElementById('attack1').removeEventListener("click",a1);
    document.getElementById('attack2').addEventListener("click",a2);
};
function a2 () {
    turn = false;
    Damage();
    updatehealth()
    document.getElementById('attack2').removeEventListener("click",a2);
    document.getElementById('attack1').addEventListener("click",a1);
    document.getElementById('heal2').removeEventListener("click",h2);
    document.getElementById('heal1').addEventListener("click",h1);
};

function Damage() {
    let you
    let enemy
    if (turn== true) {
        you = player1;
        enemy = player2;
    }
    if (turn == false) {
        you = player2;
        enemy = player1;
    }
    let chance = enemy.dodgechance;
    let n = Math.floor(Math.random() * 101);
    let damage 
    console.log(n)
    if (n < chance) {
        log.insertAdjacentHTML("afterbegin",`${enemy.name} dodged the attack.`+"<br>");
        if (soundon == true) {
            document.getElementById("dodgesound").play();   
        }   
    } else {
        damage = (Math.round(Math.random()*(you.maxDamage - you.minD +1))+you.minD);
        enemy.currenthealth -= damage ;
        log.insertAdjacentHTML("afterbegin",`${you.name} did ${damage} damage to ${enemy.name}.`+"<br>");
        if (soundon == true) {
            document.getElementById("damagesound").play();   
        }   
        if (you.race == "vampire") {
            if (you.currenthealth >= you.maxHealth) {
                you.currenthealth = you.maxHealth;
            }else{
                you.currenthealth += Math.ceil(damage/5)
                log.insertAdjacentHTML("afterbegin",`${you.name} stole ${Math.ceil(damage/5)} health from ${enemy.name} .`+"<br>")
            }
            
        }
        if (you.item == 'bow') {
            let r = Math.random() * 100;
            if (r < 20) {
                damage = (Math.round(Math.random()*(you.maxDamage - you.minD +1))+you.minD);
                enemy.currenthealth -= damage ;
                log.insertAdjacentHTML("afterbegin",`${you.name} attacked again, and did ${damage} damage to ${enemy.name}.`+"<br>");
                if (you.race == "vampire") {
                    if (you.currenthealth >= you.maxHealth) {
                        you.currenthealth = you.maxHealth;
                    }else{
                        you.currenthealth += Math.ceil(damage/5)
                        log.insertAdjacentHTML("afterbegin",`${you.name} stole ${Math.ceil(damage/5)} health from ${enemy.name} .`+"<br>")
                    }
                }
            }
        }
    }
    

// game end
    if (enemy.currenthealth <= 0) {
        Endgame(enemy);
        
    }
}
function Endgame(enemy) {
    if (enemy == player1) {
        log.insertAdjacentHTML("afterbegin",`${player2.name} has won`+"<br>");
    }
    else {
        log.insertAdjacentHTML("afterbegin",`${player1.name} has won`+"<br>");
    }
    if (soundon == true) {
        document.getElementById("winsound").play();   
    }
    document.getElementById('title').innerHTML = "GAME OVER"
    setTimeout(() => {
        document.getElementById('create').style.display = 'flex'
        document.getElementById('start').style.display = 'inline'
        document.getElementById('title').innerHTML = "Choose Your Fighter"
        document.getElementById("arena").style.display = "none"
    }, 3000);

}
//heal
function h1() {
    turn = true;
    Heal();
    updatehealth()
    document.getElementById('heal1').removeEventListener("click",h1);
    document.getElementById('heal2').addEventListener("click",h2);
    document.getElementById('attack1').removeEventListener("click",a1);
    document.getElementById('attack2').addEventListener("click",a2);
};
function h2() {
    turn = false;
    Heal();
    updatehealth()
    document.getElementById('heal2').removeEventListener("click",h2);
    document.getElementById('heal1').addEventListener("click",h1);
    document.getElementById('attack2').removeEventListener("click",a2);
    document.getElementById('attack1').addEventListener("click",a1);
};
function Heal() {
    let you
    if (turn== true) {
        you = player1;
    }
    if (turn == false) {
        you = player2;
    }
    
    if (soundon == true) {
        document.getElementById("healsound").play();  
    }
    let heal = (Math.round(Math.random()*(you.maxHealing - you.minH +1))+you.minH);
    you.currenthealth += heal
    log.insertAdjacentHTML("afterbegin",`${you.name} healed for ${heal}.`+"<br>");
    if (you.currenthealth >= you.maxHealth) {
        you.currenthealth = you.maxHealth;
    }
}
//yield
document.getElementById('yield1').addEventListener("click",function () {
    log.insertAdjacentHTML("afterbegin", `${player1.name} has yielded.`+"<br>");
    document.getElementById('title').innerHTML = "GAME OVER"
    if (soundon == true) {
        document.getElementById("winsound").play();   
    }
    setTimeout(() => {
        document.getElementById('create').style.display = 'flex'
        document.getElementById('start').style.display = 'inline'
        document.getElementById('title').innerHTML = "Choose Your Fighter"
        document.getElementById("arena").style.display = "none" 
    }, 3000);
    
});
document.getElementById('yield2').addEventListener("click",function () {
    log.insertAdjacentHTML("afterbegin", `${player2.name} has yielded.`+"<br>");
    document.getElementById('title').innerHTML = "GAME OVER"
    if (soundon == true) {
        document.getElementById("winsound").play();   
    }
    setTimeout(() => {
        document.getElementById('create').style.display = 'flex'
        document.getElementById('start').style.display = 'inline'
        document.getElementById('title').innerHTML = "Choose Your Fighter"
        document.getElementById("arena").style.display = "none" 
    }, 3000);
});
//music
let musicbut = document.getElementById('music');
let music = document.getElementById('themeSong');
music.volume = 0.2
let musicon = false;
musicbut.onclick = togglemusic;

function togglemusic(){
  if (musicon == true) {
    musicbut.innerHTML ="Music OFF";
    musicon = false;
    music.pause();
  }
  else {
    musicbut.innerHTML = "Music ON";
    musicon = true;
    music.play();
  }
};
//sound
let soundbut = document.getElementById('sound');
let soundon = true;
soundbut.onclick = togglesound;

function togglesound(){
  if (soundon == true) {
    soundbut.innerHTML ="Sound OFF";
    soundon = false;
  }
  else {
    soundbut.innerHTML = "Sound ON";
    soundon = true;
  }
};
