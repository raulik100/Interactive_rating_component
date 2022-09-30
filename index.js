
const thank_you = document.getElementById("thx");
const container = document.getElementById("cont");
const computedStyle_thank_you = window.getComputedStyle(thank_you);
const computedStyle_container = window.getComputedStyle(container);
const buttons = document.getElementsByClassName("btn-rate");
let rating = '';


for(let i=0; i<5; i++){
    buttons[i].onclick = () => {
        rating = buttons[i].innerHTML;
    }
}


document.getElementById("but").onclick = () =>{
    document.getElementById("sel").innerHTML = `You selected ${rating} out of 5`;
    thank_you.style.display = "flex";
    container.style.display = "none";
    
}




