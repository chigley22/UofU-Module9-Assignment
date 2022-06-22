// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown")
const writeFileAsync = util.promisify(fs.writeFile);


function promptUser(){
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is your project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Provide a description of your Project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Provide any installation instructions needed: ",
        },
        {
            type: "input",
            name: "usage",
            message: "Provide the use of your project?"
        },
        {
            type: "input",
            name: "contributing",
            message: "List the contributors of your projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Provide any Tests for your project"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the required license for this project: ",
            choices: [
                "Apache",
                "GNU",
                "MIT",
            ]
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        },
    ]);
} 

// TODO: Create a function to write README file
// TODO: Create a function to initialize app
  async function init() {
    try {
        const answers = await promptUser();
        const generateContent = generateReadme(answers);

        await writeFileAsync('./generate/NewREADME.md', generateContent);
        console.log('You have successfully generated a ReadMe file under NewREADME.md');
    }   catch(err) {
        console.log(err);
    }
  }

// Function call to initialize app
  init();  