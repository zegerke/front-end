//buttons
const numbers = document.querySelectorAll("#calc-numbers > button");
const operations= document.querySelectorAll("#operations > button");
let display = document.getElementById('calc-preview');
let content = "";
let x = "";
let operator = "";
const buttons = document.getElementsByTagName('button');

console.dir(buttons);
numbers.forEach(number =>{
  number.addEventListener("click", function(){
    Getnumber(number);
  })
});

for (let i = 0; i < 4; i++) {
operations[i].addEventListener("click", function(){
  x = display.innerHTML;
  operator = operations[i].innerHTML;
  display.innerHTML = "";
  console.log(x,operator);
})
}
operations[4].addEventListener("click",Percent);
operations[5].addEventListener("click",Result);
operations[6].addEventListener("click",Clean);
//key events
document.addEventListener('keypress',(event)=>{
  let keypress= event.key;
  if ((display.innerHTML == "0")||(display.innerHTML == "NaN")) {
    display.innerHTML="";
    if (isFinite(keypress)== true) {
    display.innerHTML += keypress;
  }
  }
  if (isFinite(keypress)== true) {
  display.innerHTML += keypress;
}
})


//screen

function Getnumber(number){
  if ((display.innerHTML == "0")||(display.innerHTML == "NaN")){
    display.innerHTML = "";
    display.innerHTML = number.innerHTML;
  }
  else{
    display.innerHTML+=number.innerHTML;
  }
};

function Clean() {
  x="";
  operator="";
  display.innerHTML="0";
};
function Percent() {
  display.innerHTML /=  100;
};
function Result(){
  switch (operator) {
        case "+":
            display.innerHTML = (parseFloat(x) + parseFloat(display.innerHTML));
            break;
        case "-":
            display.innerHTML = (parseFloat(x) - parseFloat(display.innerHTML));
            break;
        case "/":
            display.innerHTML =(parseFloat(x) / parseFloat(display.innerHTML));
            break;
        case "*":
            display.innerHTML =(parseFloat(x) * parseFloat(display.innerHTML));
            break;
        default:
            display.innerHTML = "";
    };
};
for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("mouseover",function(event){
    event.target.classList.add("hovering");
    })
  buttons[i].addEventListener("mouseout",function(event){
    event.target.classList.remove("hovering");
  })
}