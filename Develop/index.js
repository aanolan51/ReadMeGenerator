// TODO: Include packages needed for this application
const generator = require('./utils/generateMarkdown.js');
const fs = require('fs');
const inquirer = require('inquirer');
const axios = require("axios");

//Create Table of Contents from inputs
//Create the for questions section based on user input from github username and email.
//Create an array of questions for user input
inquirer
    .prompt([
        {type: "input", message: "What is your github username?", name:"githubUser" },
        {type: "input", message: "What is your github email address?", name:"email" },
        {type: "input", message: "What is your project title?", name:"title" },
        {type: "input", message: "What is your project description?", name:"description" },
        {type: "input", message: "What are your installation instructions?", name:"installation" },
        {type: "input", message: "What are your usage guidelines?", name:"usage" },
        {type: "list", message: "What license are you using?", name:"license", 
        choices: ["apache-2.0", "artistic-2.0", "Boost Software License 1.0", "bsd-3-clause", "bsd-3-clause-clear", "Creative Commons",
         "Creative Commons Attribution 4.0", "ecl-2.0", "epl-2.0", "eupl-1.1", "agpl-3.0","gpl-3.0", "lgpl-3.0", "ISC", 
         "lppl-1.3c","Microsoft Public License", "MIT", "Mozilla Public License 2.0", "PostgreSQL", "ofl-1.1", "NCSA", "Unlicense", "zLib "] },
        {type: "input", message: "What are your contributing guidelines?", name:"contributions" },
        {type: "input", message: "What credits do you have?", name:"credits" },
    ])
    .then(function(answer){
        console.log(answer);
    });




// axios.get('https://api.github.com/users/${githubUser}')
//     .then((response) => {
//         console.log(response.data);
    
//   });


   


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    
};

// Function call to initialize app
//init();
