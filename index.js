var fileGenerator = require("./fileGenerator");
var fs = require("fs");
var inquirer = require('inquirer');

//set up prompted questions

let questions = [
    {
        type:"input",
        message:"what is the title of your repository",
        name: "title"
    },
    {
        type:"input",
        message:"write a short overview the project",
        name: "description"
    },
    {
        type:"input",
        message:"let us know what installations were needed for the project",
        name: "installation"
    },
    {
        type:"input",
        message:"why did you make this project?",
        name: "purpose"
    },
    {
        type: "input",
        message:"What is your email?",
        name:"email"        
    },
    {
        type: "input",
         message: "Is there a test included?",
         name: "tests"
    },

]