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
function removeFromArr(arr,x) {
    for (let i = 0; i < arr.length; i++) {
        if(arr1[i] == x){
            return arr1.splice([i]); 
        }}
console.log(arr1);}

// function removeFromArr(a,n){
//    return a.splice(n);

// }
console.log(array5);
let j=removeFromArr(array5,9);
    console.log(j);
    console.log(array5);






