// TODO: Create a function that returns a license badge based on which license is passed in

const inquirer = require("inquirer");


// If there is no license, return an empty string
function renderLicenseBadge(license) {
  console.log(license)
 return `[![License:](https://img.shields.io/badge/license-${license}-yellow.svg)](https://opensource.org/licenses/${license})`

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `(https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 
  return ` 
  ${renderLicenseBadge(data.License)}
 
  ## THIS IS MY TITLE
  ${data.Title} 

  ## DESCRIPTION
  ${data.Description}

  ## TABLE OF CONTENTS
  - [TITLE](#THIS-IS-MY-TITLE)
  - [DESCRIPTION](#DESCRIPTION)
  - [INSTALLTION](#INSTALLATION)
  - [USAGE](#USAGE)
  - [CONTRIBUTORS](#CONTRIBUTION)
  - [LICENSE](#License)
  - [TESTS](#TESTS)
  - [QUESTIONS](#QUESTIONS) 
  
  ## INSTALLATION
  ${data.Installation}

  ## USAGE
  ${data.Usage} 

  ## CONTRIBUTION
  ${data.Contribution}

  # License
  ${renderLicenseBadge(data.License)}
  ${renderLicenseLink(data.License)}

  ## TESTS
  ${data.Tests}

  ## QUESTIONS
  If you have any questions for me about this Application, please feel free to reach 
  out to me directly on Github on my profile page <a href="https://github.com/${data.github}">https://github.com/${data.github}</a>
  or you can email me directly to  <a href="mailto:${data.email}">mailto:${data.email}</a>
  `;
}

module.exports = generateMarkdown;
