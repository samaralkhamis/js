'use strict';

let newArray;
function doubleNumbers(array) {
    newArray =array.map(function(i,index){
        return i*2;
    });
}
doubleNumbers([2, 5, 100]);
console.log(newArray);

let newArray2;
function stringItUp(array){
newArray2=array.map(function(i,index){
    return i.toString();
})
}
stringItUp([2, 5, 100])
console.log(newArray2);


let newArray3;
function capitalizeNames(array){
    newArray3=array.map(function(i,index){
        return i.toUpperCase();
    })
}
capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]);
console.log(newArray3);

let newArray4;
function namesOnly(array){
    newArray4=array.map(function(i,index){
        return i.name;
    })
}

namesOnly([
    {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
   },
      {
         name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
           age: 16
      },
      {
          name: "Bob Ziroll",
           age: 100
      }
       ]);

       console.log(newArray4);

let newArray5;
function makeStrings(array){
    newArray5=array.map(function(i,index){
        let x='';
        if(i.age<18){
            x='is under age!!';
        }
        else{
            x='can go to The Matrix';
        }
        return i.name + x;
    })
}
makeStrings([
        {
           name: "Angelina Jolie",
           age: 80
       },
       {
           name: "Eric Jones",
           age: 2
       },
       {
           name: "Paris Hilton",
           age: 5
       },
       {
           name: "Kayne West",
           age: 16
       },
       {
           name: "Bob Ziroll",
           age: 100
       }
     ]); 

     console.log(newArray5);
     

let newArray6;
function readyToPutInTheDOM(array){
    newArray6=array.map(function(i,index){
        return `<h1> ${i.name}</h1><h2>${i.age}</h2>`;
    })
}
readyToPutInTheDOM([
    {
       name: "Angelina Jolie",
       age: 80
   },
   {
       name: "Eric Jones",
       age: 2
   },
   {
       name: "Paris Hilton",
       age: 5
   },
   {
       name: "Kayne West",
       age: 16
   },
   {
       name: "Bob Ziroll",
       age: 100
   }
]);
console.log(newArray6);

let newArray7;
function doubleValues(array) {
    newArray7 =array.map(function(i,index){
        return i*2;
    });
}
doubleValues([1,-2,-3]);
console.log(newArray7);


let newArray8;
function valTimesIndex(array){
    newArray8=array.map(function(i,index){
        return i*index;
    })
}
valTimesIndex([1,-2,-3]);
console.log(newArray8);

let newArray9;
function extractkey (array , key){
    newArray9=array.map(function(i,index){
        return i[key];
    })
}
extractkey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name');
console.log(newArray9);

let newArray10;
function extractFullName(array){
    newArray10=array.map(function(i,index){
        return i.first +' '+ i.last;
    })
}
extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]);
console.log(newArray10);