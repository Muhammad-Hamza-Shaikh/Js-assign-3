document.write("<h2>Question1:</h2>");
var city = prompt("Enter the name of a city:");
if (city == "karachi") {
document.write("Welcome to the city of lights"+"<br>");
}
else{
    document.write("Enter a correct City" +"<br>");
} 

//////////Question No 2
document.write("<h2>Question2:</h2>");
var gender = prompt("Enter your Gender:");
if (gender == "male") {
document.write("Good Morning Sir!"+"<br>");
}
else if (gender == "female"){
    document.write("Good Morning Ma'am!"+"<br>");
}
else{
    document.write("Enter a correct Gender"+"<br>");   
}
//////////Question No 3
document.write("<h2>Question3:</h2>");
var signal = prompt("Enter the color of the traffic signal (Red, Yellow, Green):");
if (signal == "red") {
    document.write("Must Stop"+"<br>");
} else if (signal == "yellow") {
    document.write("Ready to move"+"<br>");
} else if (signal == "green") {
    document.write("Move now "+"<br>");
} else {
    document.write("Invalid signal color! Please enter Red, Yellow, or Green.");
}

//  quesstion 4
document.write("<h2>Question4:</h2>");
var remainingFuel = prompt("Enter the remaining fuel in your car (in litres):");
if (remainingFuel <=0.25) {
    document.write("Please refill the fuel in your car");
} else {
    document.write("You have enough fuel for now.");
}

 //question 
 document.write("<h2>Question6:</h2>");
 var subject1 = prompt("Enter marks obtained in subject 1:");
 var subject2 = prompt("Enter marks obtained in subject 2:");
 var subject3 = prompt("Enter marks obtained in subject 3:");

 
 var totalMarks = prompt("Enter total marks:");

 
 var marksObtained = subject1 + subject2 + subject3;
 var percentage = (marksObtained / totalMarks) * 100;
 var grade = "";
 var remarks = "";

 if (percentage >= 80) {
     grade = "A+";
     remarks = "Excellent";
 } else if (percentage >= 70) {
     grade = "A";
     remarks = "Good";
 } else if (percentage >= 60) {
     grade = "B";
     remarks = "You need to improve";
 } else if (percentage >= 50) {
     grade = "C";
     remarks = "Satisfactory";
 } else {
     grade = "Fail";
     remarks = "Sorry, you have failed";
 }

 document.write("<h2>Results:</h2>");
 document.write("Total Marks: " + totalMarks + "<br>");
 document.write("Marks Obtained: " + marksObtained + "<br>");
 document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
 document.write("Grade: " + grade + "<br>");
 document.write("Remarks: " + remarks + "<br>");

 //question7
 
 document.write("<h2>Question7:</h2>");
var secretNumber = prompt(Math.random() * 10) + 1;

var userGuess = (prompt("Guess the secret number (between 1 and 10):"));

if (userGuess === secretNumber) {
    document.write("Bingo! Correct answer" + "<br>");
} 
else if (userGuess + 1 === secretNumber || userGuess - 1 === secretNumber) {
    document.write("Close enough to the correct answer"+ "<br>");
} 
else {
    document.write("Wrong guess. The secret number was " + secretNumber);
}
//q8
document.write("<h2>Question8:</h2>");
var number = (prompt("Enter a number to check weather the number is divisble by 3:"));
if (number % 3 === 0) {
    document.write(number + " is divisible by 3"+ "<br>");
} else {
    document.write(number + " is not divisible by 3"+ "<br>");
}
//q9
document.write("<h2>Question9:</h2>");
var number = parseInt(prompt("Enter a number to check the number is odd or even:"));
if (number % 2 === 0) {
    document.write(number + " is an even number."+ "<br>");
} else {
    document.write(number + " is an odd number."+ "<br>");
}


//q10
document.write("<h2>Question10:</h2>");
var temperature = (prompt("Enter the temperature:"));

if (temperature > 40) {
    document.write("It is too hot outside."+ "<br>");
} else if (temperature > 30) {
    document.write("The Weather today is Normal."+ "<br>");
} else if (temperature > 20) {
    document.write("Today's Weather is cool."+ "<br>");
} else if (temperature > 10) {
    document.write("OMG! Today's weather is so Cool."+ "<br>");
} else {
    document.write("It's quite cold today!"+ "<br>");
}
//q11
document.write("<h2>Question11:</h2>");
var firstNumber = (prompt("Enter the first number:"));

var secondNumber = (prompt("Enter the second number:"));

var operation = prompt("Enter the operation (+, -, *, /, %):");

var result;

if (operation === "+") {
    result = firstNumber + secondNumber;
    document.write("Result: " + firstNumber + " + " + secondNumber + " = " + result);
} else if (operation === "-") {
    result = firstNumber - secondNumber;
    document.write("Result: " + firstNumber + " - " + secondNumber + " = " + result);
} else if (operation === "*") {
    result = firstNumber * secondNumber;
    document.write("Result: " + firstNumber + " * " + secondNumber + " = " + result);
} else if (operation === "/") {
    if (secondNumber === 0) {
        document.write("Error: Division by zero is not allowed.");
    } else {
        result = firstNumber / secondNumber;
        document.write("Result: " + firstNumber + " / " + secondNumber + " = " + result);
    }
} else if (operation === "%") {
    result = firstNumber % secondNumber;
    document.write("Result: " + firstNumber + " % " + secondNumber + " = " + result);
} else {
    document.write("Invalid operation. Please enter one of the following: +, -, *, /, %");
}
