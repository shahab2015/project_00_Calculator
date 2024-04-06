import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Shahab: Enter first number", type: "number", name: "firstNumber" },
    { message: "Shahab: Enter second number", type: "number", name: "secondNumber" },
    {
        message: "Select one of operators to perform operation: ",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator) {
    console.log(answer.firstNumber / answer.secondNumber);
}
else {
    console.log("Please Select valid operator.");
}
