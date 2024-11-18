let cir,dia,area,rad;
let pi = 3.14;

document.getElementById("bt-cir").onclick = function(){
    rad = document.getElementById("in-cir").value
    cir = 2*pi*rad
    console.log(cir)
    document.getElementById("ans1").textContent = `circumference: ${cir}`;

}
33.3