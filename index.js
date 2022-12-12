// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const {resolve} = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description of your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What is the installation process?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'How is your project used?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What License does your project use?',
        choices: ['MIT', 'GPLv2', 'Apache', 'Other', 'None'],
        name: 'license',
    },
    {
      type: 'input',
      message: 'How would someone contribute to your project? If allowed at all.',
      default: 'N/A',
      name: 'contribute',
    },
    {
      type: 'input',
      message: 'How does someone test your project?',
      default: 'N/A',
      name: 'test',
    },
    {
      type: 'input',
      message: 'What is your GitHub account?',
      name: 'github',
    },
    {
      type: 'input',
      message: 'What is a good email for people to send questions to?',
      name: 'email',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
