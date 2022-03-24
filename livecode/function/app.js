"use strict";
function outcome() {
    let x= Number(document.getElementById("num-one").value);
    let y= Number(document.getElementById("num-two").value);
    let z=0;


    if(document.getElementById("box1").checked){
        z= x + y;
    }else if(document.getElementById("box2").checked){
        z = x - y;
    }else if(document.getElementById("box3").checked){
        z = x * y;
    }else{ z = x / y;}

    document.getElementById("resultArea").innerText= "Result : "+z;
}















   // document.getElementById("resultArea").innerText=" Result : "+ z;
