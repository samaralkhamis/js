"use strict";
//ex1
let FavoriteFood=["mansaf", "maglobeh" , "ozi" , "zabseh" , "steak"];
console.log(FavoriteFood);
//document.write(FavoriteFood);
let FavSport=["walking","running","swimming"];
console.log(FavSport);
//document.writeln(FavSport);
let FavMovie=["romance" , "action" , "drama"];
console.log(FavMovie);
/* document.writeln(FavMovie); */

//ex2
function FirstOfArray(arr){
 document.write(arr[0]);
}
/*document.write(FirstOfArray(FavSport));*/
//expected output[walking]

//ex3
function LastOfArray(arr){
    let x=arr[arr.length-1] ;
    document.write(x) ;
    }
//document.write(LastOfArray(FavMovie));
//expected output[drama]

//ex4
let arr1=[0 , 5 , 7 , 9];
console.log(arr1);
let x=arr1.shift();
console.log(arr1);
let y=arr1.shift();
console.log(arr1);
let z=arr1.shift();
console.log(arr1);
let X= arr1.unshift(1,3,4,6,8);
console.log(arr1);
let p=arr1.push(10);
console.log(arr1);
// expected output [1,3,4,6,8,9,10]
 
//ex5
let arr2= [0,5,7,9];
console.log(arr2);
let el1=arr2.shift();
let el2=arr2.shift();
let el3=arr2.shift();
console.log(arr2);
let el4=arr2.unshift(5);
let start = 2;
let deleteCount = 0;
arr2.splice(start, deleteCount, -7);
console.log(arr2);
console.log(arr2.push(3.5));
console.log(arr2);
//expected output [5,9,-7,3.5]


//ex6
function getMiddleodd(oddarr) {
    const middle = oddarr.length >> 1;
    return oddarr.length & 1
        ? oddarr[middle]
        : oddarr.slice(middle - 1, middle + 1);
}
//expected output: given the middle num of an array if its an  odd . 

    let oddarray=[1,3,5,7,9];
    console.log(oddarray);
    console.log("The middle Num in odd Array is : "+getMiddleodd(oddarray));

//ex7
 function getMiddleven(evenarr){
    if (!evenarr.length)
    return; 
  const mid = evenarr.length / 2;
  if (evenarr.length % 2 === 1) {
    return evenarr[Math.floor(mid)];
  } else {
    return [
        evenarr[mid - 1],
      evenarr[mid],
    ];
  }
    // return evenarr[Math.floor(evenarr.length/2)];  
}
////expected output: given the 2 middle num of an array if its an even . 
let evenarray =[1,2,3,4,5,6];
console.log(evenarray);
console.log("The middle Num in even Array is : "+getMiddleven(evenarray));

//ex8
let animals=['cats', 'ele', 'birds'];
animals =['zebra','elephent'];
console.log(animals);

//ex9
/*function indexOfArray(v,vv)
let array5=[1,2,3,4];*/

//ex10
function arrayExceptLast(x){
    return x.pop();
}
let array5=[1,2,3,4];
let m=arrayExceptLast(array5);
console.log(array5);

//ex11
function addToEnd(x , num) {
    return x.push(num);
}
let k=9;
let mm=addToEnd(array5 , k);
console.log(array5);

//ex12(for loop)
function sumArray(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        sum += a[i];
    }
return sum ;}
let s=sumArray(array5);
console.log(s);
//expected output : function sumarray for array5 = 15

//ex12(while)
function sumArray1(a) {
    let i = 0
    let sum = 0; 
    while (i < a.length) {
        sum += a[i];
        i++;}
    return sum ;}
    let S=sumArray1(array5);
    console.log(S);
    
    //ex13
    function MinInArray(){
            let array = Array.prototype.slice.call(arguments);
            array = array.length === 1 && array[0].length ? array[0] : array;
          
            let min = array[0];
            let i, count;
            for (i = 1, count = array.length; i < count; i++) {
              if (array[i] < min) min = array[i];
            }
            return min;
          }
    let l=MinInArray(array5);
    console.log(l);


//ex14
   // For Loop
let array1=[14,11,9,10,20,15];
let element1=Math.floor(Math.random()* array1.length);
 function removeFromArray (array1,element1){
 for (i=0; i<array.length;i++ ){
    if(array1[i] === element1){
            array1.splice(i, 1);
        }
    }
    return array1;
}

    //while Loop
let array=[14,11,9,10,20,15];
let element=Math.floor(Math.random()* array.length);
 function removeFromArray (array){
 while(i<array.length){
        if(array[i]===number){
            array.splice(i, 1)
        }
        i++
    }
    return array;
}



//ex15
    //For Loop
let arra=[14,11,9,10,20,15];
let arra2=[];
 function  oddArray (array){
 for (i=0; i<array.length;i++ ){
    if(array[i] % 2 == 0 ){
     }
    else{
     arra2.push(array[i]);
  }
    }
    return arra2;
}

    //while Loop
let arr=[14,11,9,10,20,15];
let arra1=[];
 function oddArray (array){
 while(i<array.length){
        if(array[i] % 2 == 0){
        }
        else{
     arra1.push(array[i]);
  }
i++;
    }
    return array;
}

    //ex16

   // for loop
let array3=[5,8,9,10,12,15];
let sum1;
function aveArray(array){
    for (i=0; i<array.length; i++){
   sum1 =sum1 + array[i];
   }
 return (sum1/(array.length));
}


// While loop
let array4=[5,8,9,10,12,15];
let sum2;
function aveArray(array){
    while (i<array.length){
   sum2 =sum2 + array[i];
 i++;
   }
 return (sum2/(array.length));
}


    //ex17
 function shorterInArray(arr=[""]){
 let short=arr[0];
   
// for loop
for(let i=0;i<arr.length;i++){
   if(arr[i].length<short.length)
    short=arr[i];
   }

 // While loop
  let i=0;
   while(i!=arr.length){
  if(arr[i].length<short.length)
    short=arr[i];
    i++;
   }
        return short;
    }
var strings= ["alex","mercer","madrasa","rashed2","emad","hala"];
console.log(shorterInArray(strings));

//ex18
// for loop
function repeatChar(string="",target=""){
    let result=0;
    
    for(let i=0;i<string.length;i++){
        if(string[i]==target)
            result++;
    }    return result;
}
var string= "alex mercer madrasa rashed2 emad hala";
console.log(repeatChar(string,"a")) ; 
   // While loop
//   let i=0;
//    while(i!=string.length){
//     if(string[i]==target)
//         result++;
//     i++;}


//ex19
//for Loop
function evenIndexOddLength(array){
let newArray = [];
    for (let i =0;i<array.length;i++){
        if(array[i].length % 2 === 1 && i % 2 ===0){
            newArray.push(array[i]);
        }
    }
    return newArray;
}
