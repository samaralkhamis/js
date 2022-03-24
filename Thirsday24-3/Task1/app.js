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

  let z='This Object Represent My Name '+Me.firstName +' ' +Me.lastName+' , Represent My age : '+Me.age +' born from: ' +Me.dop +' , My Fav Food is : '+Me.favFood+ ' & Finally My Fav Movie is  '+Me.favMovie;

  document.getElementById('obj').innerHTML= z;

  console.log(z);
  ///////////////////////////////////////////////////////////////////////////////////////////

  let y= document.getElementById('ex2')
  y.innerHTML="EX : 2";    
  let person=[
      {name: {first:'John', last:'Hob'}, age:35},
      {name: {first:'Alex', last:'Mercer'}, age:25},
      {name: {first:'Alice', last:'Zaheer'}, age:24},
      {name: {first:'Zues', last:'Odin'}, age:55},
      {name: {first:'Soso', last:'Alamora'}, age:67},];

        function FirstName(arr){
            let array=[];
         for (let i= 0;  i< arr.length; i++) {
             array.push(arr[i].name.first)
         }
         return array ;
      };
      console.log(FirstName(person));
      document.getElementById('solution').innerHTML=(FirstName(person));

///////////////////////////////////////////////////////////////////////////////////////////////////

let w= document.getElementById('ex3')
  w.innerHTML="EX : 3"; 

  function averageAge(arr){
    let sum =0 ;
 for (let i= 0;  i< arr.length; i++) {
     sum+= arr[i].age;
 }
 return sum/arr.length;
};

console.log(averageAge(person));
document.getElementById('solution3').innerHTML=(averageAge(person));


///////////////////////////////////////////////////////////////////////////////////
let s= document.getElementById('ex4')
  s.innerHTML="EX : 4"; 
  function older(arr){
    let older =0 ;
 for (let i= 0;  i< arr.length-1; i++) {
     if(arr[i].age < arr[i+1].age)
     older= arr[i+1].age;
 }
 return older;
};
console.log(older(person));
document.getElementById('solution4').innerHTML=(older(person));


////////////////////////////////////////////////////////////////////////////////////
let p= document.getElementById('ex5')
  p.innerHTML="EX : 5"; 

function Longest(arr){
    let max=((arr[0].name.first + arr[0].name.last).length);
for (var i = 0; i < arr.length-1 ; i++) {
    if (max < ((arr[i+1].name.first + arr[i+1].name.last).length)){
        max=(arr[i+1].name.first + arr[i+1].name.last);
        console.log(max);
    } 
}return max ;
}
console.log(Longest(person));
document.getElementById('solution5').innerHTML=(Longest(person));
 ///////////////////////////////////////////////////////////////////////////

 let c= document.getElementById('ex6')
  c.innerHTML="EX : 6";