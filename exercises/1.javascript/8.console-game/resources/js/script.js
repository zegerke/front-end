//**********Good luck************ */
//music
let musicbut = document.getElementById('music');
let musicon = true;
musicbut.onclick = togglemusic;

function togglemusic(){
  if (musicon == true) {
    musicbut.innerHTML ="Music:off";
    musicon = false;
    document.getElementById('themeSong').pause();
  }
  else {
    musicbut.innerHTML = "Music:on";
    musicon = true;
    document.getElementById('themeSong').play();
  }
};
//game
function Objectcreator(name,race,type,health){
  let attackaudio = new Audio('resources/sound/attack.mp3');
  let healaudio = new Audio('resources/sound/heal.mp3');
  let damageaudio = new Audio('resources/sound/heal.mp3');

  function sansturn(){
    if (sans.health >= 1000) {
      let crit= Math.floor(Math.random()*Math.floor(4));
      if (crit== 1) {
        let critdamage = (Math.floor(Math.random()*(15 - 10 +1))+10)*2;
        me.health -= critdamage;
        console.log("Sans critted me for "+critdamage);
        console.log(me.health);
        damageaudio.play();
      }
      else {
        let damage = (Math.floor(Math.random()*(15 - 10 +1))+10);
        me.health -= damage;
        console.log("Sans damaged me for "+damage);
        console.log(me.health);
        damageaudio.play();
      }
    }
    else {
      let aoh = Math.floor(Math.random()*Math.floor(2));
      if (aoh == 0) {
        let crit= Math.floor(Math.random()*Math.floor(4));
        if (crit== 1) {
          let critdamage = (Math.floor(Math.random()*(15 - 10 +1))+10)*2;
          me.health -= critdamage;
          console.log("Sans critted me for "+critdamage);
          console.log(me.health);
          damageaudio.play();
        }
        else {
          let damage = (Math.floor(Math.random()*(15 - 10 +1))+10);
          me.health -= damage;
          console.log("Sans damaged me for "+damage);
          console.log(me.health);
          damageaudio.play();
        }
      }
        else {
          let heal= (Math.floor(Math.random()*(80 - 40 +1))+40);
          sans.health += heal;
          console.log("Sans healed for "+ heal);
          console.log(sans.health);
          healaudio.play();
        }
    }
    if (me.health < 1) {
      alert("I lost!");
      me.health = 100;
      sans.health = 1000;
    };
  }

  this.name = name;
  this.race = race;
  this.type = type;
  this.health = health;
  //attack function
  this.attack = function(){
    let crit= Math.floor(Math.random()*Math.floor(4));
    if (crit== 1) {
      let critdamage = (Math.floor(Math.random()*(120 - 20 +1))+20)*2
      sans.health -= critdamage;
      console.log("i critted Sans for "+critdamage)
      console.log(sans.health);
      randomPun(puns);
      attackaudio.play();
    }
    else {
      let damage= (Math.floor(Math.random()*(120 - 20 +1))+20)
      sans.health -= damage;
      console.log("I damaged Sans for "+damage)
      console.log(sans.health);
      randomPun(puns);
      attackaudio.play();
    }
    if (sans.health < 1) {
      alert("Sans lost!");
      me.health = 100;
      sans.health = 1000;
    };
    setTimeout(sansturn,2000);
  };
  //heal function
  this.heal = function(){
    if (me.health >= 100) {
      randomPun(overHealReaction);
      console.log("health was full");
      healaudio.play();
    }
    else {
      let heal=Math.floor(Math.random()*(20 - 8 +1))+8;
      me.health +=heal;
      console.log("I healed myself for"+ heal);
      console.log(me.health);
      randomPun(puns);
      healaudio.play();
      }
      setTimeout(sansturn,2000);
  };
};

let me = new Objectcreator("Me","Human","OK",100);
let sans = new Objectcreator("Sans","Monster","Skeleton",1000);
console.log(me);
console.log(sans);
