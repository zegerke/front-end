// player creation
document.getElementById('start').addEventListener('click',Createplayers);
let player1;
let player2;
function Createplayers(){
    let race1 = document.getElementById('race1').value;
    let name1 = document.getElementById('name1').value;
    if (document.getElementById('name1').value == '') {
        name1='player1'
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
        name2='player2'
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
    document.getElementById('named2').innerHTML= name2
    console.log(player1,player2);
    document.getElementById('create').style.display = 'none'
    document.getElementById('start').style.display = 'none'
    document.getElementById("arena").style.display = "flex"
    document.getElementById('attack2').addEventListener("click",a2);
    document.getElementById('attack1').addEventListener("click",a1);
    document.getElementById('heal1').addEventListener("click",h1);
    document.getElementById('heal2').addEventListener("click",h2);
    updatehealth()
}
//update healthbar
function updatehealth() {
    document.getElementById("health1").value = player1.currenthealth;
    document.getElementById("health1").max = player1.maxHealth;
    document.getElementById("health2").value = player2.currenthealth;
    document.getElementById("health2").max = player2.maxHealth;
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
    let damage = (Math.round(Math.random()*(you.maxDamage - you.minD +1))+you.minD);
    enemy.currenthealth -= damage ;
    if (you.item == 'bow') {
        let r = Math.random() * 100;
        if (r < 30) {
            alert('kjhgfds')
            damage = (Math.round(Math.random()*(you.maxDamage - you.minD +1))+you.minD);
            enemy.currenthealth -= damage ;
        }
    }
// game end
    if (enemy.currenthealth <= 0) {
        Endgame(enemy);
        
    }
}
function Endgame(enemy) {
    if (enemy == player1) {
        alert("player2 wins")
    }
    else {
        alert("player1 wins")
    }
    document.getElementById('create').style.display = 'flex'
    document.getElementById('start').style.display = 'inline'
    document.getElementById("arena").style.display = "none"
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
    let heal = (Math.round(Math.random()*(you.maxHealing - you.minH +1))+you.minH);
    console.log(heal);
    
    you.currenthealth += heal
    if (you.currenthealth >= you.maxHealth) {
        you.currenthealth = you.maxHealth;
    }
    console.log(you.currenthealth);
}
//yield
document.getElementById('yield1').addEventListener("click",function () {
    alert('player1 has yielded')
    document.getElementById('create').style.display = 'flex'
    document.getElementById('start').style.display = 'inline'
    document.getElementById("arena").style.display = "none"
});
document.getElementById('yield2').addEventListener("click",function () {
    alert('player2 has yielded')
    document.getElementById('create').style.display = 'flex'
    document.getElementById('start').style.display = 'inline'
    document.getElementById("arena").style.display = "none"
});