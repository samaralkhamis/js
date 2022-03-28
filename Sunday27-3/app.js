"use strict";

let MobForm = document.getElementById("mobForm");
let table = document.getElementById("tableCon");
let Mobilephone = []; ///1

function user(useName, typeName , price , newold) {
    this.useName = useName;
    this.typeName = typeName;
    this.price = price;
    this.newold= newold; 
    Mobilephone.push(this);
    renderOrder();
    Storeinlocalstorage();
    
}



    function Storeinlocalstorage()
    {
        let makestr = JSON.stringify('user' ,Mobilephone[Mobilephone.length-1]);
        localStorage.setItem( 'user' ,Mobilephone[Mobilephone.length-1].useName ,makestr );
    }
    
    function Getfromlocalstoarge ()
    {
        let y = Mobilephone[Mobilephone.length-1].useName ;
        let localstoargeitem = localStorage.getItem(y);
        let makepars = JSON.parse(localstoargeitem);
        return makepars;
    }
    

function pricemob(min,max){
  let Pri = (Math.floor(Math.random() * (max - min) + min));}
  
    
MobForm.addEventListener("submit", SubmitForm);
function SubmitForm(event) {
  event.preventDefault();
  let useName= event.target.useName.value;
  let typeName= event.target.typeName.value;
  let price = pricemob(50,500);
  new user(useName, typeName , price );
}

SubmitForm();


function renderOrder() {

  function newold(){
    if (price <100){
      return "Used";
    }
    else{
      return "New Device";
    }
  }

      let  x = Getfromlocalstoarge();
      console.log(x);

      let tablerow = document.createElement("tr");
      table.appendChild(tablerow);
  
      let Col1 = document.createElement("td");
      Col1.innerText =x.useName;
      tablerow.append(Col1);
      let Col2 = document.createElement("td");
      Col2.innerText = x.typeName;
      tablerow.append(Col2);
      let Col3 = document.createElement("td");
      Col3.innerText = x.price;
      tablerow.append(Col3)
      let Col4 = document.createElement("td");
      Col4.innerText = x.newold;
      tablerow.append(Col4);
      
}