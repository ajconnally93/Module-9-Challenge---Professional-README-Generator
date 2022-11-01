// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project? ',
        // validate key is what ensures a True response from the question before moving onto the next
        // true is returned by simply having any text at all inputted into the console when prompted from the question under the message key
        validate: titleInput => { 
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
        validate: descInput => {
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
        validate: installationInput => {
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
        validate: usageInput => {
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
        validate: contributeInput => {
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
        validate: testInput => {
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
        validate: githubInput => {
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
        validate: emailInput => {
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
// fileName and data will later be called as 'README.MD' and markdownString (inside function init())
function writeToFile(fileName, data) {
    // resolve/reject can be coded in whatever order feels most intuitive as a developer
    return new Promise((resolve, reject) => {
        fs.writeFile('generated-README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// NOTE: THIS IS WHEN UNDERSTANDING MODULARIZATION BECOMES VERY IMPORTANT
// TODO: Create a function to initialize app
function init() {
    // displays the questions array in order, then saves the responses as answers
    inquirer.prompt(questions).then(function(answers) {
        // replaces data with the answers inputted in the console when prompted by the questions array
        const markdownString = generateMarkdown(answers);
        // Creates the file README.MD with the content from markdownString as explained above
        writeToFile('README.MD', markdownString);
    })
}

// Function call to initialize app
init()