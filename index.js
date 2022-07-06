//document.getElementById("count-el").innerText=5;
let countEl=document.getElementById("count-el");
let count=0;
function increment()
{
    console.log("Clicked");
    count++;
    countEl.textContent=count;
}

let name="Khajaumar"
let greeting="Welcome "
let welcomeEl=document.getElementById("welcome-el");
welcomeEl.innerText=greeting+name;
welcomeEl.innerText+=" "+"👋";


function save()
{
    let pi=0;
    pi=document.getElementById("pi");
    pi.textContent=pi.textContent+count+" - ";
    console.log(count);
    count=0;
    countEl.textContent=count;
}