"use strict" ;

let n= document.getElementById('ex1');
n.innerHTML="EX : 1";

 function tellFortune(num,Pname,geoloc,jobtitle){
    return (`You will be a ${jobtitle} in ${geoloc}, and married to ${Pname} with ${num}. children`);
 }

console.log(tellFortune(3,"ebraheem","Jordan","Full stack developer"));
document.getElementById('sol1').innerHTML=(tellFortune(3,"ebraheem","Jordan","Full stack developer"));

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let s= document.getElementById('ex2');
s.innerHTML="EX : 2";

function calculateDogAge(year){
 let dogYear=7/year;
 return (`Your doggie is ${dogYear} years old in dog years`);
}
console.log(calculateDogAge(1));
document.getElementById('sol2').innerHTML=(calculateDogAge(1));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////
let m= document.getElementById('ex3');
m.innerHTML="EX : 3";

function calculateSupply(age,amountPerDay){
  let rest=Number(100-age);
  let amount=Number(rest*amountPerDay*365);
  return(`You will need ${amount} cups of tea to last you until the ripe old age of 100`);
}
console.log(calculateSupply(25,5));
document.getElementById('sol3').innerHTML=(calculateSupply(25,5));

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
let c= document.getElementById('ex4');
c.innerHTML="EX : 4";

function greet(name){
    return (`Hello ${name}`);
  }

console.log(greet("Samar"));
document.getElementById('sol4').innerHTML=greet("Samar");

///////////////////////////////////////////////////////////////////////////////////////////////////////////////
 //EX5
// what is the error: //
/*function double(cat) {             // X is undefined
  return 2 * x;
}
function double(7) {              // parameter must be a variable
  return 2 * 7;
}
function double('7') {            // parameter must be variable, and we cant multiply string 
  return 2 * 'x';
}*/ 

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 // EX6
// fix these functions: // 
/* func double1(x {
  return 2 * x ;                             
} ----------------------------------> function double1(x) {
                                        return 2 * x ; }                            

functiondouble2 x)
return 2 * x;
}-----------------------------------> function double2(x){ 
                                        return 2 * x; }

function (x) double3 {
  return 2 * x;
-------------------------------------> function double3(x) {
                                        return 2 * x;} */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
let z= document.getElementById('ex5');
z.innerHTML="EX : 5";

function cube(x) {
 let y=(x*x*x);
return y ;
}

console.log(cube(3));
document.getElementById('sol5').innerHTML=cube(3);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let b= document.getElementById('ex6');
b.innerHTML="EX : 6";

function multiply(num1,num2){
   let m=Number(num1*num2);
   return m ;
  }

  console.log(multiply(5,6));
document.getElementById('sol6').innerHTML=multiply(5,6);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let p= document.getElementById('ex7');
p.innerHTML="EX : 7";

function canIGetADrivingLicense(age){
    if(age>=20){
      return("Yes you can");
    } else { let remain=(20-age);
      return (`Please come back after ${remain} years to get one`);}
  }
  console.log(canIGetADrivingLicense(20));
  document.getElementById('sol7').innerHTML=canIGetADrivingLicense(20);
///////////////////////////////////////////////////////////////////////////////////////////////////
let v= document.getElementById('ex8');
v.innerHTML="EX : 8";

  function sameLength(string1,string2){
    if(string1.length===string2.length){
      return true;
    }else return false;
  }
  console.log(sameLength("samar","ebraheem"));
  document.getElementById('sol8').innerHTML=(sameLength("samar","ebraheem"));
///////////////////////////////////////////////////////////////////////////////////////////////////////
let l= document.getElementById('ex9');
l.innerHTML="EX : 9";

function largerNumber(num1,num2){
    if(num1>num2)  return num1;
    else return num2;}

console.log(largerNumber(5,6));
document.getElementById('sol9').innerHTML=(largerNumber(5,6));   
////////////////////////////////////////////////////////////////////////////////////////////////////////
let l1= document.getElementById('ex10');
l1.innerHTML="EX : 10";

function smallerNubmer(num1,num2,num3){
  let arr=[num1,num2,num3];
  let min=Infinity;
  for(let i=0;i<arr.length;i++){
    if (min>arr[i]){
      min=arr[i];
    }} 
return min;  }

console.log(smallerNubmer(2,8,1));
document.getElementById('sol10').innerHTML=(smallerNubmer(2,8,1));   
//////////////////////////////////////////////////////////////////////////////////////////////////////////
let l11= document.getElementById('ex11');
l11.innerHTML="EX : 11";

