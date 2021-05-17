// TODO: Include packages needed for this application
const generator = require('./utils/generateMarkdown.js');
const fs = require('fs');
const inquirer = require('inquirer');


//Create an array of questions for user input
const questions =[
        {type: "input", message: "What is your github username?", name:"githubUser"},
        {type: "input", message: "What is your github email address?", name:"email" },
        {type: "input", message: "What is your project title?", name:"title" },
        {type: "input", message: "What is your project description?", name:"description" },
        {type: "input", message: "What are your installation instructions?", name:"installation" },
        {type: "input", message: "What are your usage guidelines?", name:"usage" },
        {type: "list", message: "What license are you using?", name:"license", 
        choices: ["apache-2.0", "artistic-2.0", "bsd-3-clause", "bsd-3-clause-clear", "ecl-2.0", 
        "agpl-3.0","gpl-3.0", "MIT", "NCSA", "Unlicense"] },
        {type: "input", message: "What are your contributing guidelines?", name:"contributions" },
        {type: "input", message: "What tests do you have?", name:"tests" },
        {type: "input", message: "What needs to be done if there is an issue?", name:"questions" },
];


//Create a async function in order to wait for user input. Store user input as a variable to be used in markdown generator.
//
async function init() {
    try{
        const answers = await inquirer.prompt(questions);
        // console.log(answers);
        //Pass in user answers to the generate markdown javascript:
        let generate = generator(answers);
        
        //Write the README.md file using the generate data and error catching.
        fs.writeFile('README.md', generate, err => {
            if (err) {
              console.error(err)
              return
            }
        });
    } catch(error){
        console.log(error);
    }
};

// Function call to initialize app
init();
