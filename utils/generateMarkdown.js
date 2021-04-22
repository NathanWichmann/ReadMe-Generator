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
  return `[![License:](https://img.shields.io/badge/license-${license}-yellow.svg)](https://opensource.org/licenses/${license})`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 
  return ` :EMOJICODE:
  ${renderLicenseBadge(data.License)}
 
  # THIS IS MY TITLE: :point_right:<br> 
  ${data.Title} 
  # DESCRIPTION: <br>
  ${data.Description}
  # TABLE OF CONTENTS: <br>
  - [TITLE](#THIS-IS-MY-TITLE:)
  - [DESCRIPTION](#DESCRIPTION:)
  - [INSTALLTION](#INSTALLATION:)
  - [USAGE](#USAGE:)
  - [CONTRIBUTORS](#CONTRIBUTION:)
  - [LICENSE](#License:)
  - [TESTS](#TESTS:)
  - [Questions](#QUESTIONS:) 
  
  # INSTALLATION: <br>
  ${data.Installation}
  # USAGE: :running: <br>
  ${data.Usage} 
  # CONTRIBUTION: :dancing_men:<br>
  ${data.Contribution}
  # License: <br>
  ${renderLicenseBadge(data.License)}
  ${renderLicenseLink(data.License)}
  ## TESTS: :heavy_check_mark:<br>
  ${data.Tests}
  # QUESTIONS: <br>
  <a>${data.github}<

  If you have any questions for me about this Application, please feel free to reach 
  out to me directly on Github on my profile page https://github.com/${data.github} <br>
  or you can email me directly at ${data.email}
  `;
}

module.exports = generateMarkdown;
