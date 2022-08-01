// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
        {
        type: 'input',
        message: "What is your Github username?",
        name: 'userName'
        },
        {
        type: 'input',
        message: "What is your email address?",
        name: 'email'
        },
        {
        type: 'input',
        message: "What is your project's name?",
        name: 'projectName'
        },
        {
        type: 'input',
        message: "Please describe your project:",
        name: 'description',
        },
        {
        type: 'input',
        message: "Why would we use this project?",
        name: 'usage',
        },
        {
        type: 'input',
        message: "What do you use to install this project?",
        name: 'install',
        default: "npm i"
        },
        {
        type: 'input',
        message: "What command should be used to run this project?",
        name: 'test',
        default: "npm run test"
        },
        {
        type: 'list',
        message: "What license will this project use:",
        choices: ["MIT","Unlicense", "Apache 2.0", "GNU v3", "BSD 3-Clause", "Mozilla Public License 2.0"],
        name: 'license'
        },
        {
        type: 'input',
        message: "What is the name of a contributer to this project??",
        name: 'contribution',
        },    
];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize ap
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log('Gernerating markdown...');
            writeToFile('./README.md', generateMarkdown(answers));
        })
}

// Function call to initialize app
init();
