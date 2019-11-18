console.log(document.getElementById("op").value);
    
let button = document.getElementById('button');
button.addEventListener('click', clicky)
function clicky(){
    console.log(document.getElementById("op").value);
    console.log("Clicky");
    button.innerHTML= "  Calculating...";
    let icon = document.createElement("i");
    icon.classList.add("fas")
    icon.classList.add("fa-spinner")
    icon.classList.add("fa-spin")
    button.prepend(icon);

    button.classList.remove("btn-primary");
    button.classList.add("btn-success");
    
    setTimeout(() => {
    let p = document.getElementById("pp")
    button.classList.add("btn-primary");
    button.classList.remove("btn-success");
    button.removeChild(icon);
    button.innerHTML = "Calculate!"    

    if ((document.getElementById('input').value =="")||(document.getElementById('input2').value =="")) {
        alert("Both inputs need to be filled in");
    }
    else{
        switch (document.getElementById("op").value) {
            case "+":
            p.innerHTML=parseFloat( document.getElementById('input').value) +parseFloat( document.getElementById('input2').value);
            document.getElementById("here").style.display ="inline";               
                break;
        
            case '-':
            p.innerHTML=parseFloat( document.getElementById('input').value) - parseFloat( document.getElementById('input2').value);
            document.getElementById("here").style.display ="inline";     
                break;
            case "/":
            p.innerHTML=parseFloat( document.getElementById('input').value) / parseFloat( document.getElementById('input2').value);
            document.getElementById("here").style.display ="inline";     
                break;
            case "*":
            p.innerHTML=parseFloat( document.getElementById('input').value) * parseFloat( document.getElementById('input2').value);
            document.getElementById("here").style.display ="inline";     
                break;                             
        }

    }

    }, 500);
}
