let firstNumber = "";
let firstNumberAsNumber = 0;

let hasPressedOperator = false;

let secondNumber = "";
let secondNumberAsNumber = 0;
let operator = ""

let endNumber = 0;

let display = document.querySelector(".display");

let numberButtons = document.querySelectorAll(".number-button");


numberButtons.forEach(numberButton => 
   numberButton.addEventListener("click", addToNumber)
);
        

function addToNumber(event)
{
    const button = event.target;
    if (!hasPressedOperator)
    {
        firstNumber += button.value;
        firstNumberAsNumber = parseInt(firstNumber);

        display.textContent = firstNumber;
        console.log("First" +  (typeof(firstNumberAsNumber)) + ": " + firstNumber);
    }
    else if (hasPressedOperator)
    {
        secondNumber += button.value;
        secondNumberAsNumber = parseInt(secondNumber)
        display.textContent = secondNumber;
        console.log("Second" +  (typeof(secondNumberAsNumber)) + ": " + secondNumber);

    }
}


let operatorButtons = document.querySelectorAll(".operator-button");

operatorButtons.forEach(operatorButton =>
    operatorButton.addEventListener("click", selectOperator)
);

function selectOperator(event)
{

    const button = event.target;
    operator = button.value;
    display.textContent = " ";
    hasPressedOperator = true;
    console.log(firstNumberAsNumber);
    console.log(operator);

}

let equalsButton = document.querySelector(".equal-button");

equalsButton.addEventListener("click", operate);

function operate()
{
    switch (operator){

        case "+":
            
            endNumber = firstNumberAsNumber + secondNumberAsNumber;
            console.log(endNumber);
            display.textContent = endNumber;
            break;

        case "-":
            endNumber = firstNumberAsNumber - secondNumberAsNumber;
            console.log(endNumber);
            display.textContent = endNumber;
            break;
        case "x":
            endNumber = firstNumberAsNumber * secondNumberAsNumber;
            console.log(endNumber);
            display.textContent = endNumber;
            break;
        case "/":
            endNumber = firstNumberAsNumber / secondNumberAsNumber;
            console.log(endNumber);
            display.textContent = endNumber;
            break;
        default :
            return "ERROR"; 
    }

}

/*
let number1 = parseInt(prompt("Pick your first number"));

let number2 = parseInt(prompt("Pick your second number"));


let totalNumber = 0;

let functionChoice = parseInt(prompt("What would you like to do? \n 1. Add \n 2. Subtract \n 3. Multiply \n 4. Divide"));

chooseFunction(functionChoice);

function chooseFunction(chosenNumber)
{
    switch (chosenNumber){
            case 1 :
            Add(number1, number2);
            break;

            case 2:
            Subtract(number1, number2);
            break;

            case 3:
            Multiply(number1, number2);
            break;

            case 4:
            Divide(number1, number2);
            break;
            
            default:
            alert("Not a Valid Choice.");
    }
}

function Add(number1, number2, ...otherNumbers)
{
    console.log("ADD");

    totalNumber = number1 + number2;

    console.log(totalNumber);

}

function Subtract(number1, number2, ...otherNumbers)
{
    console.log("SUBTRACT");

    totalNumber = number1 - number2;

    console.log(totalNumber);
}

function Multiply(number1, number2, ...otherNumbers)
{
    console.log("MULTIPLY");

    totalNumber = number1 * number2;

    console.log(totalNumber);
}

function Divide(number1, number2, ...otherNumbers)
{
    console.log("DIVIDE");

    totalNumber = number1 / number2;

    console.log(totalNumber);
}
*/