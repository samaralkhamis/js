"use strict";
function press(){
let num1 = prompt("Enter the first number");
let num2 = prompt("Enter the second number" ,);
let num3 = prompt("Enter the third number");
let num_1 = parseInt(num1);
let num_2 = parseInt(num2);
let num_3 = parseInt(num3);
let output ;
let output1 ;
let output2 ;
if ( num_1 % 3 ==0 || num_2 % 3 ==0 || num_3 % 3 ==0 )
{
    output = "Fizz";
}
 if ( num_1 % 5 ==0 || num_2 % 5 ==0 || num_3 % 5 ==0)
{
    output1 = "Buzz";
}
 if ( num_1 % 3 == 0 && num_1 % 5 == 0 || num_2 % 3 == 0 && num_2 % 5 == 0 || num_3 % 3 == 0 && num_3 % 5 == 0 )
{
    output2 = "Fizz Buzz";
}
console.log(output); 
document.write(output)
console.log(output1); 
document.write(output1)
console.log(output2) ; 
document.write(output2)
}
