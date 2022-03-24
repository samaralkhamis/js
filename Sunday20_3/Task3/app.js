"use strict";
function operation(){
let operation=prompt("Please put an Operation here: ");
let numa=prompt("Please Put The first number :");
let numb=prompt("please put the second number :");

let num1=Number(numa);
let num2=Number(numb);

switch (operation) {

    case "+":
        
      alert("sum is"+( num1+num2));
      document.write("sum is"+( num1+num2));
      break;
    case "-":
        let number=Number(num1);
        let number2=Number(num2);

      alert("the subtraction is"+ (number-number2) );
      console.log("the subtraction is"+ (number-number2));
      document.write("the subtraction is"+ (number-number2))
      break;
    case "*":
      alert("The Multiplication is "+num1 * num2);
      console.log("The Multiplication is "+num1 * num2);
      document.write("The Multiplication is "+num1 * num2);
      break;
    case "/":
      alert("The division is"+ num1/num2);
      console.log("The division is"+ num1/num2);
      document.write("The division is"+ num1/num2);
      break;
      default:
      alert("please enter the operation");
      console.log("please enter the operation");
      break;
  }}

