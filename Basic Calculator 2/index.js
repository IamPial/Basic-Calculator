

   let num1 = parseFloat(prompt("Enter first numbers : "));
   let num2 = parseFloat(prompt("Enter last numbers: "));
   let operator = prompt("Enter operators: + - * / % **");

   let result, text;
   
   //Handle input validation;
   if(isNaN(num1) || isNaN(num2)){
    text = "Invalid input.. Please provide numbers!!";
    result = "N/A";
   }
   //perform calculation based on operators;
   else {
        if(operator === '+'){
            text = "<h3>You Are Calculating Addition Value</h3>";
            result = num1 + num2;
        }
        else if(operator === '-'){
            text = "<h3>You Are Calculating Subtraction Value</h3>";
            result = num1 - num2;
        }
        else if(operator === '*'){
            text = "<h3>You Are Calculating Multiplication Value</h3>";
            result = num1 * num2;
        }
        else if(operator === '/'){
            if(num2 === 0){
                text = "<h3>Divided by zero is not allowed</h3>";
                result = "N/A";
            }
            else{
                text = "<h3>You Are Calculating Division Value</h3>";
                result = num1 / num2;
            }
        }
        else if(operator === '%'){
            text = "<h3>You Are Calculating Modulus Value</h3>";
            result = num1 % num2;
        }
        else if(operator === '**'){
            text = "<h3>You Are Calculating Exponentiation Value</h3>";
            result = num1 ** num2;
        }
        //Handle invalid operators;
        else{
            text = "<h3> Calculation Error</h3>";
            result = "Wrong Operation";
        }
   }

   //Log the file with...Console.log()  or document.write() or alert();
   document.write(` ${text} <br> The result is : ${result}`);