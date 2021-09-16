


/* EVENT BUTON */

let clic;

let buton = document.getElementById("buton")
let patrat = document.getElementById('square')
function f(){
    let onOff = buton.textContent;
    console.log(onOff);

    if (onOff == "OFF"){
        buton.textContent = "ON"
        buton.style.backgroundColor = "#7bde7d"
        buton.style.color = "black"
        clic = 1

    }else if( onOff == "ON"){
        buton.textContent = "OFF"
        buton.style.backgroundColor = "black"
        buton.style.color = "palegreen"
        clic = 0
        patrat.style.backgroundColor = "black"
    }
    return clic
}
buton.addEventListener("click", f)



/* EVENT-uri PATRAT */


    let colors = ["Random", "#e60000", "#ffff00", "#00cc00", "#ffbf00", "#ff3385", "#0000e6"] 
    let events = ["mouseover", "mousedown", "mouseup", "scroll", "dblclick"]
    let keys = ["b", "r", "y", "g", "o", "P"]

function rand(){
    let r = Math.floor(Math.random()*255)
    let g = Math.floor(Math.random()*255)
    let b = Math.floor(Math.random()*255)

        //console.log(r, g, b)

    let zzz = [r, g, b]
    return zzz
}

function f1(){
    if (clic == 1){
        let zz = rand()
        patrat.style.backgroundColor = "rgb(" + zz[0] + "," + zz[1] + "," + zz[2] +")"
    }
}
function f2(){
    if (clic == 1){
        patrat.style.backgroundColor = '#e60000'
    }
}
function f3(){
    if (clic == 1){
        patrat.style.backgroundColor = '#ffff00'
    }
}
function f4(){
    if (clic == 1){
        patrat.style.backgroundColor = "#00cc00"
    }
}
function f5(){
    if (clic == 1){
        patrat.style.backgroundColor = 'darkorange'
    }
}

patrat.addEventListener('mouseover', f1)
patrat.addEventListener('mousedown', f2)
patrat.addEventListener('mouseup', f3)
window.addEventListener('scroll', f4)
patrat.addEventListener('dblclick', f5)




    function keyColor(event) {     
        if (clic == 1){
            if (event.keyCode == 71){        
                patrat.style.backgroundColor = "#00cc00";     
            } else if (event.keyCode == 66){        
                patrat.style.backgroundColor = "#0000e6";    
            } else if(event.keyCode == 82) {        
                patrat.style.backgroundColor = "#e60000";     
            } else if(event.keyCode == 89) {        
                patrat.style.backgroundColor = "#ffff00";     
            } else if (event.keyCode == 79) {        
                patrat.style.backgroundColor = "darkorange";     
            } else if (event.keyCode == 80) {        
                patrat.style.backgroundColor = "#ff3385";    
            } else if (event.keyCode == 73) {
                zz = rand();
                patrat.style.backgroundColor = "rgb(" + zz[0] + "," + zz[1] + "," + zz[2] +")";
            }
        }
    }
    document.addEventListener("keydown", keyColor)  

let colorstable = ["Random", "Red", "Yellow", "Green", "Orange", "Pink", "Blue"]
let eventstable = ["Hover mouse over square", "Click on square", "Release click", "Scroll", "Double click on square", " - ", " - "]
let keystable = ["Press '<b>i</b>'", "Press '<b>r</b>'", "Press '<b>y</b>'", "Press '<b>g</b>'", "Press '<b>o</b>'", "Press '<b>p</b>'", "Press '<b>b</b>'"]


let tabel = document.getElementById("tabel")
let x, x1, x2, x3

for (i = 0; i < colors.length; i++) {
    x = tabel.insertRow(-1)
    x.className = "rnorm"
    x1 = x.insertCell(0)
    x2 = x.insertCell(1)
    x3 = x.insertCell(2)
    x1.className = "color"
    x2.className = "mouse"
    x3.className = "keyb"

    x1.innerHTML = colorstable[i]
    x1.style.color = colors[i]
    x1.style.textShadow = "1px 1px 4px rgba(0, 0, 0, 0.4)";
    x2.innerHTML = eventstable[i]
    x3.innerHTML = keystable[i]
}