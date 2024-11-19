let cir,dia,area,rad;
let pi = 3.14;

//for section 1 :circumference
document.getElementById("bt-cir").onclick = function(){
    rad = document.getElementById("in-cir").value
    cir = 2*pi*rad
    console.log(cir)
    document.getElementById("ans1").textContent = `circumference: ${cir}`;

}

//for section 2 :Diameter
document.getElementById("bt-dia").onclick = function(){
    rad = document.getElementById("in-dia").value
    cir = 2*rad
    console.log(cir)
    document.getElementById("ans2").textContent = `Diameter: ${cir}`;

}

//for section 3 : area
document.getElementById("bt-are").onclick = function(){
    rad = document.getElementById("in-are").value
    cir = pi*(rad**2)
    console.log(cir)
    document.getElementById("ans3").textContent = `Area: ${cir}`;

}