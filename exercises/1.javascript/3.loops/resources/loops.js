let field = document.getElementById("field");

let standard = document.getElementById("generate");
standard.addEventListener("click", generateField);

let random = document.getElementById("random");
random.addEventListener("click", makeRandom);

let reset = document.getElementById("reset");
reset.addEventListener("click", Reset);

let coordinates = document.getElementById("coordinates");
coordinates.addEventListener("click", getco);

var i;

function generateField() {
  field.innerHTML = "";
  for(i =1 ; i <= 100 ; i++){
    var row = Math.ceil(i/10);
      var square = document.createElement('div');
      square.innerHTML = i;
      square.classList.add("cell");
      square.setAttribute("id",i);
      field.append(square);


    if (row%2!==0) {
      if (i%2==0) {
      square.classList.add("bgblack");
      }
        }
        else {
          if (i%2 !==0) {
            square.classList.add("bgblack");
          }
    }
    }

  }

function makeRandom() {
  for ( i = 1; i <= 100 ; i++) {
    var classes=  ["bgblack","white","redbg","greenbg","bluebg"];
    var randomcolor = classes[Math.floor(Math.random()*classes.length)]
    document.getElementById(i).classList.remove("bgblack","white","redbg","greenbg","bluebg")
    document.getElementById(i).classList.add(randomcolor);
  }
}

function Reset () {
    field.innerHTML = "";
}

function getco(){
    for ( i = 1; i <= 100 ; i++){
      let letters = ["A","B","C","D","E","F","G","H","I","J"]
      var row = Math.ceil(i/10);
      let min = row-1;
      let ten = (i-(min*10))-1;
      let one = ten+1
      console.log(one,ten)
      let letter = letters.slice(ten,one);
      document.getElementById(i).innerHTML=letter+row;
    }
}
