"use strict" ;

  let x=document.getElementById("color");
  x.style.backgroundColor="blue";

  let dColors=['blue' , 'red' , 'green'];
  let i=0 //array color index

  function divColors() {
    x.style.backgroundColor=dColors[i];
    i=(i+1)% dColors.length;
  }