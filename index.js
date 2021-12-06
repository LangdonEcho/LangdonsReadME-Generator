const fileGenerator = require("./fileGenerator");
const fs = require("fs");
const inquirer = require('inquirer');

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

// Async function using util.promisify 
async function init() {
    try {
        // Ask user questions and generate responses
        const answers = await promptUser();
        const generateContent = generateReadme(answers);
        // Write new README.md to dist directory
        await writeFileAsync('./src/README.md', generateContent);
        console.log('✔️  Successfully wrote to README.md');
    }   catch(err) {
        console.log(err);
    }
  }
  
  init();  