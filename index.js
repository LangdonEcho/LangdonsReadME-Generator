const generatingReadme = require("./utils/generatingReadme");
const fs = require("fs");
const inquirer = require('inquirer');
const Choices = require("inquirer/lib/objects/choices");

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
    {
        type: "list",
         message: "Is there a test included?",
         name: "license",
         choices: [
            "Open",
            "MIT",
            "Apache",
            "Academic",
            "Mozilla",
         ]
    },
    {
        type: "input",
        message:"Who all contributed on this project?",
        name:"contributors"        
    },

]

// Async function using util.promisify 
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await inquirer.prompt(questions);
        const generateContent = generatingReadme(answers);
        // Write new README.md to dist directory
        fs.writeFile('./src/README.md', generateContent);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  