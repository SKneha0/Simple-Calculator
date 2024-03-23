#! /usr/bin/env node

import inquirer from "inquirer"; 

const answer = await inquirer.prompt([
  { message: " Enter First number", type: "number", name: "firstnumber" },
  { message: "enter second number", type: "number", name: "secondnumber" },
  {
    message: "select one of the operators to perform action ",
    type: "list",
    name: "operators",
    choices: ["addition", "multiplication", "subraction", "division"],
  },
]);

//conditional statement
if (answer.operators === "addition") {
  console.log(/*"your value is"=*/ answer.firstnumber + answer.secondnumber);
} else if (answer.operators === "subraction") {
  console.log(/*"your value is "-*/ answer.firstnumber - answer.secondnumber);
} else if (answer.operators === "multiplication") {
  console.log(/*"your value is "**/ answer.firstnumber * answer.secondnumber);
} else if (answer.operators === "division") {
  console.log(/*"your value is "/*/ answer.firstnumber / answer.secondnumber);
} else {
  console.log("please select valid operator");
}
