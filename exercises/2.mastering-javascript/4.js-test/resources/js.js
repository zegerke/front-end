let button = document.getElementById('btn');
let input = document.getElementById("input");
let table = document.getElementById("table");
let save = document.getElementById("save");
let nrows = table.rows;
document.getElementById("items").innerHTML = 0
button.addEventListener('click', clicky)
save.addEventListener("click",saveit)
document.getElementById('clear').addEventListener("click",clearit)
function clearit() {
    input.value = "";
}

window.onload= storagetable;

function clicky(){
    let icon = document.createElement("i");
    icon.classList.add("fas")
    icon.classList.add("fa-spinner")
    icon.classList.add("fa-spin")
    button.prepend(icon);
    setTimeout(() => {
        button.removeChild(icon);
        if (input.value =="") {
            alert("you need to fill in the field")
        }
        else{
            nrows = table.rows;
            let row = table.insertRow(nrows.length);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2)
            cell3.addEventListener('click',editit)
            cell3.innerHTML = '<i class="fas fa-edit"></i>'
            cell1.innerHTML = input.value;
            var cross = "<i class='far fa-times-circle'></i>"
            cell2.innerHTML = cross;
            cell2.addEventListener('click',removeit);
            input.value = "";
            console.log(nrows[0].getElementsByTagName('td')[0].innerHTML);
            document.getElementById("items").innerHTML = nrows.length;
            table.style.backgroundimage = "linear-gradient(white,gray)";
        }   
    }, 500);
}
function saveit() {
    let groceries =[]
    for (let index = 0; index < nrows.length; index++) {
        const element = nrows[index].getElementsByTagName('td')[0].innerHTML;
        groceries.push(element);
    }
    localStorage.setItem("groceries",JSON.stringify(groceries));
    console.log(JSON.parse(localStorage.getItem("groceries")));
    alert("table saved")
}
function storagetable() {
    groceries = JSON.parse(localStorage.getItem("groceries"))
    for (let i = 0; i < groceries.length; i++) {
        nrows = table.rows;     
        let row = table.insertRow(nrows.length);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1)
        let cell3 = row.insertCell(2)
        cell3.addEventListener('click',editit);
        cell3.innerHTML = '<i class="fas fa-edit"></i>'
        cell1.innerHTML = groceries[i];
        var cross = "<i class='far fa-times-circle'></i>"
        cell2.innerHTML = cross;
        cell2.addEventListener('click',removeit);
        document.getElementById("items").innerHTML = nrows.length;
        table.style.backgroundimage = "linear-gradient(white,gray)";
    }
    
}
function removeit(event) {
    let parent = this.parentNode;
    parent.remove();
    nrows = table.rows;
}
function editit(event) {
    let help = this.parentNode.getElementsByTagName('td')[0].innerHTML;
    console.log(help);
    let editinput = document.createElement("input");
    editinput.value = help;
    this.parentNode.getElementsByTagName('td')[0].innerHTML = "";
    this.parentNode.getElementsByTagName('td')[0].appendChild(editinput)
    this.removeEventListener('click',editit);
   
};    
