// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? ',
        validateInput: titleInput => {
            // How does this know to re-ask the question if False is returned?
            if (titleInput) {
                return true;
            } else {
                console.log("Error. Please enter a title for your project.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description for your project: ',
        validateInput: descInput => {
            if (descInput) {
                return true;
            } else {
                console.log("Error. Please enter a description for your project.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project: ',
        validateInput: installationInput => {
            if (installationInput) {
                return true;
            } else {
                console.log("Error. Please enter installation instructions for your project.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage information for your project: ',
        validateInput: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Error. Please provide usage information for your project.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide guidelines for how to contribute to this project: ',
        validateInput: contributeInput => {
            if (contributeInput) {
                return true;
            } else {
                console.log("Error. Please provide contribution guidelines for your project.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide instructions on how to test your application: ',
        validateInput: testInput => {
            if (testInput) {
                return true;
            } else {
                console.log("Error. Please provide instructions on how to test your application.");
                return false;
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license will you use for your project?',
        choices: ['agpl', 'apache', 'mit', 'no license']
    },
    {
        type: 'input',
        name: 'githubName',
        message: 'Enter your GitHub Username: ',
        validateInput: githubInput => {
            if (githubInput) {
                return true;
            } else {
                console.log("Error. Please enter your GitHub username.");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: ',
        validateInput: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log("Error. Please enter your email address.");
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
}

// Function call to initialize app
init();
