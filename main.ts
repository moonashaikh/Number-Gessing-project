#! /usr/bin/env node
import inquirer from "inquirer";

const randomnumber = Math.floor(Math.random()*6 + 1); 

const answers = await  inquirer.prompt ([
  {
    name: "userguessednumber",
  type:  "number",
  message:  "please guess a number between 1-6:",
},  


]);

if (answers.userguessednumber === randomnumber) {
    console.log("congratualation ! you guess right number");
} 
else {   console.log(" you guess wrong number");

} 
