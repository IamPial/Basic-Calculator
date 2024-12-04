

/*  Learn: Variables, data types (var, let, const), and basic operators (+, -, *, /).
    Practice: Write a program to calculate the area of a rectangle.*/ 

    let rectangleBase = parseFloat(prompt("Enter value of base:"));
    let rectangleHeight = parseFloat(prompt("Enter the value of height:"));
	
    let rectangleArea = rectangleBase * rectangleHeight;
	
    console.log(`The area of rectangle is: ${rectangleArea}`);