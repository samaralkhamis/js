"use strict" ;
console.log('Here is : While')

let n= document.getElementById('ex1');
n.innerHTML="EX : 1";

function subtract(num){
    let i=num-1;
    while(i>=0){
        num-=i;
        i--
    }
    return num;
}

console.log(subtract(9));
document.getElementById('sol1').innerHTML=subtract(9);


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////

let s= document.getElementById('ex2');
s.innerHTML="EX : 2";
function factorial(num){
    let i=num-1;
    while(i>=1){
        num*=i;
        i--;
    }
    return num;
}
console.log(factorial(4));
document.getElementById('sol2').innerHTML=factorial(4);

// /////////////////////////////////////////////////////////////////////////////////////////////////////////////
let m= document.getElementById('ex3');
m.innerHTML="EX : 3";

function repeatStr(str,num){
    let newStr="";
    let i=num;
    while(i!==0){
        newStr+=str;
        newStr+=" ";
        i--;
    }
    return newStr;
}
console.log(repeatStr("to",4));
document.getElementById('sol3').innerHTML=repeatStr("to",4);

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////
 let c= document.getElementById('ex4');
c.innerHTML="EX : 4";
function sum2(num1,num2){
     let i=num1;
     let sum=0;
    while(i>=num1 && i<=num2){
        sum+=i;
        i++;
    }
    return sum;
}
console.log(sum2(3,6));
document.getElementById('sol4').innerHTML=(sum2(3,6)); 
///////////////////////////////////////////////////////////////////////////////////////////////////////////////
let z= document.getElementById('ex5');
z.innerHTML="EX : 5";

function repeatStr2(str1,str2){
    let i=str2.length;
    let newStr="";
    while(i!==0){
        newStr+=str1;
        newStr+=" ";
        i--;
    }
    return newStr;
}
console.log(repeatStr2("ro","fff"));
document.getElementById('sol5').innerHTML=repeatStr2("ro","fff");

////////////////////////////////////////////////////////////////////////////////////////////////////////////

let b= document.getElementById('ex6');
b.innerHTML="EX : 6";

function multiOf(num1,num2,num3){
    num1*= (Math.pow(num2,num3));
    return num1;
} 
console.log(multiOf(4,10,3));
document.getElementById('sol6').innerHTML=multiOf(4,10,3);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
let p= document.getElementById('ex7');
p.innerHTML="EX : 7";

function muti2(num1,num2){
     let i=num1;
     let multi=1;
    while(i>=num1 && i<=num2)
    {
        multi*=i;
        i++;
    }
    return multi;
}
console.log(muti2(3,6));
document.getElementById('sol7').innerHTML=muti2(3,6);

///////////////////////////////////////////////////////////////////////////////////////////////////
let v= document.getElementById('ex8');
v.innerHTML="EX : 8";

function numberBetweenUs(num1,num2){
    let str="";
    while(num1 !== num2-1){
        num1++;
         str+=num1;
         if(num1 !== num2-1){
         str+=",";}
    }
    return str;
}
console.log(numberBetweenUs(2,8));
document.getElementById('sol8').innerHTML=numberBetweenUs(2,8);

///////////////////////////////////////////////////////////////////////////////////////////////////////
let l= document.getElementById('ex9');
l.innerHTML="EX : 9";
function countDown(num){
    let str="";
    while(num>=0){
         if(num===0){
         str+="done"; break;}
         str+=num;
         str+=",";
         num--;
    }
    return str;
}
console.log(countDown(8));
document.getElementById('sol9').innerHTML=countDown(8);

////////////////////////////////////////////////////////////////////////////////////////////////////////
let l1= document.getElementById('ex10');
l1.innerHTML="EX : 10";

function multiplication2(num1,num2){
    return num1*num2;
}
console.log(multiplication2(5,4));
document.getElementById('sol10').innerHTML=multiplication2(5,4);

//////////////////////////////////////////////////////////////////////////////////////////////////////////
let l11= document.getElementById('ex11');
l11.innerHTML="EX : 11";

function mod2(num1,num2){
    return num1%num2;
}

console.log(mod2(2,8));
document.getElementById('sol11').innerHTML=mod2(5,4);
////////////////////////////////////////////////////////////////////////////////////////////////////////
let l12= document.getElementById('ex12');
l12.innerHTML="EX : 12";

function repeatChar(str,char){
    let count=0;
    let i=0;
    while(i<str.length){
        if(char.toLowerCase()==str.charAt(i)){
            count++;
        }
        i++;
    }
    return count;}
console.log(repeatChar("schoool","O"));
document.getElementById('sol12').innerHTML=repeatChar("schoool","O");
///////////////////////////////////////////////////////////////////////////////////////////////////////

        //EXTRAA QUASYION//

/*
1
Create a function called fibon
that takes 1 parameter a number,
and return the fibonacci for this number
Ex: fibon(7); => 21
Ex: fibon(2); => 2
Ex: fibon(1); => 1
Ex: fibon(0); => 1
fib(n)=fin(n-1)+fib(n-2)
fibon(n): 1 1 2 3 5 8 13 21
          | | | | | |  |  |
n:        0 1 2 3 4 5  6  7
*/


/*
2
Write a function called mirror
that takes one parameter a string
and return the reversed string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
** Important: You should dint have extra space at the end
mirror("school") => "loohcs"
mirror("car") => "rac"
mirror("maDrasa") => "asarDam"
*/



/*
3
Write a function called mirrorCaseAlso
that takes one parameter a string
and return the reversed string order
and the lower case to upper case
and the upper case to lower case
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
** Important: You should dint have extra space at the end
mirrorCaseAlso("sChOol") => "LOoHcS"
mirrorCaseAlso("THOR") => "roht"
mirrorCaseAlso("BaBa") => "AbAb"
*/



/*
4
Write a function called repeatChar2
that takes two parameters
and return the times that this char
wit case sensetive
repeat inside this string
**hint: "str"[0] => "s"
**hint: "car"[1] => "a"
**hint: seacrh in MDN how "a" => "A" and "A" => "a"
repeatChar2("schOol","o") => 1
repeatChar2("school","a") => 0
repeatChar2("School","S") => 1
try more case by yourself
*/


/*
5
Create a function called HiSayHelloTo
that takes 1 parameter a number that represent
the nubmer of people come to an event,
and say hi to each person sepretadly
+ let him/her say hello to each one that comes before him/her
Ex: welcomeSayHello(3);
=>
hi 1
hi 2 Now Pleas Say Hello To 1
hi 3 Now Pleas Say Hello To 1 and 2
Ex: welcomeSayHello(7); =>
hi 1
hi 2 Now Pleas Say Hello To 1
hi 3 Now Pleas Say Hello To 1 and 2
hi 4 Now Pleas Say Hello To 1, 2 and 3
hi 5 Now Pleas Say Hello To 1, 2, 3 and 4
hi 6 Now Pleas Say Hello To 1, 2, 3, 4 and 5
hi 7 Now Pleas Say Hello To 1, 2, 3, 4, 5 and 6
*/

