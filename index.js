// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require ('fs');
const path = require('path');

// const licenses = {
//     'The MIT License': '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
//     'ISC License': '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
//     'Apache License 2.0': 'https://img.shields.io/badge/License-Apache%202.0-blue.svg',
//     'GNU General Public License v3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
//     'Mozillia Public License 2.0': '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
// }


const licenses = ['MIT', 'APACHE 2.0', 'MOZILLIA', 'GPL 3.0', 'None']

// TODO: Create an array of questions for user input
// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [
    {
        type: 'input',
        message: 'What is the title of your Application?',
        name: 'Title',
        validate:(value) => {
            if (value)
            {return true} 
            else {return 'please enter a value'}},
    },
    { 
        type: 'input',
        message: 'Describe your Application?',
        name: 'Description',
        validate:(value) => {
            if (value)
            {return true} 
            else {return 'please enter a value'}},
    },
    {
        type: 'input',
        message: 'How do you install your Application?',
        name: 'Installation',
        validate:(value) => {
            if (value)
            {return true} 
            else {return 'please enter a value'}},
    },
    {
        type: 'input',
        message: 'What is your Application used for?',
        name: 'Usage',
        validate:(value) => {
            if (value)
            {return true} 
            else {return 'please enter a value'}},
    },
    {
        type: 'input',
        message: 'Did anyone else contribute to your Application?',
        name: 'Contribution',
        validate:(value) => {
            if (value)
            {return true} 
            else {return 'please enter a value'}},
    },
    {
        type: 'list',
        message: 'What License do you want to use?',
        name: 'License',
        choices: licenses,
        validate:(value) => {
            if (value)
            {return true} 
            else {return 'please enter a value'}},
    },
    {
        type: 'input',
        message: 'Are there any tests needed?',
        name: 'Tests',
        validate:(value) => {
            if (value)
            {return true} 
            else {return 'please enter a value'}},
    },
    {
        type: 'input',
        message: 'Please enter your Github user name?',
        name: 'Questions',
        validate:(value) => {
            if (value)
            {return true} 
            else {return 'please enter a value'}},
    },
    {
        type: 'input',
        message: 'Please enter your email?',
        name: 'questions',
        validate:(value) => {
            if (value)
            {return true} 
            else {return 'please enter a value'}},
    },
    

];


// TODO: Create a function to write README file
function writeToFile(fileName, data) { 
        fs.writeFileSync(path.join(process.cwd(), fileName), data);
        console.log('your readme.md has been created')


}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions)
        .then(function(answers){
         //   console.log(answers)
        //   answers["badge"] = licenses[answers.License]
           let template =  generateMarkdown(answers);
           console.log(template)

           writeToFile('READMETWO.md', template );
           
    })



 }

// Function call to initialize app
init();
