// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
const fs = require ('fs');
const path = require('path');
// const LicenseWebpackPlugin = require('license-webpack-plugin').LicenseWebpackPlugin;


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
        message: 'Is there a table of contents?',
        name: 'Contents',
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
        message: 'What License did you use?',
        name: 'License',
        choices: ['The MIT License', 'The GPL License', 'Apache License 2.0', 'GNU General Public License v3.0', 'The Unlicense'],
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
        message: 'Are there any questions about your ?',
        name: 'Questions',
        validate:(value) => {
            if (value)
            {return true} 
            else {return 'please enter a value'}},
    }
    

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
           let template =  generateMarkdown(answers);
           console.log(template)

           writeToFile('README.md', template );
           
    })



 }

// Function call to initialize app
init();
