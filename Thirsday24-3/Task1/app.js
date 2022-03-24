"use strict" ;

let x= document.getElementById('ex1')
x.innerHTML="EX : 1";

const Me = {
    firstName: "Samar",
    lastName: "Alkhamis",
    age: 24,
    dop:'14-3-1998',
    favFood:['Taboleh ', 'seaFood ' , 'FastFood'],
    favMovie:['romance','action', 'drama'],
  }; 
  document.getElementById('obj').innerHTML= 'This Object Represent My Name '+Me.firstName +' ' +Me.lastName+' , Represent My age : '+Me.age +' born from: ' +Me.dop +' , My Fav Food is : '+Me.favFood+ ' & Finally My Fav Movie is  '+Me.favMovie;


  ///////////////////////////////////////////////////////////////////////////////////////////

  let y= document.getElementById('ex2')
  y.innerHTML="EX : 2";

    
  let person=[
      {name: {first:'John', last:'Hob'}, age:35},
      {name: {first:'Alex', last:'Mercer'}, age:25},
      {name: {first:'Alice', last:'Zaheer'}, age:24},
      {name: {first:'Zues', last:'Odin'}, age:55},
      {name: {first:'Soso', last:'Alamora'}, age:67},];

       let firstName = {
        FirstName : function() {
          return this.firstName ;
        }
      };

      
console.log(person.FirstName);








