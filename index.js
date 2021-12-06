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
        message:"what is the title of your repository",
        name: "title"
    },
    {
        type:"input",
        message:"what is the title of your repository",
        name: "title"
    },
    {
        type:"input",
        message:"what is the title of your repository",
        name: "title"
    },

]