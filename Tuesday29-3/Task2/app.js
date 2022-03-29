'use strict';
let pargloc=document.getElementById('cityResult')
let formInfo=document.getElementById('mobForm');
let table=document.getElementById('boadTa');

let cusInfo=[];

function localStorageX(){
    let array=JSON.stringify(cusInfo);
    localStorage.setItem('data',array);
}
function callFromLocalStorage(){
    let obj=localStorage.getItem("data");
    let newArray=JSON.parse(obj);
    if (newArray !==null){
      cusInfo= newArray;
    }
    renderInfo();
}

callFromLocalStorage()

function mobileForm(useName, typeNameD, loccation){
    this.useName=useName;
    this.typeNameD=typeNameD;
    this.price=price();
    this.usedOrNot=usedOrNot();
    this.loccation = loccation;
    outputlocation(loccation);
    cusInfo.push(this);

    renderInfo();
    localStorageX();
    console.log(cusInfo);
}
async function outputlocation(x)
{
    let respone = await fetch(`https://eu1.locationiq.com/v1/search.php?key=pk.f9741d3d2d4feceb14b5c0cb7218f625&q=${x}&format=json`)
    let data = await respone.json();
   let createname = document.createElement("span");
   pargloc.appendChild(createname)
   createname.innerHTML= `Location Name: ${data[0].display_name} <br>
   lot: ${data[0].lat}
   lon: ${data[0].lon}
   <br>`
   let imgsrc = data[0].icon
   console.log(imgsrc);
   document.getElementById("imgg").src = `${imgsrc}`
    console.log(data);
}

function price(){
    let cost=Math.ceil(Math.random() *(500-50)+50);
    return cost;
}
function usedOrNot(){
    let isUsed=mobileForm.price;
    if(isUsed<100)
    return 'Used';
    else return 'New device';
}
formInfo.addEventListener('submit',handleSubmit);
function handleSubmit(e) {
    e.preventDefault();
    let useName=e.target.useName.value;
    let typeNameD=e.target.typeNameD.value;
    let loccation = e.target.locName.value;
    new mobileForm(useName,typeNameD, loccation)
}
handleSubmit();
function renderInfo(){
    table.textContent='';
    
    for(let i=0;i<cusInfo.length;i++){
        let row=document.createElement('tr');
        let cell1=document.createElement('td');
        let cell2=document.createElement('td');
        let cell3=document.createElement('td');
        let cell4=document.createElement('td');
        /*Show in HTML page */
        table.appendChild(row);
        row.appendChild(cell1);
        row.appendChild(cell2);
        row.appendChild(cell3);
        row.appendChild(cell4);
        /*Add values for aech cell */
        cell1.textContent=cusInfo[i].useName;
        cell2.textContent=cusInfo[i].typeNameD;
        cell3.textContent=cusInfo[i].price;
        cell4.textContent=cusInfo[i].usedOrNot;
    }

}
getfromform();