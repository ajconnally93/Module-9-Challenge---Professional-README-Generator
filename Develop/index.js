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
        validate: titleInput => {
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
// Don't fully understand this function
function writeToFile(fileName, data) {
    // Why is resolve below the err??? where is the reject? is that the err? Look up askBCS
    return new Promise((resolve, reject) => {
        // where does fileContent come from???
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

// TODO: Create a function to initialize app
// Figure out where to put generateMarkdown
function init() {
    // is userInput what's passed through as the answer to the questions in the console?
    inquirer.prompt(questions).then(function(answers) {
        
        const markdownString = generateMarkdown(answers);

        writeToFile('README.MD', markdownString);
        // TODO: Create a function to write README file
        // REPLACE THIS WITH THE writeToFile function call?
    //     fs.writeFile('README.md', markdownString, function(err,data) {
    //         if(err) {
    //             console.log(err)
    //         }
    //         else {
    //             console.log('Look at your spiffy new README!')
    //         }
    //         console.log(data)
    //     })
    // },

    })
    }

// Function call to initialize app
init()