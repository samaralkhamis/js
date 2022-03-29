'use strict';
let newArray;
let ulparent=document.getElementById('testLi');

async function getData(){
    let responce = await fetch('https://eu1.locationiq.com/v1/search.php?key=pk.f9741d3d2d4feceb14b5c0cb7218f625&q=amman&format=json')
   console.log(responce);
   let data=await responce.json(); //transfer all the data that came from url (fetch) to json
   console.log(data);

  newArray= data.map((i)=>
   {
       let lichild = document.createElement("li");
       let newname= i.display_name.split(",",2);
       lichild.innerHTML = ` disaply name: ${newname}
       <br>
       <br>
       lat: ${i.lat}
       <br>
       <br>
       lon: ${i.lon}
       <br>
       <br> `;
       ulparent.appendChild(lichild);
})}
getData();
console.log(newArray);

