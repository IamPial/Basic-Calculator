/*
  
  Learn about Variables & DataTypes;
- Project: Create a basic calculator that stores results in variables; */

 let num1 = prompt("Enter first number: ");
 let num2 = prompt("Enter second number: ");

 num1 = parseInt(num1, 10); // Converts the input string to an integer using base 10
 num2 = parseInt(num2, 10);


 var addition, subtraction, mulplication, division, modulus;

 addition = num1 + num2;
 subtraction = num1 - num2;
 multiplication = num1 * num2 ;
 division = num1 / num2;
 modulus = num1 % num2;

 
 console.log("The addition value is =" +addition + "<br>");
 console.log("The subtraction value is =" +subtraction + "<br>" );
 console.log("The multiplication value is =" +multiplication + "<br>" );
 console.log("The division value is =" +division  + "<br>");
 console.log("The modulus value is =" +modulus );
