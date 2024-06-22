import inquirer from "inquirer";
console.log("Welcome to My Quiz");
console.log("*You have to Gain Atleast 4 points*");
let points = 0;
let Question1 = await inquirer.prompt([
    {
        name: "one",
        message: "What is 5 + 5 Equals To ?",
        type: "list",
        choices: ["10", "11", "50", "16"]
    }
]);
if (Question1.one === "10") {
    console.log("Correct Answer!");
    points++;
}
else {
    console.log("Incorrect");
}
let Question2 = await inquirer.prompt([
    {
        name: "two",
        message: "How Many colors are there in a Rainbow?",
        type: "list",
        choices: ["9", "11", "7", "10"]
    }
]);
if (Question2.two === "7") {
    console.log("Correct Answer!");
    points++;
}
else {
    console.log("Incorrect");
}
let Question3 = await inquirer.prompt([
    {
        name: "three",
        message: "Who is the Founder of Microsoft ?",
        type: "list",
        choices: ["Mark ZuckerBurg", "Bill Gates", "Elon Musk", "None of Them"]
    }
]);
if (Question3.three === "Bill Gates") {
    console.log("Correct Answer!");
    points++;
}
else {
    console.log("Incorrect");
}
let Question4 = await inquirer.prompt([
    {
        name: "five",
        message: "Which is not one of the primary colors?",
        type: "list",
        choices: ["red", "yellow", "purple", "blue"]
    }
]);
if (Question4.four === "purple") {
    console.log("Correct Answer!");
    points++;
}
else {
    console.log("Incorrect");
}
let Question5 = await inquirer.prompt([
    {
        name: "five",
        message: "What is the Capital of Canada ?",
        type: "list",
        choices: ["Toronto", "Ottawa", "Vancouver", "None of Them"]
    }
]);
if (Question5.five === "Ottawa") {
    console.log("Correct Answer!");
    points++;
}
else {
    console.log("Incorrect");
}
//output conditions
if (points >= 4) {
    console.log("Congratulations! You Win");
    console.log(`You have Gained ${points} points!`);
}
else {
    console.log("Sorry You Have lost , Better Luck Next Time!");
    console.log(`You Gaind only ${points} points.`);
}