function shorterString(str1,str2,str3,str4,str5){
  let arr=[str1,str2,str3,str4,str5];
  let minStr=Infinity;
  for(let i=0;i<arr.length;i++){
    if(minStr.length>arr[i].length) 
    minStr=arr[i];
  }
  return minStr;
}
document.getElementById('sol11').innerHTML=(shorterString("air","tr","by","car","github"));   
console.log(shorterString("air","tr","by","car","github"));


////////////////////////////////////////////////////////////////////////////////////////////////////////
let l12= document.getElementById('ex12');
l12.innerHTML="EX : 12";

function longest(str1,str2,str3,str4,str5){
  let arr=[str1,str2,str3,str4,str5];
  let longStr=Infinity;
  for(let i=0;i<arr.length;i++){
    if(longStr.length >arr[i].length) 
    longStr=arr[i];
  }
}

console.log(longest("air","tr","by","car","github"));
document.getElementById('sol12').innerHTML=(longest("air","tr","by","car","github"));   


///////////////////////////////////////////////////////////////////////////////////////////////////////
let l13= document.getElementById('ex13');
l13.innerHTML="EX : 13";

function isEven(num){
  if(num%2===0){
    return true;
  }else 
  return false;}

  console.log(isEven(2));
  document.getElementById('sol13').innerHTML=(isEven(2));   
///////////////////////////////////////////////////////////////////////////////////////////////////////

let l14= document.getElementById('ex14');
l14.innerHTML="EX : 14";
function isOdd(num){
  if(num%2!==0){
    return true;
  }else return false;
}
console.log(isOdd(4));
document.getElementById('sol14').innerHTML=(isOdd(2));   
//////////////////////////////////////////////////////////////////////////////////////////////////////
let l15= document.getElementById('ex15');
l15.innerHTML="EX : 15";
function positive(num){
  if(num>0)
   return num;
  else 
  return Math.abs(num);
}
console.log(positive(-5));
document.getElementById('sol15').innerHTML=positive(-5);   

///////////////////////////////////////////////////////////////////////////////////////////////////////
let l16= document.getElementById('ex16');
l16.innerHTML="EX : 16";

function fullName(fname,lname){
let v=`${fname} ${lname}`;
return v ;}

  console.log(fullName("Samar" , "alkhamis"));
  document.getElementById('sol16').innerHTML= fullName("Samar","alkhamis");   
//////////////////////////////////////////////////////////////////////////////////////////////////////

let l17= document.getElementById('ex17');
l17.innerHTML="EX : 17";

function average(num1,num2,num3,num4,num5){
  let sum=0;
  let arr=[num1,num2,num3,num4,num5];
  for(let i=0;i<arr.length;i++){
    sum+=arr[i];
  }
  let avg=sum/arr.length;
  return avg;
}

console.log(average(5,7,9,3,5));
document.getElementById('sol17').innerHTML=average(5,7,9,3,5);   

//////////////////////////////////////////////////////////////////////////////////////////////////////

let l18= document.getElementById('ex18');
l18.innerHTML="EX : 18";

function randomNumber(){
  return Math.random();
}
console.log(randomNumber());
document.getElementById('sol18').innerHTML=randomNumber();   

////////////////////////////////////////////////////////////////////////////////////////////////////////
let l19= document.getElementById('ex19');
l19.innerHTML="EX : 19";


function randomBetweenNumbers(num1,num2){
  return Math.random() * (num2 - num1) + num1;}

  console.log(randomBetweenNumbers(1,8));
  document.getElementById('sol19').innerHTML=randomBetweenNumbers(1,8);   


///////////////////////////////////////////////////////////////////////////////////////////////////////////////

let l20= document.getElementById('ex20');
l20.innerHTML="EX : 20";


function scoreInUniversty(mark){
  if(mark>=95 && mark<=100) return "A";
  else if(mark>=85 && mark<=94) return "B";
  else if(mark>=70 && mark<=84) return "C";
  else if(mark>=50 && mark<=69) return "D";
  else if(mark>=0 && mark<=49) return "F";
}
console.log(scoreInUniversty(95));
document.getElementById('sol20').innerHTML=scoreInUniversty(95);   

//////////////////////////////////////////////////////////////////////////////////////
let l21= document.getElementById('ex21');
l21.innerHTML="EX : 21";

let i=0;
function counter(){
 return i++;
 }
 console.log(counter());
console.log(counter());
document.getElementById('sol21').innerHTML=counter();   


//////////////////////////////////////////////////////////////////////////////////////
let l22= document.getElementById('ex22');
l22.innerHTML="EX : 22";
function resetCounter(){
  return `${i-1} and the counter reset now`;
 i=0;
}
console.log(resetCounter());
document.getElementById('sol22').innerHTML=resetCounter();   

